<template>
    <v-app theme="mainCustomLightTheme">
<hepatics-header></hepatics-header>
      
      <div class="px-lg-3">


<div class="text-h6 px-lg-1 px-1">
  <base-gallery
    v-bind:dataset_uri="'https://isling.org/dataset/list?f='+230" 
    v-bind:tablestructur="'https://isling.org/dataset/list?f=100&f_id='+230"
  ></base-gallery>
</div>


</div>


          <base-footer></base-footer>
          </v-app>
          </template>
  
  <script>
  import { defineComponent } from 'vue';
  import HepaticsHeader from './HepaticsHeader.vue';
  import BaseGallery from '@/components/BaseGallery.vue';
  
  
  export default defineComponent({
    name: 'HepatcisGallery',
  
    components: {
      BaseGallery,
      HepaticsHeader,
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
  