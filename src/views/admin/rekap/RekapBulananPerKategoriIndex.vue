<script setup lang="ts">
import Fungsi from "@/components/lib/FungsiCampur";
import { ref, computed } from "vue";
import ApiTransaksi from "@/services/api/apiTransaksi";
import { useStoreDataTransaksi } from "@/stores/data/dataTransaksi";
import { useStoreAdmin } from "@/stores/admin";
import Toast from "@/components/lib/Toast";
import moment from "moment/min/moment-with-locales";
import localization from "moment/locale/id";
import { useRoute, useRouter } from "vue-router";
moment.updateLocale("id", localization);
const today = moment().format("DD MMMM YYYY");
const storeAdmin = useStoreAdmin();
const data = ref([]);
const dataAsli = ref([]);
const storeDataTransaksi = useStoreDataTransaksi();
const router = useRouter();
const route = useRoute();

const dataBlnThn = computed(() => storeDataTransaksi.getDataBlnThn);
const id = route.params.id;
const thn = route.params.thn ? route.params.thn : dataBlnThn.value.thn;
const bln = route.params.bln ? route.params.bln : dataBlnThn.value.bln;
const getData = async () => {
  dataAsli.value = await ApiTransaksi.getDataRekapMonthlyPerKategori(id, bln, thn);
  data.value = dataAsli.value;
}
getData();
</script>
<template>
  <div v-if="data.dataRekap">
    <div class="pt-4 px-5 md:flex justify-between">
      <div>
        <span class="text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm uppercase">
          REKAP KATEGORI " {{ data.dataRekap.nama }}" {{ dataBlnThn.nama }}
        </span>
      </div>
      <div>
        <router-link :to="{ name: 'AdminRekapBulanan'}">
          <button class=" btn btn-secondary">Kembali</button>
        </router-link>
      </div>
    </div>

    <div class="w-full py-6 px-2 flex justify-center shadow">
      <div class="grid grid-cols-3 w-full text-center">
        <div>
          <div class="font-bold">Total</div>
          <div class="text-sky-600">
            {{
            Fungsi.rupiah(data.dataRekap ? data.dataRekap.total : 0)
            }}
          </div>
        </div>


      </div>
    </div>

    <div class="w-full py-4 flex-col justify-center px-4 space-y-4 shadow-md" v-for="(item, index) in data.data">
      <!-- head -->
      <div class="grid grid-cols-3 w-full">
        <div class="grid-cols-1 font-bold border-r-2">
          <div class="flex flex-row space-x-2">
            <span class="text-lg">{{ moment(item.tgl).format("DD MMMM YYYY") }}</span>
            <!-- <div>
              <div>
                <span>{{ item.nama }}</span>
              </div>
              <div>{{ item.week }}</div>
            </div> -->
          </div>
        </div>
        <div class="text-right text-sky-600 border-r-2 px-2">
          <span>{{ item.nama }}</span>
        </div>
        <div class="text-right text-sky-600 border-r-2 px-2">
          {{ Fungsi.rupiah(item.nominal ? item.nominal : 0) }}
        </div>
        <!-- <div class="text-right text-red-600">
          {{ Fungsi.rupiah(item.sumPengeluaran ? item.sumPengeluaran : 0) }}
        </div> -->
      </div>
    </div>
    <!-- head -->
    <!-- <div>
      {{ data }}
    </div> -->
  </div>
</template>
