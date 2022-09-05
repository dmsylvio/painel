import { createApp } from "vue";
import App from "@/App.vue";
import { createI18n } from "vue-i18n";
import messages from "@/locales/locales";
import router from "@/router/index";
import { defineGlobalComponents } from './global-components'
import utils from '@/helpers/utilities.js';
import _ from 'lodash';
import Maska from "maska";
import { VTooltip } from "v-tooltip";

const app = createApp(App);

export default class Application{
    constructor(){
        this.bootingCallbacks = [];
        this.messages = messages;
    }

    booting(callback) {
        this.bootingCallbacks.push(callback)
    }

    executeCallbacks() {
        this.bootingCallbacks.forEach((callback) => {
          callback(app, router)
        })
    }

    addMessages(moduleMessages = []) {
        _.merge(this.messages, moduleMessages);
    }

    start(){
        this.executeCallbacks();

        defineGlobalComponents(app);

        const i18n = createI18n({
            locale: 'en',
            fallbackLocale: 'en',
            globalInjection: 'true',
            messages: this.messages
        });

        window.i18n = i18n

        const { createPinia } = window.pinia;

        app.use(router);
        app.use(Maska);
        app.use(i18n);
        app.use(createPinia());
        app.provide('utils', utils);
        app.directive('tooltip', VTooltip);

        app.mount('body');
    }
}
