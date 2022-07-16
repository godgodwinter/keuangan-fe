<script setup lang="ts">
import serviceAuth from "@/services/serviceAuth";
import { computed, ref } from "vue";
import Footer from "@/components/template/CFooter.vue";
import ThemeBar from "@/components/template/ThemeBar.vue";
import SideBarAdmin from "@/components/template/admin/SideBarAdmin.vue";
import ScrollToTop from "@/components/template/ScrollToTop.vue";
import { useStoreAdminAuth } from "@/stores/adminAuth";
import { useRouter } from "vue-router";
import Toast from "@/components/lib/Toast";
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
  <!-- <ScrollToTop /> -->
  <ThemeBar />
  <div class="border-b-2 top-10 lg:top-10 relative">
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <!-- mobile ONLY -->
        <div
          class="w-full flex justify-between px-4 py-4 bg-base-200 shadow-md"
        >
          <div>
            <router-link :to="{ name: 'LandingIndex' }">
              <h1
                class="text-base-content font-bold py-2 pt-6 uppercase underline italic underline-offset-2"
              >
                Landing Pages
              </h1>
            </router-link>
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
        </div>
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
