// import "../sass/crater.scss"
// import "v-tooltip/dist/v-tooltip.css"
// import "@/scripts/plugins/axios.js"
import * as VueRouter from "vue-router"
import router from "@/router/index"
import * as pinia from "pinia"
import * as Vue from "vue"
import * as Vuelidate from "@vuelidate/core"

window.pinia = pinia
window.Vuelidate = Vuelidate

import Application from "@/Application";

window.Vue = Vue
window.router = router
window.VueRouter = VueRouter

window.Application = new Application();
