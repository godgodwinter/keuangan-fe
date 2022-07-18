<script setup lang="ts">
import NavBar from "@/components/template/admin/AdminNavBar.vue";
import { computed, ref } from "vue";
import Footer from "@/components/template/CFooter.vue";
import ThemeBar from "@/components/template/ThemeBar.vue";
import SideBarAdmin from "@/components/template/admin/SideBarAdmin.vue";
import ScrollToTop from "@/components/template/ScrollToTop.vue";
import { useStoreAdminAuth } from "@/stores/adminAuth";
import { useRouter } from "vue-router";
import Toast from "@/components/lib/Toast";
import serviceAuth from "@/services/serviceAuth";
import { useStoreLanding } from "@/stores/landing";
const storeLanding = useStoreLanding();
const theme = computed(() => storeLanding.getTheme);

const doUpdateTheme = (theme: string) => {
  storeLanding.setTheme(theme);
};
const router = useRouter();
const storeAdminAuth = useStoreAdminAuth();
const token = computed(() => storeAdminAuth.getToken);
const isLogin = computed(() => storeAdminAuth.getIsLogin);
storeAdminAuth.$subscribe((mutation, state) => {});

const resCheckToken: Ref<Promise<boolean>> = ref([]);
const checkTokenExpired = async (dataToken: string): Promise<void> => {
  resCheckToken.value = await serviceAuth.doCheckToken(dataToken);
  if (resCheckToken.value === false) {
    serviceAuth.doLogout(false);
    Toast.danger("Info", "Token Expired");
    router.push({ name: "LandingLogin" });
  }
};

if (token.value) {
  // console.log("isTokenExpired");
  checkTokenExpired(token.value);
} else {
  Toast.info("Info", "Silahkan login terlebih dahulu");
  router.push({ name: "LandingLogin" });
}
</script>
<template>
  <NavBar />
  <!-- <ScrollToTop /> -->
  <!-- <ThemeBar /> -->
  <div class="border-b-2 top-14 lg:top-14 relative">
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <!-- mobile ONLY -->
        <!-- <div
          class="w-full flex justify-between px-4 py-4 bg-base-200 shadow-md space-x-4"
        >
          <div class="flex space-x-2">
            <div>
              <router-link :to="{ name: 'AdminDashboard' }">
                <h1
                  class="text-base-content font-bold py-2 pt-6 uppercase underline italic underline-offset-2"
                >
                  Dashboard
                </h1>
              </router-link>
            </div>
            <div>
              <router-link :to="{ name: 'AdminTransaksiTambah' }">
                <h1
                  class="text-base-content font-bold py-2 pt-6 uppercase underline italic underline-offset-2"
                >
                  Tambah
                </h1>
              </router-link>
            </div>
            <div class="py-2 pt-5">
              <button
                v-if="theme == 'cupcake'"
                @click="doUpdateTheme('dark')"
                class="font-normal text-sm hover:link my-1 block capitalize px-4 border-r last:border-none"
              >
                <svg
                  class="h-6"
                  viewBox="0 0 24 24"
                  style="fill: none; stroke: currentcolor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              </button>
              <button
                v-else
                @click="doUpdateTheme('cupcake')"
                class="font-normal text-sm hover:link my-1 block capitalize px-4 border-r last:border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label for="my-drawer-2" class="btn drawer-button lg:hidden"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                /></svg
            ></label>
          </div>
        </div> -->
        <!-- mobile ONLY -->

        <main class="font-serif md:min-h-screen py-12 px-2 lg:px-4 lg:py-10">
          <router-view />
        </main>
      </div>
      <SideBarAdmin></SideBarAdmin>
    </div>

    <Footer />
  </div>
</template>
