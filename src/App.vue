<script setup lang="ts">
import { computed } from "vue";
import { useStoreLanding } from "@/stores/landing";
const storeLanding = useStoreLanding();
const theme = computed(() => storeLanding.getTheme);
</script>

<!-- dark-->
<!-- luxury -->
<!-- winter -->
<!-- cupcake -->
<template>
  <div id="app" :data-theme="theme" class="min-h-screen">
    <!-- <div id="app" data-theme="winter" class="min-h-screen"> -->
    <RouterView />
  </div>
</template>

<!-- <template>
</template> -->
