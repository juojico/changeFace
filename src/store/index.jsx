import create from "zustand";
import { repeatRange } from "utils";

export const useStore = create((set) => ({
  face: 0,
  eyes: 0,
  changeFace: () =>
    set((state) => ({ ...state, face: repeatRange(state.face + 1, 2) })),
  changeEyes: () =>
    set((state) => ({ ...state, eyes: repeatRange(state.eyes + 1, 2) })),
}));
