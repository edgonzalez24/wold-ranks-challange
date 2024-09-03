import { defineStore } from 'pinia';

export const useStore = defineStore<'main', PiniaState>({
  id: 'main',
  state: (): PiniaState => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
  getters: {
    doubleCount: (state): number => state.count * 2,
  },
});