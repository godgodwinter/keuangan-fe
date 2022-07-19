<script setup lang="ts">
import LockedPages from "@/views/other/LockedPages.vue";
import CListDaily from "./index/CListDaily.vue";
import CListMonthly from "./index/CListMonthly.vue";
import CListYearly from "./index/CListYearly.vue";
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
      <!-- <a
        class="tab tab-bordered"
        :class="{ 'tab-active': isMingguanActive }"
        @click="doMingguan()"
        >Mingguan</a
      > -->
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
    <CListDaily />
  </div>
  <div v-else-if="isBulananActive">
    <CListMonthly />
  </div>
  <div v-else-if="isTahunanActive">
    <CListYearly />
  </div>

  <div v-else>
    <LockedPages />
  </div>
</template>
