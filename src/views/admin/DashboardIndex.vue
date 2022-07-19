<script setup lang="ts">
import { ref, computed } from "vue";
import ApiTransaksi from "@/services/api/apiTransaksi";
import { useStoreDataTransaksi } from "@/stores/data/dataTransaksi";
import { useStoreAdmin } from "@/stores/admin";
import Toast from "@/components/lib/Toast";
import router from "@/router";
import moment from "moment/min/moment-with-locales";
import localization from "moment/locale/id";
moment.updateLocale("id", localization);
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
const today = moment().format("DD MMMM YYYY");
const storeAdmin = useStoreAdmin();
const dataAsli = ref([]);
const storeDataTransaksi = useStoreDataTransaksi();

storeAdmin.setPagesActive("dashboard");

const dataBlnThn = computed(() => storeDataTransaksi.getDataBlnThn);
const dataForm = ref([]);
dataForm.value.monthyear = {
  month: dataBlnThn.value.blnNumber - 1,
  year: dataBlnThn.value.thn,
};

const doChangeMonth = () => {
  let m = dataForm.value.monthyear.month;
  let y = dataForm.value.monthyear.year;
  let tempData = {
    nama: moment(dataForm.value.monthyear).format("MMMM YYYY"),
    bln: moment(dataForm.value.monthyear).format("MM"),
    blnNumber: moment(dataForm.value.monthyear).format("Mo"),
    blnNama: moment(dataForm.value.monthyear).format("MMMM"),
    thn: moment(dataForm.value.monthyear).format("YYYY"),
  };
  storeDataTransaksi.setDataBlnThn(tempData);
  ApiTransaksi.getData();
  // console.log(dataForm.value.monthyear);
};
const testData = {
  labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
  datasets: [
    {
      data: [30, 40, 60, 70, 5],
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#97B0C4", "#A5C8ED"],
    },
  ],
};
</script>
<template>
  <div class="pt-4 px-5 md:flex justify-between">
    <div>
      <span
        class="text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"
      >
        Dashboard
      </span>
    </div>
  </div>

  <div class="py-4 px-4">
    <div class="tabs">
      <a class="tab tab-bordered">Ringkasan</a>
      <a class="tab tab-bordered tab-active">Pengeluaran</a>
      <a class="tab tab-bordered">Pemasukan</a>
    </div>
  </div>

  <div class="pt-4 px-5 md:flex justify-between">
    <div></div>
    <div class="pt-4 px-5 flex justify-center">
      <Datepicker
        format="MMMM yyyy"
        value-format="yyyy-MM"
        v-model="dataForm.monthyear"
        monthPicker
        required
      >
        <template #calendar-header="{ index, day }">
          <div :class="index === 5 || index === 6 ? 'red-color' : ''">
            {{ day }}
          </div>
        </template>
      </Datepicker>
      <button class="btn btn-sm btn-primary" @click="doChangeMonth()">
        Pilih
      </button>
    </div>
  </div>

  <div class="py-4 px-4">
    <div class="bg-gray-100 p-1 rounded-lg">
      <DoughnutChart :chartData="testData" />
    </div>
  </div>
  <div class="py-4 px-4">
    <div class="flex justify-between w-full border-b-2 py-4 px-2 bg-base-200">
      <div class="flex space-x-2 py-4">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            /></svg
        ></span>
        <h4 class="font-bold">8 Kategori</h4>
      </div>
      <div>
        <select class="select select-bordered w-full max-w-xs">
          <option disabled>Urutkan?</option>
          <option>Nama (A-Z)</option>
          <option>Nama (Z-A)</option>
          <option selected>Terbanyak</option>
          <option>Tersedikit</option>
        </select>
      </div>
    </div>
    <div class="bg-base-100" v-for="i in 4">
      <div class="py-2">
        <div class="flex justify-between w-full py-4">
          <div>(70%) Tagihan</div>
          <div>Rp 200000</div>
        </div>
        <div>
          <progress
            class="progress progress-primary w-full"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  </div>
</template>
