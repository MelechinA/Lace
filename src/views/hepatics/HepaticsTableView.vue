<template>
<!-- <v-app theme="myLichenTheme"> -->
  <v-app :theme=$store.state.theme>
<hepatics-header />
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
    import HepaticsHeader from '@/views/hepatics/HepaticsHeader.vue';
    import BaseTableTools from '@/components/BaseTableTools.vue';
    import BaseTablePageTools from '@/components/BaseTablePageTools.vue';
   
    
    export default defineComponent({
      name: 'HepaticsTableView',
    
      components: {
        HepaticsHeader,
        BaseTablePageTools,
        BaseTableTools,

 //       TestVDataTable,
      },
    });
    </script>


