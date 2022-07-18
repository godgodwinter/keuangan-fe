import { defineStore } from 'pinia'

export const useStoreDataTransaksi = defineStore({
  id: 'storeDataTransaksi',
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
