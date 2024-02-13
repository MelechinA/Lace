<template>
  <!---->
  <!---->
  <!--If BaseGallery would fit - delete it-->
  <!---->
  <!---->
<div v-for="col in meta.columns" :key="col">
<!-- <species-separate-filter
v-if="col.fieldname == 'species'" 
                        :key='col'
                        :column='col'
                        :meta='meta'
                        v-model="filters[col.fieldname]"
                        @update:modelValue="getData"
>
</species-separate-filter> -->
</div>
<!-- https://isling.org/image/data?image=
https://isling.org/image/data?image=w9xbna7chENEap.JPG
:src="`https://picsum.photos/500/300?image=${n * 12 + 5}`"
-->

            <div  v-for="row in rows" :key="row" @click="setcurentRow(row)" @dblclick="expandRow(row)" :class="{ 'bg-regularlight' : (row==curentRow) }" >
              <div class="my-2" v-for="col in meta.columns" :key="col">
                <base-geo-cell v-if="col.fieldname == 'picturesp'" v-bind="{mode:'view', column:col, initValue:row[col.fieldname], meta:meta, rowobject:row}" />
              </div> 
            </div>
         
  <!--other filters -->
    <v-navigation-drawer
    width="500"
        v-model="toolsfilters"
        temporary

    > 
         <v-card
            class="mx-auto rounded-0"
            variant="text"
        >
        <v-card-item class="px-2">

<v-row><v-col cols="10">
  <base-filter 
                        v-for="col in meta.columns" 
                        :key='col'
                        :column='col'
                        :meta='meta'
                        v-model="filters[col.fieldname]"
                        @update:modelValue="getData"
                        > 
                      </base-filter>
   
</v-col>
<v-col>
<v-sheet 
color="regular"
height="100%"
class="d-flex align-center justify-center text-center rounded"
@click="toolsfilters = false"
>
<v-icon icon="mdi-chevron-left"></v-icon>
</v-sheet>
</v-col> </v-row>


            </v-card-item>


            <v-card-actions  class="d-inline">
                <v-btn
                    class="my-1"
                    variant="flat"
                    color="regularlight"
                    @click.stop="toolsfilters = !toolsfilters">
                    Cancel
                </v-btn>

                <v-btn
                    class="my-1"
                    variant="flat"
                    color="accent"
                    @click.stop="getData, toolsfilters = !toolsfilters">
                    Apply
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-navigation-drawer>
    <v-btn
      variant="flat"
      color = "regular"
      class="mb-1 mr-1" 
      @click.stop="toolsfilters = !toolsfilters"
      
    >
        <span class="d-none d-sm-none d-md-flex">Other filters</span> <v-icon icon="mdi-filter"></v-icon>
    </v-btn>

<v-dialog
v-model="dialogrow"
>

  <v-card class="rounded-0 px-1">


      <v-row no-gutters v-for="col in meta.columns" :key="col" justify="center">
        <v-col class="text-medium-emphasis text-end pr-4  d-none d-lg-block">{{col.title}}</v-col> 
        <v-col> <base-geo-cell v-bind="{mode:'view', column:col, initValue:curentRow[col.fieldname], meta:meta, rowobject:curentRow}"/></v-col>
      </v-row>

      <v-btn 
      class="my-1"
      variant="flat"
      color="regular"
      @click="dialogrow = !dialogrow"
      >close
      </v-btn>
  </v-card>

</v-dialog>


    <v-row class="d-flex text-center" align="center">
      <v-col cols="2" text-medium-emphasis>
 {{ rowscount }} rows
        </v-col>
            <v-col>
            <v-pagination
            v-model="page"
            :length="pagecount"
            @update:modelValue="paginate"
        ></v-pagination> 
        </v-col>
        <v-col cols="2">
        <v-select
        :items="perpageitems"
        label="Per page"
        variant="solo"
        @update:modelValue="perpageupdate"
        ></v-select>
        </v-col>

    </v-row>

</template>

<script>

