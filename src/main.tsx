import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import App from "./App.tsx";
import AppTheme from "./theme/index.tsx";
import { registerSW } from "virtual:pwa-register";
import logo from "./assets/logo.png";

const UPDATE_OVERLAY_ID = "pwa-updating-overlay";
const UPDATE_STARTED_STORAGE_KEY = "pwa-update-started-at";
const UPDATE_RELOAD_STORAGE_KEY = "pwa-update-reload-requested-at";
const UPDATE_STORAGE_MAX_AGE_MS = 10 * 60 * 1000;
// const UPDATE_CHECK_INTERVAL_MS = 1 * 60 * 60 * 1000; // 1 hour

const updateOverlayNode = (
  <Box
    sx={{
      position: "fixed",
      display: "flex",
      zIndex: 9999,
      mx: "auto",
      inset: 0,
      bgcolor: "#27272A60",
    }}
  >
    <Paper
      elevation={0}
      role="status"
      aria-live="polite"
      sx={{
        borderRadius: 2,
        width: 292,
        height: 212,
        m: "auto",
        p: 2,
        textAlign: "center",
      }}
    >
      <Box sx={{ width: 40, height: 40, mx: "auto" }}>
        <img
          style={{
            height: "100%",
            width: "100%",
          }}
          src={logo}
          alt="logo"
        />
      </Box>
      <Typography
        sx={{ fontFamily: "YekanBakh", mt: 3, fontSize: 16, fontWeight: 600 }}
      >
        Updating
      </Typography>
      <Typography
        sx={{
          fontFamily: "YekanBakh",
          mt: 1.5,
          fontSize: 14,
          color: "#1A1A1AB2",
          fontWeight: 600,
        }}
      >
        Downloading the new version, please wait a few moments.
      </Typography>
    </Paper>
  </Box>
);

const createUpdateOverlay = () => {
  const existingOverlay = document.getElementById(
    UPDATE_OVERLAY_ID,
  ) as HTMLDivElement | null;
  if (existingOverlay) {
    return existingOverlay;
  }

  const overlay = document.createElement("div");
  overlay.id = UPDATE_OVERLAY_ID;
  overlay.style.display = "none";

  const host = document.body ?? document.documentElement;
  host.appendChild(overlay);
  createRoot(overlay).render(updateOverlayNode);

  return overlay;
};

const showUpdateOverlay = () => {
  const overlay =
    (document.getElementById(UPDATE_OVERLAY_ID) as HTMLDivElement | null) ??
    createUpdateOverlay();

  overlay.style.display = "block";
};

const hideUpdateOverlay = () => {
  const overlay = document.getElementById(UPDATE_OVERLAY_ID);
  if (overlay) {
    overlay.style.display = "none";
  }
};

const getStoredUpdateTimestamp = (key: string) => {
  try {
    const storedValue = window.sessionStorage.getItem(key);
    if (!storedValue) {
      return null;
    }

    const timestamp = Number(storedValue);
    return Number.isFinite(timestamp) ? timestamp : null;
  } catch {
    return null;
  }
};

const setStoredUpdateTimestamp = (key: string) => {
  try {
    window.sessionStorage.setItem(key, String(Date.now()));
  } catch {
    // Some browsers can block storage; the in-memory SW events still cover the normal flow.
  }
};

const removeStoredUpdateTimestamp = (key: string) => {
  try {
    window.sessionStorage.removeItem(key);
  } catch {
    // Ignore storage failures. The overlay can still be controlled in the current page.
  }
};

const clearStoredUpdateState = () => {
  removeStoredUpdateTimestamp(UPDATE_STARTED_STORAGE_KEY);
  removeStoredUpdateTimestamp(UPDATE_RELOAD_STORAGE_KEY);
};

const hasPendingStoredUpdate = () => {
  const startedAt = getStoredUpdateTimestamp(UPDATE_STARTED_STORAGE_KEY);
  if (startedAt === null) {
    return false;
  }

  if (Date.now() - startedAt > UPDATE_STORAGE_MAX_AGE_MS) {
    clearStoredUpdateState();
    return false;
  }

  return true;
};

const markUpdateStarted = () => {
  setStoredUpdateTimestamp(UPDATE_STARTED_STORAGE_KEY);
  removeStoredUpdateTimestamp(UPDATE_RELOAD_STORAGE_KEY);
};

const markUpdateReloadRequested = () => {
  setStoredUpdateTimestamp(UPDATE_RELOAD_STORAGE_KEY);
};

