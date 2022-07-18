import { defineStore } from 'pinia'

export const useStoreDataSkills = defineStore({
  id: 'storeDataSkills',
  state: () => ({
    data: []
  }),
  getters: {
    getData: (state) => state.data
  },
  actions: {
    setData(data: string[]): void {
      this.data = data;
    },
  }
})
