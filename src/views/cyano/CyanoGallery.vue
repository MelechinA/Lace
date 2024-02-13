<template>
    <v-app theme="mainCustomLightTheme">
      <cyano-header></cyano-header>
      
      <div class="px-lg-3">


<div class="text-h6 px-lg-1 px-1">
  <base-gallery
    v-bind:dataset_uri="'https://isling.org/dataset/list?f='+262" 
    v-bind:tablestructur="'https://isling.org/dataset/list?f=100&f_id='+262"
  ></base-gallery>
</div>


</div>


          <base-footer></base-footer>
          </v-app>
          </template>
  
  <script>
  import { defineComponent } from 'vue';
  import CyanoHeader from './CyanoHeader.vue';
  import BaseGallery from '@/components/BaseGallery.vue';
  
  
  export default defineComponent({
    name: 'HepaticsGallery',
  
    components: {
      BaseGallery,
      CyanoHeader,
    },
    data: () => ({
      clicktooltip: 'Click to copy',
      }),
      methods: {
          clicktooltipMessage(){
            if (this.clicktooltip =='Click to copy') {
            this.clicktooltip = 'Copied';
            }
            else {
              this.clicktooltip = 'Click to copy';
            }
            setTimeout(() => {
          this.clicktooltip = 'Click to copy';
        }, 10000);
  
          },
  
      },
        
  });
  </script>
  