<template>
<!-- <v-app theme="myLichenTheme"> -->
  <v-app :theme=$store.state.theme>
    <lichens-header></lichens-header>
<div class="px-lg-3">


                  <div class="text-h6 px-lg-1 px-1">
                    <!-- <base-geo-table
                      v-bind:dataset_uri="'https://isling.org:8000/dataset/list?f='+$route.params.idtable" 
                      v-bind:tablestructur="'https://isling.org:8000/dataset/list?f=100&f_id='+$route.params.idtable"
                    ></base-geo-table> -->
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
    import LichensHeader from '@/views/lichens/LichensHeader.vue';
//    import BaseTableTools from '@/components/BaseTableTools.vue';
//    import BaseTablePageTools from '@/components/BaseTablePageTools.vue';
//    import TestVDataTable from '@/views/lichens/TestVDataTable.vue'
    
    
    export default defineComponent({
      name: 'LichensTableView',
    
      components: {
        LichensHeader,
//        BaseTablePageTools,
//        BaseTableTools,

 //       TestVDataTable,
      },
    });
    </script>