const hasUpdateReloadBeenRequested = () => {
  return (
    hasPendingStoredUpdate() &&
    getStoredUpdateTimestamp(UPDATE_RELOAD_STORAGE_KEY) !== null
  );
};

if (hasPendingStoredUpdate()) {
  showUpdateOverlay();
}

let isReloadingForUpdate = false;

const reloadForUpdate = () => {
  if (
    !hasPendingStoredUpdate() ||
    hasUpdateReloadBeenRequested() ||
    isReloadingForUpdate
  ) {
    return;
  }

  isReloadingForUpdate = true;
  markUpdateReloadRequested();
  window.location.reload();
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    reloadForUpdate();
  });
}

const attachServiceWorkerUpdateHandlers = (
  registration: ServiceWorkerRegistration,
) => {
  let isCheckingForUpdates = false;
  let isInstallingUpdate = false;
  let trackedInstallingWorker: ServiceWorker | null = null;

  const hideOverlayIfIdle = () => {
    if (!isInstallingUpdate && !hasPendingStoredUpdate()) {
      hideUpdateOverlay();
    }
  };

  const isActiveWorkerControllingPage = () => {
    return Boolean(
      registration.active &&
      registration.active === navigator.serviceWorker.controller,
    );
  };

  const watchInstallingWorker = (worker: ServiceWorker | null) => {
    if (!worker || worker === trackedInstallingWorker) {
      return;
    }

    trackedInstallingWorker = worker;
    isInstallingUpdate = true;
    markUpdateStarted();
    showUpdateOverlay();

    worker.addEventListener("statechange", () => {
      if (worker.state === "activated") {
        isInstallingUpdate = false;
        reloadForUpdate();
      }

      if (worker.state === "redundant") {
        isInstallingUpdate = false;
        clearStoredUpdateState();
        hideOverlayIfIdle();
      }
    });
  };

  const finishStoredUpdateAfterReload = () => {
    if (
      hasPendingStoredUpdate() &&
      hasUpdateReloadBeenRequested() &&
      !registration.installing &&
      !registration.waiting &&
      isActiveWorkerControllingPage()
    ) {
      clearStoredUpdateState();
      hideUpdateOverlay();
    }
  };

  const resumeStoredUpdate = () => {
    if (!hasPendingStoredUpdate()) {
      return;
    }

    showUpdateOverlay();

    if (registration.installing) {
      watchInstallingWorker(registration.installing);
      return;
    }

    if (registration.waiting) {
      watchInstallingWorker(registration.waiting);
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      return;
    }

    if (hasUpdateReloadBeenRequested()) {
      finishStoredUpdateAfterReload();
      return;
    }

    if (registration.active) {
      reloadForUpdate();
    }
  };

  registration.addEventListener("updatefound", () => {
    if (!registration.active) {
      return;
    }

    watchInstallingWorker(registration.installing);
  });

  if (registration.active && registration.installing) {
    watchInstallingWorker(registration.installing);
  }

  resumeStoredUpdate();

  const checkForUpdates = async () => {
    if (!registration.active) {
      return;
    }

    if (isCheckingForUpdates) {
      return;
    }

    isCheckingForUpdates = true;

    try {
      await registration.update();
    } catch (error) {
      console.error("Service worker update check failed:", error);
    } finally {
      isCheckingForUpdates = false;
      hideOverlayIfIdle();
    }
  };

  void checkForUpdates();

  // Optional polling mode (fallback):
  // - Enables periodic SW update checks even if the user never changes tab.
  // - Lower intervals give faster update pickup but increase network/battery usage.
  // - If you enable this block, also define UPDATE_CHECK_INTERVAL_MS at the top.
  // window.setInterval(() => {
  //   void checkForUpdates();
  // }, UPDATE_CHECK_INTERVAL_MS);

  // Recommended event-driven mode:
  // - Runs a check exactly when the app/tab becomes visible again.
  // - Usually best tradeoff: fast updates after returning to app, minimal overhead.
  // - If you remove this, updates may wait until next refresh or polling tick.
  // document.addEventListener("visibilitychange", () => {
  //   if (document.visibilityState === "visible") {
  //     void checkForUpdates();
  //   }
  // });
};

registerSW({
  immediate: true,
  onRegisteredSW(_swUrl, registration) {
    if (!registration) {
      return;
    }

    attachServiceWorkerUpdateHandlers(registration);
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <AppTheme>
        <CssBaseline enableColorScheme />
        <App />
      </AppTheme>
    </StyledEngineProvider>
  </StrictMode>,
);
