<template>
<v-app :theme=$store.state.theme>
    <fish-header></fish-header>
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
    import FishHeader from '@/views/fish/FishHeader.vue';
 //   import BaseTableTools from '@/components/BaseTableTools.vue';
    // import BaseTablePageTools from '@/components/BaseTablePageTools.vue';
//    import TestVDataTable from '@/views/fish/TestVDataTable.vue'
    
    
    export default defineComponent({
      name: 'FishTableView',
    
      components: {
        FishHeader,
        // BaseTablePageTools,
        // BaseTableTools,

 //       TestVDataTable,
      },
    });
    </script>


