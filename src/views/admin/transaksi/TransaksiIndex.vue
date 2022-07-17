<script setup lang="ts">
import { ref, computed } from "vue";
import { useStoreAdmin } from "@/stores/admin";
import Toast from "@/components/lib/Toast";
import router from "@/router";
const storeAdmin = useStoreAdmin();
const dataAsli = ref([]);

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
    </div>
    <div class="md:py-0 py-4 space-x-2 space-y-2">
      <input
        type="date"
        placeholder="Pilih Bulan"
        class="input input-bordered w-full max-w-xs"
      />
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
        <div class="text-sky-600">800.000</div>
      </div>

      <div class="">
        <div class="font-bold">Pengeluaran</div>
        <div class="text-red-600">440.000</div>
      </div>

      <div class="">
        <div class="font-bold">Saldo</div>
        <div class="text-primary-content">360.000</div>
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
