<template>
  <v-app theme="mainCustomLightTheme">
    <main-header></main-header>
    <div class="px-lg-3">


                  <div class="text-h6 px-lg-1 px-1">
                    <base-geo-table
                      v-bind:dataset_uri="'https://isling.org/dataset/list?f='+$route.params.idtable" 
                      v-bind:tablestructur="'https://isling.org/dataset/list?f=100&f_id='+$route.params.idtable"
                    ></base-geo-table>
                  </div>

        
</div>
      <base-footer></base-footer>
      </v-app>
    </template>
    
    
    
    <script>
    
    import { defineComponent } from 'vue';
    import MainHeader from '@/views/MainHeader.vue';
//    import BaseTableTools from '@/components/BaseTableTools.vue';
//    import BaseTablePageTools from '@/components/BaseTablePageTools.vue';
    
    
    export default defineComponent({
      name: 'TableView',
    
      components: {
        MainHeader,
//        BaseTablePageTools,
//        BaseTableTools,
      },
    });
    </script>

