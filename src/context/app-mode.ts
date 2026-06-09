import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { AppModeType } from "../types/app-mode";

interface IAppMode {
  mode: AppModeType;
}

const initialState: IAppMode = {
  mode: "light",
};

interface Actions {
  toggleMode: () => void;
  setMode: (mode: AppModeType) => void;
  reset: () => void;
}

export const useAppModeStore = create<IAppMode & Actions>()(
  persist(
    immer((set, get) => ({
      ...initialState,

      toggleMode: () =>
        set((state) => {
          state.mode = get().mode === "light" ? "dark" : "light";
        }),
      setMode: (mode: AppModeType) =>
        set((state) => {
          state.mode = mode;
        }),

      reset: () => {
        set(() => initialState);
      },
    })),
    {
      name: "app-mode",
    },
  ),
);
