import { createApp } from 'vue' 
import App from './App.vue' 
import router from './router' 
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Copy from "vue3-copy";
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css";

   
//import "@/assets/global.css"
//import axios from 'axios'

//import components from '@/components/UI'
import maincomponents from '@/components'
const app = createApp(App); 
/*
components.forEach(component => {
  app.component(component.name, component)
}),
*/
maincomponents.forEach(component => {
  app.component(component.name, component)
})

loadFonts()


app
  .use(router)
  .use(store)
  .use(vuetify)
  .use(Copy)
  .use(OpenLayersMap /* options */)
  .mount('#app') 
