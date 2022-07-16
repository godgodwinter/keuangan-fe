<script setup lang="ts">
import Footer from "@/components/template/CFooter.vue";
import NavBar from "@/components/template/landing/NavBar.vue";
// import ThemeBar from "@/components/template/ThemeBar.vue";
// import NavBar from "../components/template/NavBar.vue";
// import ScrollToTop from "@/components/template/ScrollToTop.vue";
</script>
<template>
  <!-- <ScrollToTop /> -->
  <NavBar />
  <router-view />
  <Footer />
</template>
