<template>
    <v-app theme="mainCustomLightTheme">
      <lichens-header></lichens-header>
      
      <div class="px-lg-3">


<div class="text-h6 px-lg-1 px-1">
  <base-gallery
    v-bind:dataset_uri="'https://isling.org/dataset/list?f='+198" 
    v-bind:tablestructur="'https://isling.org/dataset/list?f=100&f_id='+198"
  ></base-gallery>
</div>


</div>


          <base-footer></base-footer>
          </v-app>
          </template>
  
  <script>
  import { defineComponent } from 'vue';
  import LichensHeader from '@/views/lichens/LichensHeader.vue';
  import BaseGallery from '@/components/BaseGallery.vue';
  
  
  export default defineComponent({
    name: 'LichenGallery',
  
    components: {
      BaseGallery,
      LichensHeader,
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
  