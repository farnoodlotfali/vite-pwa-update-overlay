# Vite PWA Update Overlay

React + TypeScript + Vite project for testing PWA update behavior with a visible update overlay.

The app intentionally includes many rendered components and icons so the production bundle is large enough to make service worker updates easier to observe.

## Preview

<img src="./sample.png" alt="Vite PWA Update Overlay screenshot" width="720" />

<img src="./Vite%20Pwa%20Update%20Overlay.gif" alt="Vite PWA Update Overlay demo" width="720" />

## Features

- Vite + React + TypeScript
- MUI theme with light/dark mode persistence
- `vite-plugin-pwa` with `generateSW`
- Auto-update service worker registration
- Full-screen "Updating" overlay while a new service worker version is installing
- 100 basic case components with different MUI icons
- Extra heavy update test section that increases the built JS payload

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run build:check
```

Development server:

```text
http://localhost:3037
```

Production preview:

```text
http://localhost:3000
```

## Testing PWA Updates

1. Build the app:

```bash
npm run build
```

2. Preview the built app:

```bash
npm run preview
```

3. Open `http://localhost:3000` and allow the service worker to register.

4. Change app code, for example text in `src/App.tsx` or one of the case components.

5. Build again:

```bash
npm run build
```

6. Refresh or revisit the preview page. The app checks for a new service worker and shows the update overlay while the new version is installing.

## PWA Notes

The service worker is configured in `vite.config.ts` with:

- `registerType: "autoUpdate"`
- `skipWaiting: true`
- `clientsClaim: true`
- `cleanupOutdatedCaches: true`
- `maximumFileSizeToCacheInBytes: 8 * 1024 * 1024`

The larger precache limit is intentional because this project includes heavy icon/component imports for update testing.

## Source Highlights

- `src/main.tsx`: service worker registration and update overlay logic
- `src/App.tsx`: app layout and imported case components
- `src/components/Case*.tsx`: 100 simple icon cases
- `src/components/HeavyUpdateCases.tsx`: intentionally heavy update test grid
- `src/theme/index.tsx`: MUI theme provider and dark/light mode setup
- `vite.config.ts`: Vite, React compiler, and PWA configuration
