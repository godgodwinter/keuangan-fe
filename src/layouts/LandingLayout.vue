<script setup lang="ts">
import Footer from "@/components/template/CFooter.vue";
import ThemeBar from "@/components/template/ThemeBar.vue";
import NavBar from "../components/template/NavBar.vue";
import ScrollToTop from "@/components/template/ScrollToTop.vue";
</script>
<template>
  <!-- <ScrollToTop /> -->
  <ThemeBar />
  <div class="border-b-2 top-10 lg:top-10 relative">
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div class="w-full navbar bg-base-300">
          <div class="flex-1 px-2 mx-2 w-full justify-between">
            <router-link
              :to="{ name: 'LandingIndex' }"
              class="flex px-2 py-0 w-2/5"
            >
              <img
                src="../assets/img/logo/google-developers.svg"
                alt="icon"
                class="w-10 hover:shadow-lg"
              />
              <h3
                class="pt-2 lg:pt-0 ml-4 mt-1 text-md font-bold text-base-content hover:link"
              >
                BABENG WEB
              </h3></router-link
            >

            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              <!-- Navbar menu content here -->
              <NavBar />
            </ul>
          </div>
        </div>
        <!-- Page content here -->
        <main class="font-serif md:min-h-screen py-12 px-2 lg:px-4 lg:py-10">
          <router-view />
        </main>
        <!-- Page content here -->
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          <!-- Sidebar content here -->
          <NavBar />
        </ul>
      </div>
    </div>

    <Footer />
  </div>
</template>
