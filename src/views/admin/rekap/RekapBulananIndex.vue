<script setup lang="ts">
import Fungsi from "@/components/lib/FungsiCampur";
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
const data = ref([]);
const storeDataTransaksi = useStoreDataTransaksi();

storeAdmin.setPagesActive("rekap");

const dataAsli = computed(() => storeDataTransaksi.getData);
const dataAsliDailyPerTahun = computed(
  () => storeDataTransaksi.getDataShowDailyPerTahun
);
const dataChart = computed(() => storeDataTransaksi.getDataChartPerBulan);
// dataChartMonthly
const dataBlnThn = computed(() => storeDataTransaksi.getDataBlnThn);
storeDataTransaksi.$subscribe((mutation, state) => {
  // fnFilterRingkasan();
  fnFilterPengeluaran();
  // fnFilterPemasukan();
  console.log(dataChart.value);
});

// if (dataAsli.value.length < 1) {
ApiTransaksi.getDataRekapMonthly();
// }

const dataForm = ref([]);
dataForm.value.monthyear = {
  month: dataBlnThn.value.blnNumber - 1,
  year: dataBlnThn.value.thn,
};

// dataForm.value.monthyear = dataBlnThn.value.thn;
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
  ApiTransaksi.getDataRekapMonthly(tempData.bln, tempData.thn);
  console.log(dataForm.value.monthyear);
};
const testData = ref({
  labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
  datasets: [
    {
      data: [30, 40, 60, 70, 5],
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#97B0C4", "#A5C8ED"],
    },
  ],
});

const isRingkasanActive = ref(false);
const isPengeluaranActive = ref(true);
const isPemasukanActive = ref(false);

const fnMenuActive = (menu) => {
  if (menu == "ringkasan") {
    isRingkasanActive.value = true;
    isPengeluaranActive.value = false;
    isPemasukanActive.value = false;
  } else if (menu == "pengeluaran") {
    isRingkasanActive.value = false;
    isPengeluaranActive.value = true;
    isPemasukanActive.value = false;
  } else {
    isRingkasanActive.value = false;
    isPengeluaranActive.value = false;
    isPemasukanActive.value = true;
  }
};

const doFilterRingakasan = () => {
  fnMenuActive("ringkasan");
  fnFilterRingkasan();
};

const doFilterPengeluaran = () => {
  fnMenuActive("pengeluaran");
  fnFilterPengeluaran();
};

const doFilterPemasukan = () => {
  fnMenuActive("pemasukan");
  fnFilterPemasukan();
};

const fnResetChart = () => {
  testData.value.labels = [];
  testData.value.datasets[0].data = [];
};

const fnRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// const testFn = ref([]);
// testFn.value = dataAsli.value
//   .filter((item) => item.jenis == "pengeluaran")
//   .reduce((a, b) => a + b.nominal, 0);

const fnSort = (sort) => {
  if (sort == "namaasc") {
    // sort by nama asc
    console.log("sort by nama asc");
    data.value.sort((a, b) => {
      if (a.nama < b.nama) {
        return -1;
      }
      if (a.nama > b.nama) {
        return 1;
      }
      return 0;
    });
  } else if (sort == "namadesc") {
    // sort by nama desc
    console.log("sort by nama desc");

    data.value.sort((a, b) => {
      if (a.nama < b.nama) {
        return 1;
      }
      if (a.nama > b.nama) {
        return -1;
      }
      return 0;
    });
  } else if (sort == "tersedikit") {
    data.value.sort((a, b) => {
      return a.nominal - b.nominal;
    });
  } else {
    data.value.sort((a, b) => {
      return b.nominal - a.nominal;
    });
  }
  // fnResetChart();
  // data.value.forEach((item) => {
  //   testData.value.labels.push(`${item.nama} : ${item.persentase} %`);
  //   testData.value.datasets[0].data.push(item.nominal);
  //   testData.value.datasets[0].backgroundColor.push(item.color);
  // });
};

dataForm.value.sort = "terbanyak";
const doSort = () => {
  //get value from select
  console.log(dataForm.value.sort);
  fnSort(dataForm.value.sort);
};
// ringkasan
const fnFilterRingkasan = () => {
  data.value = dataChart.value.ringkasan;
  // data.value = [
  //   {
  //     id: 1,
  //     nama: "Pengeluaran",
  //     nominal: 0,
  //     persentase: 80,
  //     color: fnRandomColor(),
  //     bgcolor: `bg-[${fnRandomColor()}]`,
  //   },
  //   {
  //     id: 2,
  //     nama: "Pemasukan",
  //     nominal: 0,
  //     persentase: 20,
  //     color: fnRandomColor(),
  //     bgcolor: `bg-[${fnRandomColor()}]`,
  //   },
  // ];

  fnSort(dataForm.value.sort);

  fnResetChart();
  data.value.forEach((item) => {
    testData.value.labels.push(`${item.nama} : ${item.persentase} %`);
    testData.value.datasets[0].data.push(item.nominal);
    testData.value.datasets[0].backgroundColor.push(item.color);
  });
};

