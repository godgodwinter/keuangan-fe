import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";

// library fixed
import VueGoodTablePlugin from "vue-good-table-next";
import AOS from "aos";


// style
import "aos/dist/aos.css";
import "vue-good-table-next/dist/vue-good-table-next.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(AOS.init());
app.use(VueGoodTablePlugin);

app.mount("#app");
