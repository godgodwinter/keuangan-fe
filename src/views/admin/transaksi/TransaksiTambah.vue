<script setup lang="ts">
import ApiTransaksi from "@/services/api/apiTransaksi";
import ApiKategori from "@/services/api/apiKategori";
import { useStoreDataKategori } from "@/stores/data/dataKategori";
import { useStoreAdmin } from "@/stores/admin";
import moment from "moment/min/moment-with-locales";
import localization from "moment/locale/id";
import Toast from "@/components/lib/Toast";
import { Form, Field } from "vee-validate";
import fnValidasi from "@/components/lib/babengValidasi";
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const storeDataKategori = useStoreDataKategori();
const dataKategoriAsli = computed(() => storeDataKategori.getData);
const dataKategori = ref([]);
storeDataKategori.$subscribe((mutation, state) => {
  // console.log(mutation, state);
  fnFilterKategori("Pengeluaran");
});

dataKategori.value = dataKategoriAsli.value;
// if (dataKategoriAsli.value.length < 1) {
ApiKategori.getData();
// }
const fnFilterKategori = (jenis: string) => {
  dataKategori.value = dataKategoriAsli.value.filter(
    (item) => item.jenis === jenis
  );
  pilihKategori.value = [];
  dataKategori.value.forEach((item) => {
    pilihKategori.value.push({
      label: item.nama,
      id: item.id,
    });
  });

  dataForm.value.kategori_id = {
    label: dataKategori.value[0].nama,
    id: dataKategori.value[0].id,
  };
};

moment.updateLocale("id", localization);
const router = useRouter();
const route = useRoute();
const storeAdmin = useStoreAdmin();
storeAdmin.setPagesActive("transaksi");
const dataForm: Ref<string[]> = ref([]);
const formatter = new Intl.DateTimeFormat("id", { month: "long" });
let dt = new Date();
let dateNow = dt.getDate();
let month = dt.getMonth();
let year = dt.getFullYear();
let monthLong = formatter.format(new Date(year, month));

const today = moment().format("DD MMMM YYYY");
dataForm.value.tgl = moment().format("YYYY-MM-DD");
dataForm.value.jenis = "Pengeluaran";
// dataForm.value.kategori_id = {
//   label: "tes",
//   id: 1,
// };
// dataForm.value.kategori_id.label = "Tes";
// let daysInMonth = new Date(2022, 2, 0).getDate();
let daysInMonth = new Date(year, month, 0).getDate();

const pilihKategori = ref([]);
// if (dataForm.value.jenis == "Pengeluaran") {
//   // pilihKategori.value = [
//   //   {
//   //     label: "tes",
//   //     id: 1,
//   //   },
//   //   {
//   //     label: "tes2",
//   //     id: 2,
//   //   },
//   // ];
// }

const doPengeluaran = async (values: any): Promise<void> => {
  dataForm.value.jenis = "Pengeluaran";
  dataForm.value.kategori_id = null;
  fnFilterKategori("Pengeluaran");
};
const doPemasukan = async (values: any): Promise<void> => {
  dataForm.value.jenis = "Pemasukan";
  dataForm.value.kategori_id = null;
  fnFilterKategori("Pemasukan");
};

const babengErrors = ref([]);

const onSubmit = (values) => {
  // console.log(values);

  if (dataForm.value.kategori_id == null) {
    babengErrors.value.kategori_id = "Kategori harus diisi";
  } else {
    babengErrors.value.kategori_id = "";
    values.nominal = values.nominal.replace(/\D/g, "");
    values.kategori_id = dataForm.value.kategori_id.id;
    values.kategori_nama = dataForm.value.kategori_id.label;
    doSubmit(values);
  }
};

const doSubmit = async (values: any): Promise<void> => {
  console.log(values);
  const resSubmit = await ApiTransaksi.doStoreData(values);
  if (resSubmit) {
    Toast.success("Info", "Data berhasil ditambahkan!");
    router.push({ name: "AdminTransaksi" });
  }
};

const fnRupiah = () => {
  const rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  // regex remove all non-numeric characters
  const myString = dataForm.value.nominal.replace(/\D/g, "");
  // console.log(dataForm.value.nominal, myString, rupiah.format(myString));

  dataForm.value.nominal = rupiah.format(myString);
};
</script>
<template>
  <div class="w-full py-4 px-2 flex justify-center">
    <div class="tabs">
      <a
        class="tab tab-bordered"
        :class="{ 'tab-active': dataForm.jenis == 'Pengeluaran' }"
        @click="doPengeluaran()"
        >Pengeluaran</a
      >
      <a
        class="tab tab-bordered"
        :class="{ 'tab-active': dataForm.jenis == 'Pemasukan' }"
        @click="doPemasukan()"
        >Pemasukan</a
      >
    </div>
  </div>
  <!-- {{ dataKategori }} -->
  <div class="px-4 py-4" v-if="dataForm">
    <div class="w-full">
      <div class="shadow rounded-lg px-0">
        <div class="w-full lg:w-fi mx-4">
          <div class="p-2 sm:p-6 xl:p-8">
            <Form v-slot="{ errors }" @submit="onSubmit">
              <div class="pt-0 px-0">
                <div class="w-full mx-0">
                  <div class="rounded-lg">
                    <div class="grid md:grid-cols-2 gap-2">
                      <div>
                        <label for="name" class="text-sm font-medium block mb-2"
                          >Tanggal</label
                        >
                        <Field
                          v-model="dataForm.jenis"
                          name="jenis"
                          type="hidden"
                          class="input input-bordered w-11/12"
                        />
                        <Field
                          :rules="fnValidasi.validateData2"
                          v-model="dataForm.tgl"
                          name="tgl"
                          type="date"
                          class="input input-bordered w-11/12"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.tgl }}
                        </div>
                      </div>
                      <div>
                        <div class="flex space-x-2">
                          <label
                            for="kategori"
                            class="text-sm font-medium block mb-2"
                            >Kategori
                          </label>

                          <router-link :to="{ name: 'AdminKategori' }"
                            ><span class="hover:link">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 fill-current"
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
                                /></svg></span
                          ></router-link>
                        </div>

                        <v-select
                          class="input py-2 px-3 w-11/12 style-chooser"
                          :options="pilihKategori"
                          v-model="dataForm.kategori_id"
                          v-bind:class="{ disabled: false }"
                        ></v-select>

                        <div class="text-xs text-red-600 mt-1">
                          {{ babengErrors.kategori_id }}
                        </div>
                      </div>
                      <div>
                        <label
                          for="nominal"
                          class="text-sm font-medium block mb-2"
                          >Jumlah / Nominal</label
                        >
                        <Field
                          :rules="fnValidasi.validateData2"
                          v-model="dataForm.nominal"
                          name="nominal"
                          type="text"
                          class="input input-bordered w-11/12"
                          @keyup="fnRupiah()"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.nominal }}
                        </div>
                      </div>
                      <div>
                        <label for="desc" class="text-sm font-medium block mb-2"
                          >Keterangan</label
                        >
                        <Field
                          v-model="dataForm.nama"
                          v-slot="{ field }"
                          name="nama"
                          type="text"
                          class="input input-bordered w-11/12"
                        >
                          <textarea
                            v-bind="field"
                            class="textarea textarea-bordered w-11/12 h-24"
                            placeholder="Keterangan"
                          ></textarea>
                        </Field>

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.nama }}
                        </div>
                      </div>
                    </div>

                    <div class="w-full flex justify-end mt-4 px-20">
                      <button class="btn btn-active btn-lg btn-primary">
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}
</style>
