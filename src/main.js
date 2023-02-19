import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router.js";

import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/js/bootstrap.js";



// 5. Create and mount the root instance.
const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.

app.use(router);


app.config.globalProperties.$filters = {
  valueFilter(value) {
    return "$" + value;
  },
  UppercasePipe(value) {
    if (!value) return "";
    return value.toString().toUpperCase();
  },
};


app.mount("#app");
