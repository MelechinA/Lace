<template>
  <v-app :theme=$store.state.theme>
<cyano-header/>

                    <div v-for="row in rows"  :key="row.id">
                    <base-data-material v-bind="{mode:mode,meta:meta, value:row}"></base-data-material>
                    </div>


      <base-footer></base-footer>
    </v-app>
    </template>
    
    
    
    <script>

import axios from 'axios';
import CyanoHeader from '@/views/cyano/CyanoHeader.vue';
import BaseDataMaterial from '@/components/BaseDataMaterial.vue';
    
export default {
  name: 'CyanoDataMaterial',
  data(){ 
      return {

          rows:[],
          mode: 'view',
          meta:{columns:[]},
    dataset_uri:"https://isling.org/dataset/list?f="+this.$route.params.idtable,
    tablestructur:"https://isling.org/dataset/list?f=100&f_id="+this.$route.params.idtable,
    rowid: this.$route.params.idpage, 



        }
  },
//  props:['rowid','dataset_uri','tablestructur'],
  components: {
CyanoHeader,
BaseDataMaterial,

  },

  mounted(){
      this.getMeta();	
      
  },

  methods: {
      getMeta(){
          axios
              .get(this.tablestructur)
              .then((response) => {
              this.meta= JSON.parse(response.data.aaData[0].JSON);
              this.getData();
          });
      },

      getData(){

          axios
              .get(this.dataset_uri+'&f_id='+this.rowid)
              .then((response) => {
              //
              
              console.log(response.data.aaData);
              this.rows=response.data.aaData;
              })
              .catch(error => console.log(error));
      },
      clicktooltipMessage(){
        if (this.clicktooltip =='Click to copy') {
        this.clicktooltip = 'Copied';
        }
        else {
          this.clicktooltip = 'Click to copy';
        }
        setTimeout(() => {
      this.clicktooltip = "Click to copy";
    }, 500);

      },


  }
}
</script>