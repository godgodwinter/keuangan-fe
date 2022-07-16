import { defineStore } from "pinia";

export const useStoreLanding = defineStore({
  id: "storeLanding",
  state: () => ({
    theme: "cupcake",
  }),
  getters: {
    getTheme: (state) => state.theme,
  },
  actions: {
    setTheme(theme: string): void {
      this.theme = theme;
    },
  },
});
