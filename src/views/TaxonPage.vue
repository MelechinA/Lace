<template>
<!-- {{ areacoordvalue }}rowid{{ rowidchecklist }} -->
<!-- {{ mgroupvalue }} -->
    <v-app theme="mainCustomLightTheme">
<lichens-header v-if="mgroupvalue == 1811"></lichens-header>
     <main-header v-else ></main-header> 
     <!-- make dynamically depend of biogroup-->

                    <div v-for="row in rows"  :key="row.id">
                      <div class="px-lg-3">
                        <div class="px-1">
                          <p class="text-h4 font-weight-black text-truncate" style="max-width: 1500px;">{{ row.name }} <v-tooltip activator="parent" location="end">Store species</v-tooltip></p>
                          <p class="text-h5"> {{ row.refmainsynonym.name }}<v-tooltip activator="parent" location="bottom">Main synonim</v-tooltip></p> 
                          <p class="text-h5"> {{ row.termdescription }}<v-tooltip activator="parent" location="bottom">Taxon description</v-tooltip></p> 
                          <base-taxon-page v-bind="{mode:mode,meta:meta, value:row, areacoordvalue:areacoordvalue}"></base-taxon-page>
                        </div>
                      </div>
                    </div>

  
<!--   
        <base-footer></base-footer> -->

      </v-app>
      </template>
      
    <script>
    import axios from 'axios';
      import MainHeader from './MainHeader.vue';
      import LichensHeader from './lichens/LichensHeader.vue';
      import BaseTaxonPage from '@/components/BaseTaxonPage.vue';
      
      export default ({
        name: 'GeneralDataMaterial',
        data(){ 
            return {
      
                rows:[],
                mode: 'view',
                meta:{columns:[]},
          dataset_uri:"https://isling.org/dataset/list?f="+2017,
          tablestructur:"https://isling.org/dataset/list?f=100&f_id="+2017,
          rowid: this.$route.params.idpage, 
              }
        },
        props:['areacoordvalue', 'rowidchecklist', 'mgroupvalue'],
        components: {
      //    PointWidget,
      //    DateWidget,
      //    ImageWidget,
      //    BaseTablePageTools,
      //    DetailsWidget,
      BaseTaxonPage,
      MainHeader,
      LichensHeader,
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
if (this.rowidchecklist==undefined){
  this.rowid = this.$route.params.idpage;
}
else {
  this.rowid = this.rowidchecklist;
}

      
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

      
      
        }
      })
</script>