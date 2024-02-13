<template>

    <v-app theme="mainCustomLightTheme">

     <main-header></main-header> 
  
                    <div v-for="row in rows"  :key="row.id">
                    <base-data-material v-bind="{mode:mode,meta:meta, value:row}"></base-data-material>
                    </div>
  
                     
                      <!-- tablestructur = pagestructur
  
  v-bind:dataset_uri="'https://isling.org:8000/dataset/list?f='+$route.params.id" 
                        v-bind:tablestructur="'https://isling.org:8000/dataset/list?f=100&f_id='+$route.params.id"
  
                        v-bind:datapage_uri="'https://isling.org:8000/document?action=view&doctype=cdbf58a3-0a05-4e9d-b164-1f59a3379735&id='+533358" 
                        v-bind:pagestructur="'https://isling.org:8000/dataset/list?f=100&f_id='+200"
                      -->
  
  
        <base-footer></base-footer>

      </v-app>
      </template>
      
    <script>
    import axios from 'axios';
      import MainHeader from './MainHeader.vue';
      import BaseDataMaterial from '@/components/BaseDataMaterial.vue';
      
      export default ({
        name: 'GeneralDataMaterial',
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
      MainHeader,
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
                    this.meta.columns=this.meta.columns.filter(col=> {return col.visible});
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
      })
</script>