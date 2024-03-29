<script setup lang="ts">
import ApiKategori from "@/services/api/apiKategori";
import { ref, computed } from "vue";
import { useStoreAdmin } from "@/stores/admin";
import Toast from "@/components/lib/Toast";
import { useStoreDataKategori } from "@/stores/data/dataKategori";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const storeAdmin = useStoreAdmin();
storeAdmin.setPagesActive("kategori");

const storeDataKategori = useStoreDataKategori();
const dataAsli = computed(() => storeDataKategori.getData);
storeDataKategori.$subscribe((mutation, state) => {
  // console.log(mutation, state);
  data.value = dataAsli.value;
});

interface IData {
  id: number;
  nama: string;
  jenis: string;
}
const dataExample = [
  {
    id: 1,
    nama: "Kategori 1",
    jenis: "Pemasukan",
  },
  {
    id: 2,
    nama: "Kategori 2",
    jenis: "Pemasukan",
  },
  {
    id: 3,
    nama: "Kategori 3",
    jenis: "Pengeluaran",
  },
];
const data: Ref<IData[]> = ref([]);
// data.value = dataExample;
data.value = dataAsli.value;
if (dataAsli.value.length < 1) {
  ApiKategori.getData();
}
const columns = [
  {
    label: "Actions",
    field: "actions",
    sortable: false,
    width: "50px",
    tdClass: "text-center",
    thClass: "text-center",
  },
  {
    label: "Nama",
    field: "nama",
    type: "String",
  },
  {
    label: "Jenis Kategori",
    field: "jenis",
    type: "String",
  },
];

const doRefreshData = () => {
  if (confirm("Apakah anda yakin menghapus data ini?")) {
    ApiKategori.getData();
    Toast.success("Info", "Refresh Data!");
  }
};

const doDeleteData = async (id: number, index: number): Promise<Response> => {
  if (confirm("Apakah anda yakin menghapus data ini?")) {
    // data.value.splice(index, 1);
    const resDelete = await ApiKategori.deleteData(id);
    if (resDelete) {
      jenis.value = null;
      isAllActive.value = true;
      isPengeluaranActive.value = false;
      isPemasukanActive.value = false;
      Toast.success("Info", "Data berhasil dihapus!");
      // ApiKategori.getData();
    }
  }
};

const doEditData = async (id: number, index: number) => {
  router.push({
    name: "AdminKategoriEdit",
    params: { id: id },
  });
};

const jenis: Ref<string | null> = ref(null);

const styleTabActive = "tab-active";
const isAllActive = ref(true);
const isPengeluaranActive = ref(false);
const isPemasukanActive = ref(false);

const filterAll = () => {
  jenis.value = null;
  isAllActive.value = true;
  isPengeluaranActive.value = false;
  isPemasukanActive.value = false;
  data.value = dataAsli.value;
};

const filterPengeluaran = () => {
  jenis.value = "Pengeluaran";
  isAllActive.value = false;
  isPengeluaranActive.value = true;
  isPemasukanActive.value = false;
  data.value = dataAsli.value.filter((item) => item.jenis === "Pengeluaran");
};
const filterPemasukan = () => {
  jenis.value = "Pemasukan";
  isAllActive.value = false;
  isPengeluaranActive.value = false;
  isPemasukanActive.value = true;
  data.value = dataAsli.value.filter((item) => item.jenis === "Pemasukan");
};
</script>
<template>
  <div class="pt-4 px-5 md:flex justify-between">
    <div>
      <span
        class="text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"
      >
        Kategori
      </span>
    </div>
    <div class="md:py-0 py-4 space-x-2 space-y-2"></div>
  </div>
  <div class="w-full py-4 px-2 flex justify-center">
    <div class="tabs">
      <a
        class="tab tab-bordered"
        :class="{ 'tab-active': isAllActive }"
        @click="filterAll()"
        >Semua</a
      >
      <a
        class="tab tab-bordered"
        :class="{ 'tab-active': isPengeluaranActive }"
        @click="filterPengeluaran()"
        >Pengeluaran</a
      >
      <a
        class="tab tab-bordered"
        :class="{ 'tab-active': isPemasukanActive }"
        @click="filterPemasukan()"
        >Pemasukan</a
      >
    </div>
  </div>

  <div class="md:py-2 px-4 lg:flex flex-wrap gap-4">
    <div class="w-full lg:w-full">
      <div class="bg-white shadow rounded-lg px-4 py-4">
        <div v-if="data">
          <vue-good-table
            theme="polar-bear"
            :line-numbers="true"
            compactMode
            :columns="columns"
            :rows="data"
            :search-options="{
              enabled: true,
            }"
            :pagination-options="{
              enabled: true,
              perPageDropdown: [10, 20, 50],
            }"
            styleClass="vgt-table striped bordered condensed"
            class="py-0"
          >
            <template #table-actions>
              <div class="space-x-1 space-y-1 gap-1">
                <button
                  class="btn btn-sm btn-secondary tooltip"
                  data-tip="Refresh Data"
                  @click="doRefreshData()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <router-link
                  :to="{
                    name: 'AdminKategoriTambah',
                    params: { jenis: jenis },
                  }"
                >
                  <button
                    class="btn btn-sm btn-primary tooltip"
                    data-tip="Tambah Data"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </router-link>
              </div>
            </template>
            <!-- <template #table-actions-bottom>
              This will show up on the bottom of the table.
            </template> -->
            <template #table-row="props">
              <span v-if="props.column.field == 'actions'">
                <div
                  class="text-sm font-medium text-center flex justify-center space-x-1"
                >
                  <button
                    class="btn btn-sm btn-warning"
                    @click="doEditData(props.row.id, props.index)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    class="btn btn-sm btn-danger"
                    @click="doDeleteData(props.row.id, props.index)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
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
                </div>
              </span>

              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>
          </vue-good-table>
        </div>
      </div>
    </div>
  </div>
</template>
