<script setup lang="ts">
import Fungsi from "@/components/lib/FungsiCampur";
import ApiTransaksi from "@/services/api/apiTransaksi";
import { useStoreDataTransaksi } from "@/stores/data/dataTransaksi";
import { ref, computed } from "vue";
import { useStoreAdmin } from "@/stores/admin";
import Toast from "@/components/lib/Toast";
import router from "@/router";
import moment from "moment/min/moment-with-locales";
import localization from "moment/locale/id";
moment.updateLocale("id", localization);
const today = moment().format("DD MMMM YYYY");
const storeDataTransaksi = useStoreDataTransaksi();
storeDataTransaksi.$subscribe((mutation, state) => {});
const dataAsli = computed(() => storeDataTransaksi.getData);
const data = computed(() => storeDataTransaksi.getDataShow);
const dataMonthly = computed(() => storeDataTransaksi.getDataShowMonthly);
const dataRekap = computed(() => storeDataTransaksi.getDataRekap);
const dataBlnThn = computed(() => storeDataTransaksi.getDataBlnThn);

// const uniqDate= [...new Set(dataAsli.value.map((item) => item.tgl))];
const dataAsliTgl = ref([]);
// const data = ref([]);
const dataForm = ref([]);
if (dataAsli.value.length < 1) {
  ApiTransaksi.getData();
}
const storeAdmin = useStoreAdmin();

storeAdmin.setPagesActive("transaksi");

dataForm.value.monthyear = dataBlnThn.value.thn;

const doChangeMonth = () => {
  let m = dataBlnThn.value.bln;
  let y = dataForm.value.monthyear;
  let blnthmTemp = {
    month: m - 1,
    year: y,
  };
  let tempData = {
    nama: moment(blnthmTemp).format("MMMM YYYY"),
    bln: moment(blnthmTemp).format("MM"),
    blnNumber: moment(blnthmTemp).format("Mo"),
    blnNama: moment(blnthmTemp).format("MMMM"),
    thn: moment(blnthmTemp).format("YYYY"),
  };
  storeDataTransaksi.setDataBlnThn(tempData);
  ApiTransaksi.getData();
  //   console.log(blnthmTemp, tempData, dataForm.value.monthyear);
};
</script>
<template>
  <div class="pt-4 px-5 flex justify-center">
    <div class="md:py-0 py-4 space-x-2 space-y-2 flex">
      <Datepicker
        format="yyyy"
        value-format="yyyy"
        v-model="dataForm.monthyear"
        yearPicker
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
  <div class="w-full py-6 px-2 flex justify-center shadow">
    <div class="grid grid-cols-3 w-full text-center">
      <div>
        <div class="font-bold">Pemasukan</div>
        <div class="text-sky-600">
          {{ Fungsi.rupiah(dataRekap.pemasukan ? dataRekap.pemasukan : 0) }}
        </div>
      </div>

      <div class="">
        <div class="font-bold">Pengeluaran</div>
        <div class="text-red-600">
          {{ Fungsi.rupiah(dataRekap.pengeluaran ? dataRekap.pengeluaran : 0) }}
        </div>
      </div>

      <div class="">
        <div class="font-bold">Saldo</div>
        <div class="text-primary-content">
          {{ Fungsi.rupiah(dataRekap.saldo ? dataRekap.saldo : 0) }}
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-full py-4 flex-col justify-center px-4 space-y-4 shadow-md"
    v-for="(item, index) in dataMonthly"
  >
    <!-- head -->
    <div class="grid grid-cols-4 w-full">
      <div class="grid-cols-1 font-bold border-r-2">
        <div class="flex flex-row space-x-2">
          <span class="text-sm lg:text-2xl">{{ item.nama }}</span>
          <div>
            <div>
              <!-- <span>{{ item.nama }}</span> -->
            </div>
            <!-- <div>{{ item.week }}</div> -->
          </div>
        </div>
      </div>
      <div class="text-right text-sky-600 border-r-2 px-2">
        {{ Fungsi.rupiah(item.pemasukan ? item.pemasukan : 0) }}
      </div>
      <div class="text-right text-red-600">
        {{ Fungsi.rupiah(item.pengeluaran ? item.pengeluaran : 0) }}
      </div>
      <div class="text-right text-neutral">
        {{ Fungsi.rupiah(item.saldoMonthly ? item.saldoMonthly : 0) }}
      </div>
    </div>
    <!-- head -->
    <!-- content -->
    <div
      class="grid grid-cols-3 w-full"
      v-for="(subItem, subItemIndex) in item.data"
    >
      <div class="grid-cols-1 border-r-2 flex space-x-2">
        <button
          class="bg-transparent hover:bg-gray-200 text-danger font-semibold hover:text-danger-content border border-danger hover:border-danger py-2 px-2 rounded"
          @click="doDeleteData(subItem.id, subItemIndex)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <span>{{ subItem.kategori_nama }}</span>
      </div>
      <div class="border-r-2 px-2">
        <span>{{ subItem.nama }}</span>
      </div>
      <div
        class="text-right hover:underline"
        @click="doEditData(subItem.id, subItemIndex)"
        :class="{
          'text-red-600': subItem.jenis == 'Pengeluaran',
          'text-sky-600': subItem.jenis == 'Pemasukan',
        }"
      >
        {{ Fungsi.rupiah(subItem.nominal ? subItem.nominal : 0) }}
      </div>
    </div>
    <!-- content -->
  </div>
</template>
