import VueFathom from '@ubclaunchpad/vue-fathom';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueFathom, {
    siteID: 'BULTGKOL',
    settings: {
      spa: 'history'
    }
  });
});
