import { defineStore } from 'pinia'

export const useStoreDataTransaksi = defineStore({
  id: 'storeDataTransaksi',
  state: () => ({
    data: [],
    dataShow: [],
    dataRekap: [],
  }),
  getters: {
    getData: (state) => state.data,
    getDataShow: (state) => state.dataShow,
    getDataRekap: (state) => state.dataRekap,
  },
  actions: {
    setData(data: string[]): void {
      this.data = data;
    },
    setDataShow(dataShow: string[]): void {
      this.dataShow = dataShow;
    },
    setDataRekap(dataRekap: string[]): void {
      this.dataRekap = dataRekap;
    },
  }
})
