import { defineStore } from 'pinia'

export const useStoreDataTransaksi = defineStore({
  id: 'storeDataTransaksi',
  state: () => ({
    data: [],
    dataShow: [],
    dataShowMonthly: [],
    dataShowYearly: [],
    dataRekap: [],
  }),
  getters: {
    getData: (state) => state.data,
    getDataShow: (state) => state.dataShow,
    getDataShowMonthly: (state) => state.dataShowMonthly,
    getDataShowYearly: (state) => state.dataShowYearly,
    getDataRekap: (state) => state.dataRekap,
  },
  actions: {
    setData(data: string[]): void {
      this.data = data;
    },
    setDataShow(dataShow: string[]): void {
      this.dataShow = dataShow;
    },
    setDataShowMonthly(dataShowMonthly: string[]): void {
      this.dataShowMonthly = dataShowMonthly;
    },
    setDataShowYearly(dataShowYearly: string[]): void {
      this.dataShowYearly = dataShowYearly;
    },
    setDataRekap(dataRekap: string[]): void {
      this.dataRekap = dataRekap;
    },
  }
})
