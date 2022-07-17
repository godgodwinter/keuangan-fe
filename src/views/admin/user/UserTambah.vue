<script setup lang="ts">
import { ref } from "vue";
import { useStoreAdmin } from "@/stores/admin";
import { Form, Field } from "vee-validate";
import fnValidasi from "@/components/lib/babengValidasi";
const storeAdmin = useStoreAdmin();
storeAdmin.setPagesActive("kategori");
interface IData {
  id: number;
  name: string;
}
const data: Ref<IData[]> = ref([]);
const dataForm: Ref<string[]> = ref([]);
</script>
<template>
  <div class="pt-4 px-5 md:flex justify-between">
    <div>
      <span
        class="text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"
      >
        Tambah User
      </span>
    </div>
    <div class="md:py-0 py-4 space-x-2 space-y-2">
      <router-link :to="{ name: 'AdminUser' }">
        <button class="btn btn-secondary btn-sm">Kembali</button></router-link
      >
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
                        <label
                          for="kategori"
                          class="text-sm font-medium block mb-2"
                          >Nama Kategori
                        </label>

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
                          >Jenis Kategori</label
                        >
                        <Field
                          :rules="fnValidasi.validateSelect"
                          v-model="dataForm.status"
                          name="status"
                          class="select select-bordered w-11/12"
                          as="select"
                        >
                          <option disabled selected>Jenis?</option>
                          <option value="Pemasukan">Pemasukan</option>
                          <option value="Pengeluaran">Pengeluaran</option>
                        </Field>

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.nominal }}
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
