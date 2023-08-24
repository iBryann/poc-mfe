import { create } from 'zustand';

export type CounterStore = {
  count: number
  increment: () => void
  decrement: () => void
}

export const useCounterStore = create<CounterStore>()((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => {
    if (!state.count) return state;

    return { count: state.count - 1 };
  }),
}));
