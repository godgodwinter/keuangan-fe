import { defineStore } from 'pinia'

export const useStoreDataKategori = defineStore({
  id: 'storeDataKategori',
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
