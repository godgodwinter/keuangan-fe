import { defineStore } from 'pinia'

export const useStoreDataProfile = defineStore({
  id: 'storeDataProfile',
  state: () => ({
    data: null
  }),
  getters: {
    getData: (state) => state.data
  },
  actions: {
    setData(data): void {
      this.data = data;
    },
  }
})