import axios from 'axios';
//import "leaflet/dist/leaflet.css";
//import "leaflet/dist/leaflet-src.esm"
import BaseFilter from '@/components/BaseFilter.vue';
//import GeospatialFilterSeparate from './GeospatialFilterSeparate.vue';
//import ImageGallery from './ImageGallery.vue';
import BaseTableTools from '@/components/BaseTableTools.vue';
//import BaseAdminTableTools from '@/components/BaseAdminTableTools.vue';
//import GeoAerialFilterVue from '@/components/GeoAerialFilter.vue';
import SpeciesSeparateFilter from '@/components/SpeciesSeparateFilter.vue';
import ImageWidget from './widgets/ImageWidget.vue';
export default {
    name: 'base-gallery',
    components: {
//    LMap,
//    LWmsTileLayer,
//    LMarker,
//    LTileLayer,
//    LControlLayers,
    BaseFilter,
//   GeospatialFilterSeparate,
//    ImageGallery,
    BaseTableTools,
SpeciesSeparateFilter,
ImageWidget,


  },

    data(){ 
        return {
          toolsfilters: null,
          toolsgeneralisation: null,
// потом в компонет тулсы перенести и через пинию все нагородить
dialogexport: false,
            page:1,
            perPage:4,
            meta:{columns:[]},
            rows:[],
            pagecount:0,
            curentRow:{},

            perpageitems: ['3', '10', '20', '30'],
            clicktooltip: 'Click to copy',
            url: '',
            mp: '',
            fieldname: 'species',

            filters: {"picturesp": "isnotnull"},
            sorts: {},
            groupings: {},
            groupingswitch: false,
           groupingitems: ['', 'count', 'groupby'],
// try count rows:
rowscount: '',

//tofile: false,
format: 'csv',
dialogrow: false,
dialogedrow: false,

menu: false,
        }
    },
    
    props:['dataset_uri', 'tablestructur', 'speciesvalue'],


    

    mounted(){
        this.getMeta();
  //      this.pointName();
    },

    methods: {



        getMeta(){
            axios.get(this.tablestructur).then((response) => {
                //console.log(response.data.aaData[0].id);
                this.meta= JSON.parse(response.data.aaData[0].JSON);
                //console.log(response.data.aaData[0].JSON);
   //             console.log(this.meta.columns)
                this.meta.columns=this.meta.columns.filter(col=> {return col.visible});
//                console.log(this.meta.columns);
//console.log(this.meta.columns);


                this.getData();
   //             this.updateMap();
                this.meta.columns.forEach(column => {
                    this.filters[column.fieldname]=[];
                    this.sorts[column.fieldname]='';

                });


    //            this.getData();
   //             this.updateMap();

/*    
*/



            });
        },

        getData(){

            let querydata = {sort: []};

  //          this.sorts.id = true; // sample
  //        let querydata = {sort: [{fieldname: "species", dir: true}]};

            Object.keys(this.filters).forEach(key => {
          //  console.log(key, this.filters[key]);
            querydata['f_'+key] = this.filters[key];
            querydata['f_picturesp'] = "isnotnull";
            querydata['f_species'] = this.speciesvalue;
            
            if (key in this.sorts && this.sorts[key] != '') {
              querydata.sort.push({fieldname:key, dir: this.sorts[key]});
//              console.log(querydata);
            }
            //
            });
  
            axios
          //  .post(this.dataset_uri+'&unique=undefined&count_rows=true&iDisplayStart='+(this.page-1)*this.perPage+'&iDisplayLength='+this.perPage, querydata)
            .post(this.dataset_uri+'&unique=undefined&count_rows=true&iDisplayStart='+(this.page-1)*this.perPage+'&iDisplayLength='+this.perPage, querydata)
            
            .then((response) => {
             //   console.log(this.dataset_uri);
             //   console.log(response.data);
// &unique=undefined&count_rows=true& - что это?



                this.rows=response.data.aaData;
//console.log(this.rows);

                this.pagecount=Math.max(1,Math.trunc(response.data.iTotalRecords / this.perPage)+1);
this.rowscount = response.data.iTotalRecords;



                })
                .catch(error => console.log(error));
        },


        paginate(newpage) {
            this.page=newpage;
            this.getData();
        },

        perpageupdate(perpageitems){
            this.perPage=perpageitems;
            this.getData();

        },

        setcurentRow(row) {
            this.curentRow = row;
            this.mp = row.coordinates;

        },
        expandRow(row) {
            this.curentRow = row;
            this.dialogrow = true;
        },


        changeSort(fieldname){
//console.log(this.sorts, "Start value");
            if (this.sorts[fieldname] == undefined) {
              this.sorts[fieldname] = false;
//console.log(this.sorts, "1"); //3. works as: none
            }
            else if (this.sorts[fieldname]){
              this.sorts[fieldname] = undefined;
 //             this.sorticon = "mdi-sort-descending";
//console.log(this.sorts, "2"); //2.  works as: z-a
            }
            else {
              this.sorts[fieldname] = true;
 //             this.sorticon = "mdi-sort-ascending";
//console.log(this.sorts, "3"); //1. works as: a-z
            }
            this.getData();
        },


//оставил только Groupby - все остальные (count etc)не могу осилить пока.

/*
changeGrouping(fieldname, groupingitems){
  console.log(groupingitems);
  this.groupings[fieldname] = "groupby";

          this.getData();

        },
*/

        clicktooltipMessage(){
          if (this.clicktooltip =='Click to copy') {
          this.clicktooltip = 'Copied';
          }
          else {
            this.clicktooltip = 'Click to copy';
          }
          setTimeout(() => {
        this.clicktooltip = 'Click to copy';
      }, 500);

        },

//        computed: {

 ///   sortIconChange() {

 //    this.sorticon = "mdi-ascending";
 //   },
 // },
  

    },
/*    
watch: {
curentRow(newValue) {
console.log(newValue) 
},

}, // это можно использовать для операций с выделенной строкой
*/

}
</script>