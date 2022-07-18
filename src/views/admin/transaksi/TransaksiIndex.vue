<script setup lang="ts">
import Fungsi from "@/components/lib/FungsiCampur";
import ApiTransaksi from "@/services/api/apiTransaksi";
import { useStoreDataTransaksi } from "@/stores/data/dataTransaksi";
import { ref, computed } from "vue";
import { useStoreAdmin } from "@/stores/admin";
import Toast from "@/components/lib/Toast";
import router from "@/router";
const storeDataTransaksi = useStoreDataTransaksi();
storeDataTransaksi.$subscribe((mutation, state) => {
  dataAsliTgl.value = [...new Set(dataAsli.value.map((item) => item.tgl))];
  dataAsliTgl.value.forEach((item) => {
    let sumPemasukan = 0;
    dataAsli.value.forEach((item2) => {
      if (item2.tgl === item && item2.jenis === "Pemasukan") {
        sumPemasukan += parseInt(item2.nominal);
      }
    });
    let sumPengeluaran = 0;
    dataAsli.value.forEach((item2) => {
      if (item2.tgl === item && item2.jenis === "Pengeluaran") {
        sumPengeluaran += parseInt(item2.nominal);
      }
    });
    let saldoPerTgl = 0;
    saldoPerTgl = sumPemasukan - sumPengeluaran;
    // saldo = parseInt(sumPemasukan) - parseInt(sumPengeluaran);
    data.value.push({
      tgl: item,
      // data: dataAsli.value.filter((item2) => item2.tgl === item),
      count: dataAsli.value.filter((item2) => item2.tgl === item).length,
      sumPemasukan,
      sumPengeluaran,
      saldoPerTgl,
    });
  });
});

const dataAsli = computed(() => storeDataTransaksi.getData);
const dataRekap = computed(() => storeDataTransaksi.getDataRekap);

// const uniqDate= [...new Set(dataAsli.value.map((item) => item.tgl))];
const dataAsliTgl = ref([]);
const data = ref([]);
const dataForm = ref([]);
// if (dataKategoriAsli.value.length < 1) {
ApiTransaksi.getData();
// }
const storeAdmin = useStoreAdmin();

storeAdmin.setPagesActive("transaksi");
</script>
<template>
  <div class="pt-4 px-5 md:flex justify-between">
    <div>
      <!-- <span
        class="text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"
      >
        Dashboard
      </span> -->
      <!-- {{ dataAsli }} -->

      <!-- {{ dataAsli.length }} -->
      <!-- {{ dataAsliTgl }} -->
      <!-- {{ data }} -->
      <!-- {{ dataRekap }} -->
    </div>
    <div class="md:py-0 py-4 space-x-2 space-y-2">
      <!-- <input
        type="date"
        placeholder="Pilih Bulan"
        class="input input-bordered w-full max-w-xs"
      /> -->
      <Datepicker
        format="yyyy/MM"
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
    </div>
  </div>
  <div class="w-full py-4 px-2 flex justify-center">
    <div class="tabs">
      <a class="tab tab-bordered">Harian</a>
      <a class="tab tab-bordered tab-active">Mingguan</a>
      <a class="tab tab-bordered">Bulanan</a>
      <a class="tab tab-bordered">Tahunan</a>
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

  <div class="w-full py-4 flex-col justify-center px-4 space-y-4 shadow-md">
    <!-- head -->
    <div class="grid grid-cols-3 w-full">
      <div class="grid-cols-1 font-bold border-r-2">
        <div class="flex flex-row space-x-2">
          <span class="text-2xl">17</span>
          <div>
            <div><span>Juni 2022</span></div>
            <div>Minggu</div>
          </div>
        </div>
      </div>
      <div class="text-right text-sky-600 border-r-2 px-2">Rp 400.000</div>
      <div class="text-right text-red-600">Rp 450.000</div>
    </div>
    <!-- head -->
    <!-- content -->
    <div class="grid grid-cols-3 w-full">
      <div class="grid-cols-1 border-r-2"><span>Pakaian</span></div>
      <div class="border-r-2 px-2">
        <span>Baju baru test text panjang abcdefg</span>
      </div>
      <div class="text-right text-red-600 hover:underline">Rp 100.000</div>
    </div>
    <div class="grid grid-cols-3 w-full">
      <div class="grid-cols-1 border-r-2"><span>Gaji</span></div>
      <div class="border-r-2 px-2"><span>-</span></div>
      <div class="text-right text-sky-600 hover:underline">Rp 400.000</div>
    </div>
    <div class="grid grid-cols-3 w-full">
      <div class="grid-cols-1 border-r-2"><span>Makanan</span></div>
      <div class="border-r-2 px-2"><span>-</span></div>
      <div class="text-right text-red-600 hover:underline">Rp 400.000</div>
    </div>
    <!-- content -->
  </div>
</template>
