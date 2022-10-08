// Every Vue application starts by creating a new application instance with the createApp function:
import { createApp } from 'vue';

// import the root component App from a single-file component.
import App from './App.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import './assets/main.css';

import router from "./router";

createApp(App).use(router).mount("#app");
