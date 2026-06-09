import { createTheme } from "@mui/material/styles";
import type { AppModeType } from "../types/app-mode";
import { COLORS } from "./Colors";

// Theme configuration
export const themeHandler = (mode: AppModeType) => {
  return createTheme({
    cssVariables: true,
    colorSchemes: true,

    palette: {
      mode: mode,
      primary: COLORS.primary[mode],
      secondary: COLORS.secondary[mode],
      background: COLORS.background[mode],
    },
  });
};