const fnFilterPengeluaran = () => {
  data.value = dataChart.value.pengeluaran;
  console.log(data.value);

  // data.value = [
  //   {
  //     id: 1,
  //     nama: "Tagihan",
  //     nominal: 3000,
  //     persentase: 30,
  //     color: fnRandomColor(),
  //     bgcolor: `bg-[${fnRandomColor()}]`,
  //   },
  //   {
  //     id: 2,
  //     nama: "Jajan",
  //     nominal: 3000,
  //     persentase: 30,
  //     color: fnRandomColor(),
  //     bgcolor: `bg-[${fnRandomColor()}]`,
  //   },
  //   {
  //     id: 3,
  //     nama: "Transportasi",
  //     nominal: 4000,
  //     persentase: 40,
  //     color: fnRandomColor(),
  //     bgcolor: `bg-[${fnRandomColor()}]`,
  //   },
  // ];

  fnSort(dataForm.value.sort);
  fnResetChart();
  data.value.forEach((item) => {
    testData.value.labels.push(`${item.nama} : ${item.persentase} %`);
    testData.value.datasets[0].data.push(item.nominal);
    testData.value.datasets[0].backgroundColor.push(item.color);
  });
};

const fnFilterPemasukan = () => {
  data.value = dataChart.value.pemasukan;
  // data.value = [];

  fnSort(dataForm.value.sort);
  fnResetChart();
  data.value.forEach((item) => {
    testData.value.labels.push(`${item.nama} : ${item.persentase} %`);
    testData.value.datasets[0].data.push(item.nominal);
    testData.value.datasets[0].backgroundColor.push(item.color);
  });
};

fnFilterRingkasan();
</script>
<template>
  <div class="pt-4 px-5 md:flex justify-between">
    <div>
      <span class="text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm">
        REKAP BULANAN
      </span>
    </div>
  </div>
  <!-- {{ dataAsli }} -->
  <!-- {{ dataAsliDailyPerTahun }} -->
  <!-- {{ data }} -->

  <div class="py-4 px-4">
    <div class="tabs">
      <a class="tab tab-bordered" :class="{ 'tab-active': isRingkasanActive }"
        @click="doFilterRingakasan()">Ringkasan</a>
      <a class="tab tab-bordered" :class="{ 'tab-active': isPengeluaranActive }"
        @click="doFilterPengeluaran()">Pengeluaran</a>
      <a class="tab tab-bordered" :class="{ 'tab-active': isPemasukanActive }"
        @click="doFilterPemasukan()">Pemasukan</a>
    </div>
  </div>

  <div class="pt-4 px-5 md:flex justify-between">
    <div></div>
    <div class="pt-4 px-5 flex justify-center">
      <Datepicker format="MMMM yyyy" value-format="yyyy-MM" v-model="dataForm.monthyear" monthPicker required>
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
  <!-- {{ dataChart }} -->
  <div class="py-4 px-4">
    <div class="bg-gray-100 p-1 rounded-lg">
      <DoughnutChart :chartData="testData" />
    </div>
  </div>
  <div class="py-4 px-4">
    <div class="flex justify-between w-full border-b-2 py-4 px-2 bg-base-200">
      <div class="flex space-x-2 py-4">
        <span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd" />
          </svg></span>
        <h4 class="font-bold">{{ data.length }} Kategori</h4>
      </div>
      <div>
        <select class="select select-bordered w-full max-w-xs" @change="doSort()" v-model="dataForm.sort">
          <option disabled>Urutkan?</option>
          <option value="namaasc">Nama (A-Z)</option>
          <option value="namadesc">Nama (Z-A)</option>
          <option selected value="terbanyak">Terbanyak</option>
          <option value="tersedikit">Tersedikit</option>
        </select>
      </div>
    </div>
    <div class="bg-base-100" v-for="(item, index) in data" :key="item.id">
      <div class="py-2">
        <div class="flex justify-between w-full py-4">
          <div>
            ({{ isNaN(item.persentase) ? 0 : item.persentase }}%)
            {{ item.nama }}
          </div>
          <div>
            {{ Fungsi.rupiah(item.nominal) }}
            <!-- {{ item.bgcolor }} -->
          </div>
        </div>
        <div>
          <progress class="progress w-full" :class="'bg-[#c5c5c5]'" :value="item.persentase" max="100"></progress>
        </div>
      </div>
    </div>
  </div>
</template>
