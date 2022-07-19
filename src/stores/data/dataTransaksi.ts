import { defineStore } from 'pinia'
import moment from "moment/min/moment-with-locales";
import localization from "moment/locale/id";
moment.updateLocale("id", localization);

export const useStoreDataTransaksi = defineStore({
  id: 'storeDataTransaksi',
  state: () => ({
    data: [],
    dataBlnThn: {
      nama: moment().format("MMMM YYYY"),
      bln: moment().format("MM"),
      blnNumber: moment().format("Mo"),
      blnNama: moment().format("MMMM"),
      thn: moment().format("YYYY"),
    },
    dataShow: [], //all
    dataShowDaily: [], //bln+thn
    dataShowMonthly: [], //bln+thn
    dataShowYearly: [],
    dataRekap: [],//bln+thn
    dataRekapAll: [], //all
  }),
  getters: {
    getData: (state) => state.data,
    getDataBlnThn: (state) => state.dataBlnThn,
    getDataShow: (state) => state.dataShow,
    getDataShowDaily: (state) => state.dataShowDaily,
    getDataShowMonthly: (state) => state.dataShowMonthly,
    getDataShowYearly: (state) => state.dataShowYearly,
    getDataRekap: (state) => state.dataRekap, //bln+thn
    getDataRekapAll: (state) => state.dataRekapAll,
  },
  actions: {
    setData(data: string[]): void {
      this.data = data;
    },
    setDataBlnThn(dataBlnThn: string[]): void {
      this.dataBlnThn = dataBlnThn;
    },
    setDataShow(dataShow: string[]): void {
      this.dataShow = dataShow;
    },
    setDataShowDaily(dataShowDaily: string[]): void {
      this.dataShowDaily = dataShowDaily;
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
    setDataRekapAll(dataRekapAll: string[]): void {
      this.dataRekapAll = dataRekapAll;
    },
  }
})
