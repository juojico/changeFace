import create from "zustand";
import { repeatRange } from "utils";

export const useStore = create((set) => ({
  face: 0,
  hair: 0,
  eyes: 0,
  mouth: 0,
  changeFace: () =>
    set((state) => ({ ...state, face: repeatRange(state.face + 1, 3) })),
  changeEyes: () =>
    set((state) => ({ ...state, eyes: repeatRange(state.eyes + 1, 4) })),
  changeHair: () =>
    set((state) => ({ ...state, hair: repeatRange(state.hair + 1, 4) })),
  changeMouth: () =>
    set((state) => ({ ...state, mouth: repeatRange(state.mouth + 1, 2) })),
}));
