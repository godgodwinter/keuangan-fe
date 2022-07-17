<script setup lang="ts">
import { useStoreAdmin } from "@/stores/admin";
// import ApiProfile from "@/services/api/apiProfile";
import Toast from "@/components/lib/Toast";
import { Form, Field } from "vee-validate";
import fnValidasi from "@/components/lib/babengValidasi";
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const storeAdmin = useStoreAdmin();
storeAdmin.setPagesActive("transaksi");
const dataForm: Ref<string[]> = ref([]);
</script>
<template>
  <div class="w-full py-4 px-2 flex justify-center">
    <div class="tabs">
      <a class="tab tab-bordered">Pengeluaran</a>
      <a class="tab tab-bordered tab-active">Pemasukan</a>
    </div>
  </div>

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
                        <Field
                          :rules="fnValidasi.validateData2"
                          v-model="dataForm.kategori"
                          name="kategori"
                          type="text"
                          class="input input-bordered w-11/12"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.kategori }}
                        </div>
                      </div>
                      <div>
                        <label
                          for="nominal"
                          class="text-sm font-medium block mb-2"
                          >Nominal</label
                        >
                        <Field
                          :rules="fnValidasi.validateData2"
                          v-model="dataForm.nominal"
                          name="nominal"
                          type="date"
                          class="input input-bordered w-11/12"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.nominal }}
                        </div>
                      </div>
                      <div>
                        <label for="name" class="text-sm font-medium block mb-2"
                          >Keterangan</label
                        >
                        <Field
                          :rules="fnValidasi.validateData2"
                          v-model="dataForm.about_me"
                          v-slot="{ field }"
                          name="about_me"
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
                          {{ errors.about_me }}
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
