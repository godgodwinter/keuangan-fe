<script setup lang="ts">
import ApiUsers from "@/services/api/apiUsers";
import { ref } from "vue";
import { useStoreAdmin } from "@/stores/admin";
import { Form, Field } from "vee-validate";
import fnValidasi from "@/components/lib/babengValidasi";
import { useRouter, useRoute } from "vue-router";
import Toast from "@/components/lib/Toast";
import { useStoreDataUsers } from "@/stores/data/dataUsers";
const router = useRouter();
const route = useRoute();

const id = route.params.id;

const storeDataUsers = useStoreDataUsers();
const storeAdmin = useStoreAdmin();
storeAdmin.setPagesActive("user");
storeDataUsers.$subscribe((mutation, state) => {});
interface IData {
  id: number;
  name: string;
}
const data: Ref<IData[]> = ref([]);
const dataForm: Ref<string[]> = ref([]);
const resData = ref(null);
const getDataId = async (): Promise<void> => {
  resData.value = await ApiUsers.getDataId(id);
  if (resData.value) {
    dataForm.value = resData.value;
  } else {
    Toast.warning("Info", "Data tidak ditemukan");
    router.push({ name: "AdminUser" });
  }
};
getDataId();

const doSubmit = async (values: any): Promise<void> => {
  // console.log(values);
  let resSubmit = await ApiUsers.doUpdate(id, values);
  if (resSubmit) {
    Toast.success("Info", "Data berhasil diupdate!");
    router.push({ name: "AdminUser" });
  }
};

const babengErrors = ref([]);

const onSubmit = async (values: any): Promise<void> => {
  // console.log(values);
  if (
    (values.password != undefined && values.password != "") ||
    (values.password2 != undefined && values.password2 != "")
  ) {
    if (values.password2 == values.password) {
      if (values.password.length < 3) {
        babengErrors.value.password = "Password minimal 3 karakter";
      } else {
        babengErrors.value.password = null;
        doSubmit(values);
      }
    } else {
      babengErrors.value.password = "Password tidak sama";
      Toast.warning(
        "Warning",
        "Konfirmasi password tidak sama! Periksa kembali"
      );
    }
  } else {
    babengErrors.value.password = null;
    values.password = null;
    values.password2 = null;
    doSubmit(values);
  }
};
</script>
<template>
  <div class="pt-4 px-5 md:flex justify-between">
    <div>
      <span
        class="text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"
      >
        Tambah Edit
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
                        <label for="nama" class="text-sm font-medium block mb-2"
                          >Nama
                        </label>

                        <Field
                          :rules="fnValidasi.validateData2"
                          v-model="dataForm.nama"
                          name="nama"
                          type="text"
                          class="input input-bordered w-11/12"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.nama }}
                        </div>
                      </div>
                      <div>
                        <label
                          for="username"
                          class="text-sm font-medium block mb-2"
                          >Username
                        </label>

                        <Field
                          :rules="fnValidasi.validateData2"
                          v-model="dataForm.username"
                          name="username"
                          type="text"
                          class="input input-bordered w-11/12"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.username }}
                        </div>
                      </div>
                      <div>
                        <label
                          for="email"
                          class="text-sm font-medium block mb-2"
                          >Email
                        </label>

                        <Field
                          :rules="fnValidasi.validateData2"
                          v-model="dataForm.email"
                          name="email"
                          type="text"
                          class="input input-bordered w-11/12"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.email }}
                        </div>
                      </div>
                      <div>
                        <label
                          for="password"
                          class="text-sm font-medium block mb-2"
                          >Password</label
                        >
                        <Field
                          v-model="dataForm.password"
                          name="password"
                          type="password"
                          class="input input-bordered w-11/12"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ babengErrors.password }}
                        </div>
                      </div>

                      <div>
                        <label
                          for="password2"
                          class="text-sm font-medium block mb-2"
                          >Konfirmasi Password</label
                        >
                        <Field
                          v-model="dataForm.password2"
                          name="password2"
                          type="password"
                          class="input input-bordered w-11/12"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ babengErrors.password }}
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
