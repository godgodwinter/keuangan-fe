<script setup lang="ts">
import LockedPages from "@/views/other/LockedPages.vue";
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
const dataRekap = computed(() => storeDataTransaksi.getDataRekap);

// const uniqDate= [...new Set(dataAsli.value.map((item) => item.tgl))];
const dataAsliTgl = ref([]);
// const data = ref([]);
const dataForm = ref([]);
if (dataAsli.value.length < 1) {
  ApiTransaksi.getData();
}
const storeAdmin = useStoreAdmin();

storeAdmin.setPagesActive("transaksi");

const doDeleteData = async (id: number, index: number): Promise<Response> => {
  if (confirm("Apakah anda yakin menghapus data ini?")) {
    // data.value.splice(index, 1);
    const resDelete = await ApiTransaksi.deleteData(id);
    if (resDelete) {
      Toast.success("Info", "Data berhasil dihapus!");
      // ApiKategori.getData();
      await ApiTransaksi.getData();
    } else {
      Toast.danger("Info", "Data gagal dihapus!");
    }
  }
};

const doEditData = async (id: number, index: number) => {
  router.push({
    name: "AdminTransaksiEdit",
    params: { id: id },
  });
};

const isHarianActive = ref(true);
const isMingguanActive = ref(false);
const isBulananActive = ref(false);
const isTahunanActive = ref(false);

const fnMenuActive = (menu) => {
  if (menu == "harian") {
    isHarianActive.value = true;
    isMingguanActive.value = false;
    isBulananActive.value = false;
    isTahunanActive.value = false;
  } else if (menu == "mingguan") {
    isHarianActive.value = false;
    isMingguanActive.value = true;
    isBulananActive.value = false;
    isTahunanActive.value = false;
  } else if (menu == "bulanan") {
    isHarianActive.value = false;
    isMingguanActive.value = false;
    isBulananActive.value = true;
    isTahunanActive.value = false;
  } else if (menu == "tahunan") {
    isHarianActive.value = false;
    isMingguanActive.value = false;
    isBulananActive.value = false;
    isTahunanActive.value = true;
  }
};

const doHarian = async (values: any): Promise<void> => {
  fnMenuActive("harian");
  // Toast.babeng("Belum tersedia", "Masih Proses pengembangan!");
};
const doMingguan = async (values: any): Promise<void> => {
  fnMenuActive("mingguan");
  // Toast.babeng("Belum tersedia", "Masih Proses pengembangan!");
};
const doBulanan = async (values: any): Promise<void> => {
  fnMenuActive("bulanan");
  // Toast.babeng("Belum tersedia", "Masih Proses pengembangan!");
};
const doTahunan = async (values: any): Promise<void> => {
  fnMenuActive("tahunan");
  // Toast.babeng("Belum tersedia", "Masih Proses pengembangan!");
};
</script>
<template>
  <div class="w-full py-4 px-2 flex justify-center">
    <div class="tabs">
      <a
        class="tab tab-bordered"
        :class="{ 'tab-active': isHarianActive }"
        @click="doHarian()"
        >Harian</a
      >
      <a
        class="tab tab-bordered"
        :class="{ 'tab-active': isMingguanActive }"
        @click="doMingguan()"
        >Mingguan</a
      >
      <a
        class="tab tab-bordered"
        :class="{ 'tab-active': isBulananActive }"
        @click="doBulanan()"
        >Bulanan</a
      >
      <a
        class="tab tab-bordered"
        :class="{ 'tab-active': isTahunanActive }"
        @click="doTahunan()"
        >Tahunan</a
      >
    </div>
  </div>
  <div v-if="isHarianActive">
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
            {{
              Fungsi.rupiah(dataRekap.pengeluaran ? dataRekap.pengeluaran : 0)
            }}
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
      v-for="(item, index) in data"
    >
      <!-- head -->
      <div class="grid grid-cols-3 w-full">
        <div class="grid-cols-1 font-bold border-r-2">
          <div class="flex flex-row space-x-2">
            <span class="text-2xl">{{ item.tgl }}</span>
            <div>
              <div>
                <span>{{ item.blnthn }}</span>
              </div>
              <div>{{ item.week }}</div>
            </div>
          </div>
        </div>
        <div class="text-right text-sky-600 border-r-2 px-2">
          {{ Fungsi.rupiah(item.sumPemasukan ? item.sumPemasukan : 0) }}
        </div>
        <div class="text-right text-red-600">
          {{ Fungsi.rupiah(item.sumPengeluaran ? item.sumPengeluaran : 0) }}
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
      <!-- <div class="grid grid-cols-3 w-full">
      <div class="grid-cols-1 border-r-2"><span>Gaji</span></div>
      <div class="border-r-2 px-2"><span>-</span></div>
      <div class="text-right text-sky-600 hover:underline">Rp 400.000</div>
    </div>
    <div class="grid grid-cols-3 w-full">
      <div class="grid-cols-1 border-r-2"><span>Makanan</span></div>
      <div class="border-r-2 px-2"><span>-</span></div>
      <div class="text-right text-red-600 hover:underline">Rp 400.000</div>
    </div> -->
      <!-- content -->
    </div>
  </div>
  <div v-else>
    <LockedPages />
  </div>
</template>
