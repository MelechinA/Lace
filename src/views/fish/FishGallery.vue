<template>
    <v-app theme="mainCustomLightTheme">
      <fish-header></fish-header>
      
      <div class="px-lg-3">


<div class="text-h6 px-lg-1 px-1">
  <base-single-species-gallery
    v-bind:dataset_uri="'https://isling.org/dataset/list?f='+243" 
    v-bind:tablestructur="'https://isling.org/dataset/list?f=100&f_id='+243"
  ></base-single-species-gallery>
</div>


</div>


          <base-footer></base-footer>
          </v-app>
          </template>
  
  <script>
  import { defineComponent } from 'vue';
  import FishHeader from './FishHeader.vue';
  import BaseSingleSpeciesGallery from '@/components/BaseSingleSpeciesGallery.vue';
  
  
  export default defineComponent({
    name: 'LichenGallery',
  
    components: {
      BaseSingleSpeciesGallery,
      FishHeader,
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
  