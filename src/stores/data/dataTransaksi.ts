import { defineStore } from 'pinia'

export const useStoreDataTransaksi = defineStore({
  id: 'storeDataTransaksi',
  state: () => ({
    data: [],
    dataRekap: []
  }),
  getters: {
    getData: (state) => state.data,
    getDataRekap: (state) => state.dataRekap,
  },
  actions: {
    setData(data: string[]): void {
      this.data = data;
    },
    setDataRekap(dataRekap: string[]): void {
      this.dataRekap = dataRekap;
    },
  }
})
