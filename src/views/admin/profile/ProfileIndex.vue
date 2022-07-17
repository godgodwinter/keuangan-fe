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
storeAdmin.setPagesActive("profile");
const dataForm: Ref<string[]> = ref([]);
</script>
<template>
  <div class="pt-4 px-5 md:flex justify-between">
    <div>
      <span
        class="text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"
      >
        Profile
      </span>
    </div>
    <div class="md:py-0 py-4 space-x-2 space-y-2"></div>
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
                          >Full Name</label
                        >
                        <Field
                          :rules="fnValidasi.validateData2"
                          v-model="dataForm.name"
                          name="name"
                          type="text"
                          class="input input-bordered w-11/12"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.name }}
                        </div>
                      </div>
                      <div>
                        <label for="name" class="text-sm font-medium block mb-2"
                          >About Me</label
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
                            placeholder="About me"
                          ></textarea>
                        </Field>

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.about_me }}
                        </div>
                      </div>
                      <div>
                        <label
                          for="password"
                          class="text-sm font-medium block mb-2"
                          >Password</label
                        >
                        <Field
                          :rules="fnValidasi.validateData2"
                          v-model="dataForm.password"
                          name="password"
                          type="text"
                          class="input input-bordered w-11/12"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.password }}
                        </div>
                      </div>

                      <div>
                        <label
                          for="password2"
                          class="text-sm font-medium block mb-2"
                          >Konfirmasi Password</label
                        >
                        <Field
                          :rules="fnValidasi.validateData2"
                          v-model="dataForm.password2"
                          name="password2"
                          type="text"
                          class="input input-bordered w-11/12"
                        />

                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.password2 }}
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
