import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import { useShallow } from "zustand/shallow";
import { responsiveFontSizes, ThemeProvider } from "@mui/material/styles";

import { themeHandler } from "./handler";
import { useAppModeStore } from "../context/app-mode";

// Create cache
const appCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer],
});

const MUIProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useAppModeStore(useShallow((state) => state));
  return (
    <CacheProvider value={appCache}>
      <ThemeProvider
        defaultMode="light"
        theme={responsiveFontSizes(themeHandler(mode))}
      >
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MUIProvider;
