<script setup lang="ts">
import { ref, computed } from "vue";
import { Form, Field } from "vee-validate";
import NavBar from "@/components/template/landing/NavBar.vue";
import fnValidasi from "@/components/lib/babengValidasi";
import serviceAuth from "@/services/serviceAuth";
import { useStoreAdminAuth } from "@/stores/adminAuth";
const storeAdminAuth = useStoreAdminAuth();

const resLogin = ref(false);
const onSubmit = async (values: any) => {
  // console.log(values.email, values.password);
  resLogin.value = await serviceAuth.doLogin(values.email, values.password);
  if (resLogin.value) {
    // console.log("login berhasil");
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";
    const isLogin = localStorage.getItem("isLogin");
    // console.log(token, isLogin);

    storeAdminAuth.setToken(token);
    storeAdminAuth.setIsLogin(true);
    // router.push({ name: "AdminDashboard" });
  }
};
</script>

<template>
  <NavBar></NavBar>
  <section
    class="w-full flex justify-center items-center flex-col bg-primary text-primary-content"
  >
    <div class="my-36 space-y-4 flex flex-col flex-wrap">
      <!-- <picture
        ><img
          src="@/assets/img/fresh/lemon-squash.svg?__frsh_c=mpcpr8gem0wg"
          class="w-64 mx-auto"
          alt="deno is drinking fresh lemon squash"
          width="800"
          height="678"
      /></picture> -->
      <div>
        <div class="flex justify-center w-full">
          <div>
            <Form v-slot="{ errors }" @submit="onSubmit">
              <div class="py-32">
                <div class="hero-content flex-col lg:flex-row-reverse">
                  <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">
                      Sistem Pencatatan Keuangan a
                      <svg
                        class="absolute text-black h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </h1>
                    <!-- <p class="py-6">Masuk sebagai Administrator.</p> -->
                  </div>
                  <div
                    class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
                  >
                    <div class="card-body">
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Email / Username</span>
                        </label>
                        <Field
                          v-model="email"
                          :rules="fnValidasi.validateData2"
                          name="email"
                          type="text"
                          placeholder="email"
                          class="input input-bordered input-secondary"
                        />
                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.email }}
                        </div>
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Password</span>
                        </label>
                        <Field
                          v-model="password"
                          :rules="fnValidasi.validateData2"
                          name="password"
                          type="password"
                          placeholder="password"
                          class="input input-bordered input-secondary"
                        />
                        <div class="text-xs text-red-600 mt-1">
                          {{ errors.password }}
                        </div>
                      </div>
                      <div class="form-control mt-6">
                        <button class="btn btn-primary w-full">Login</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer
    class="border-t-2 border-base-200 bg-base-100 h-32 flex flex-col gap-4 justify-center"
  >
    <div class="text-base-content text-center">
      <span>© 2022 - Tim Dev</span>
    </div>
  </footer>
</template>

<style>
.gradient {
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}
</style>
