import { defineStore } from 'pinia'

export const useStoreDataUsers = defineStore({
  id: 'storeDataUsers',
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
