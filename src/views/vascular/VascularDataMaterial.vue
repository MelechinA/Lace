<template>
  <v-app :theme=$store.state.theme>
<vascular-header />
    <!--div v-for="row in value"  :key="row.id">
{{row}}
</div-->

                    <!--base-data-material-multisps
                      v-bind:dataset_uri="'https://isling.org:8000/dataset/list?f='+$store.state.tableId" 
                      v-bind:tablestructur="'https://isling.org:8000/dataset/list?f=100&f_id='+$store.state.tableId"
                      v-bind:rowid="$route.params.id"
                    ></base-data-material-multisps-->

                    <!--div v-for="row in value"  :key="row.id">
        <div v-for="col in meta.columns" v-bind:key="col">
  <base-data-material v-bind="{mode:'view',column:meta, initValue:row[col.fieldname], meta:meta, rowobject:row}"></base-data-material>
        </div>
                    </div-->
                    <!--base-data-material v-bind="{mode:mode,meta:meta, value:value}"  ></base-data-material-->
                    <!--можно так, но тогда нельзя отследить изменения value из формы-->

                    <div v-for="row in rows"  :key="row.id">
                    <base-data-material v-bind="{mode:mode,meta:meta, value:row}"></base-data-material>
                    </div>
                    <!--base-data-material v-bind="{mode:mode,meta:meta, value:row}" v-model="value" or v-model="row[key]"></base-data-material-->

                    <!--поэтому надо так - с двусторонней привязкой v-model-->
      <base-footer></base-footer>
    </v-app>
    </template>
    
    
    
    <script>

import axios from 'axios';
import VascularHeader from '@/views/vascular/VascularHeader.vue';
import BaseDataMaterial from '@/components/BaseDataMaterial.vue';
    
export default {
  name: 'VascularDataMaterial',
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
//    PointWidget,
//    DateWidget,
//    ImageWidget,
//    BaseTablePageTools,
//    DetailsWidget,
BaseDataMaterial,
VascularHeader,
  },

  mounted(){
      this.getMeta();	
      
  },

  methods: {
      getMeta(){
          axios
              .get(this.tablestructur)
              .then((response) => {
              //console.log(response.data.aaData[0].id);
              this.meta= JSON.parse(response.data.aaData[0].JSON);
              //console.log(response.data.aaData[0].JSON);
             // this.meta.columns=this.meta.columns.filter(col=> {return col.visible}); // вот из-за visible - невидимые поля не будут показаны, а в детайлсине материала - Виды как раз невидимыое поле.
            // см коммент - почему фильтрацию по видимым полям закомментил   
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



//              this.pagecount=Math.max(1,Math.trunc(response.data.iTotalRecords / this.perPage)+1);
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