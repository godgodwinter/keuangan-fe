<template>
  <div class="flex justify-center flex-col">
    <div class="flex justify-center">
      <img src="@/assets/img/flat/icons8-lock-500.svg" />
    </div>
    <div>
      <p class="text-center font-bold text-2xl">Fitur tidak tersedia!</p>
      <router-link :to="{ name: 'AdminDashboard' }">
        <p class="text-center font-bold text-2xl underline text-primary link">
          Beranda
        </p></router-link
      >
    </div>
  </div>

  <!-- <div class="text-3xl font-bold underline text-red-200 flex justify-center items-center py-32">
    <div>404 NOT FOUND!</div>
  </div> -->
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
