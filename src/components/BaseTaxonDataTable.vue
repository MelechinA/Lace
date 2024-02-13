<template>


    <geospatial-filter-separate
v-if="geofilterson"
      :column='meta.columns'
      :meta='meta'
      :pointfieldname='this.pointfieldname'
      :url = 'this.url'

      v-model="filters[this.pointfieldname]"
      @filterupdate="getData" 
    ></geospatial-filter-separate>

    <geo-aerial-filter-vue
v-if="geofilterson"
      :column='meta.columns'
      :meta='meta'
      v-model="filters[this.pointfieldname]"
      @filterupdate="getData" 
      >
    </geo-aerial-filter-vue>

   
    <v-navigation-drawer
    width="500"
        v-model="toolsfilters"
        temporary

    > <!--filters width = '100-500' - resolve resizeobserver issue -->
         <v-card
            class="mx-auto rounded-0"
            variant="text"
        >
        <v-card-item class="px-2">




<v-row><v-col cols="10"> <!--это заглушка с большой кнопкой - ее надо заменить на фиксированную малеьнкую кнопку поверх всего, которую всегда видно в одном месте - но почему-то во вьютифае это нетривиально -->
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


                <!-- <base-filter 
                        v-for="col in meta.columns" 
                        :key='col'
                        :column='col'
                        :meta='meta'
                        v-model="filters[col.fieldname]"
                        @update:modelValue="getData"
                        > 
                      </base-filter>  -->

            </v-card-item>


            <v-card-actions  class="d-inline">
                <v-btn
                    class="my-1"
                    variant="flat"
                    color="regularlight"
                    @click.stop="toolsfilters = !toolsfilters">
                    Cancel
                </v-btn>
                <!--v-btn
                    class="my-1"
                    variant="flat"
                    color="regularlight"
                    @click.stop="filters = '{}', getData">
                    Reset
                </v-btn--><!--как резетнуть - пока непонятно -->
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
    <v-btn
    v-if="filters.length > 0"
      variant="flat"
      color = "vs"
      class="mb-1 mr-1" 
      @click.stop="toolsfilters = !toolsfilters"
      
    >
        <span class="d-none d-sm-none d-md-flex">Reset all filters</span> <v-icon icon="mdi-filter-off"></v-icon>
    </v-btn>

    <v-dialog
        v-model="dialogexport"
        >
        <template v-slot:activator="{ props }">
            <v-btn
                class="mb-1 mr-1" 
                variant="flat"
                color="regular"
                v-bind="props"
            >
            <v-icon icon="mdi-file-download"></v-icon>  <span class="d-none d-sm-none d-md-flex">Download</span>
            </v-btn>
        </template>
        <v-card class="mx-auto rounded-0">
                <v-card-item class="px-2">
                    <div>
                      If you don't need full data massif (whole table) - please <v-btn variant="text" color="regular" @click.stop="toolsfilters = !toolsfilters, dialogexport = !dialogexport">filter data</v-btn>  before file download
                    </div>
                </v-card-item>
                <v-card-actions  class="d-inline">
                    <v-btn
                        class="my-1"
                        variant="outlined"
                        color="regular"
                        @click.stop="(dialogexport = !dialogexport)">
                        Cancel
                    </v-btn>
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="regular"
                        @click="getExportData"
                        @click.stop="(dialogexport = !dialogexport)">
                        Download csv
                    </v-btn>
                    <!-- <v-btn
                        class="my-1"
                        variant="flat"
                        color="regular"
                        @click="getExportData">
                        Download txt
                    </v-btn>
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="regular"
                        @click="getExportData">
                        Download xls
                    </v-btn> -->
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-btn
        v-if="geofilterson == false"
                class="mb-1 mr-1" 
                variant="flat"
                color="regular"
                @click = "geofilterson = !geofilterson"
                
            >
<v-icon  icon="mdi-earth">  </v-icon><span class="d-none d-sm-none d-md-flex">Show Map</span>

          </v-btn>

          <v-btn
          v-if="geofilterson == true"
                class="mb-1 mr-1" 
                variant="flat"
                color="regular"
                @click = "geofilterson = !geofilterson"
                
            >
<v-icon icon="mdi-earth-remove">  </v-icon><span class="d-none d-sm-none d-md-flex">Hide Map</span>  
          </v-btn>





  <base-admin-table-tools v-if="$store.state.isAdmin"/>
<!-- Length: {{ rows.length }} -->
    <!--v-table    class="text-truncate" style="max-width: 1500px;"-->
<!-- {{ filters }} -->
      <v-table>
            <thead>
                <tr>
     
                  <th v-for="col in meta.columns" :key="col">
                    
<div class="d-flex flex-row">
                  <v-sheet>
                    <v-tooltip activator="parent" location="bottom">Sort</v-tooltip>
                    <v-icon v-if="sorts[col.fieldname] == false" icon="mdi-sort" @click="changeSort(col.fieldname)" /> 
                    <v-icon v-if ="sorts[col.fieldname] == true" icon="mdi-sort-ascending" @click="changeSort(col.fieldname)" color="regular"/> 
                    <v-icon v-if ="sorts[col.fieldname] == undefined" icon="mdi-sort-descending" @click="changeSort(col.fieldname)" color="accent"/> 
                  </v-sheet>
                  <v-sheet class="px-2">
                    {{col.title}} 
                  </v-sheet>
                  <v-sheet>
                    <v-tooltip activator="parent" location="bottom">Group</v-tooltip>              
                    <v-icon v-if="groupings[col.fieldname] == '' " icon="mdi-format-list-group" @click="groupingswitch=!groupingswitch, changeGrouping(col.fieldname)"/> 
                    <v-icon v-if ="groupings[col.fieldname] == 'groupby' " icon="mdi-format-columns" @click="groupingswitch=!groupingswitch, changeGrouping(col.fieldname)" color="regular"/> 
                    <!--надо как-то обнулять сортинг перед групингом - иначе если сначала сделать сортинг а потом группинг - получится дичь-->
                  </v-sheet>
                  
</div>

                  </th>

              </tr> 
            </thead>
            <tbody>
              <!-- :key="row" - because after grpuping row.id - not unique. So take "row" - it is unique-->
                <tr v-for="row in rows" @click="setcurentRow(row)" @dblclick="expandRow(row)" :key="row" :class="{ 'bg-regularlight' : (row==curentRow) }" >
                  <!-- <td class="text-medium-emphasis" @click="expandRow(row)"> <v-btn variant="flat" icon="mdi-arrow-expand"> </v-btn> </td>   -->
                  
                  <td v-if="meta.dataset_id === 2017"  class="text-medium-emphasis" @click="$router.push('/taxonpage/'+row.id)" target="_blank"> 
                    <v-btn variant="flat" icon="mdi-arrow-expand"> </v-btn> </td>

                  <td v-for="col in meta.columns" :key="col">
                       <base-geo-cell v-bind="{mode:'table', column:col, initValue:row[col.fieldname], meta:meta, rowobject:row}"/>
                    </td>
                </tr>
              
            </tbody>            <!--как в tr делается цвет выделенной строки - оказывается это составой класс - он состоит из bg- и primary (последний - это просто цвет определяемый в цсснике или в нашем случае - в темах vuetify.js) -->
    </v-table>
    <!-- <v-btn v-if="curentRow"  @click="dialogedrow=!dialogedrow">Edit</v-btn> -->
<!--p v-for="col in meta.columns" :key="col"> 
  {{col}}
@click="setcurentRow(row)"
  
</p--> 
<!--v-dialog
        v-model="dialogrow"
        >
        <v-card class="mx-auto rounded-0">
{{ row }}
            </v-card>
</v-dialog-->

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






<v-dialog
v-model="dialogedrow"
>
<v-form v-model="valid">

  <v-card class="rounded-0 px-1">
<v-card-text>
      <div no-gutters v-for="col in meta.columns" :key="col">
 <base-geo-cell v-bind="{mode:'edit', column:col, initValue:curentRow[col.fieldname], meta:meta, rowobject:curentRow}"/>
      </div>
</v-card-text>
      <v-btn 
      class="my-1"
      variant="flat"
      color="regular"
      @click="dialogedrow = !dialogedrow"
      >Submit
      </v-btn>
  </v-card>

</v-form>
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
import GeospatialFilterSeparate from './GeospatialFilterSeparate.vue';
import ImageGallery from './ImageGallery.vue';
import BaseTableTools from '@/components/BaseTableTools.vue';
import BaseAdminTableTools from '@/components/BaseAdminTableTools.vue';
import GeoAerialFilterVue from '@/components/GeoAerialFilter.vue';
export default {
    name: 'base-taxon-data-table',
    components: {
//    LMap,
//    LWmsTileLayer,
//    LMarker,
//    LTileLayer,
//    LControlLayers,
    BaseFilter,
    GeospatialFilterSeparate,
    ImageGallery,
    BaseTableTools,
    BaseAdminTableTools,
    GeoAerialFilterVue,

 //   SelectFilter,
 //   ol,
//    LPolygon,
//proj4,
//BaseSort,
//BaseGeneralisation,


  },

    data(){ 
        return {
          toolsfilters: null,
          toolsgeneralisation: null,
dialogexport: false,
            page:1,
            perPage:10,
            meta:{columns:[]},
            rows:[],
            pagecount:0,
            curentRow:{},

            perpageitems: ['3', '10', '20', '30'],
            clicktooltip: 'Click to copy',

            url: '',
            mp: '',
            pointfieldname: '',

            filters: {},
            sorts: {},
            groupings: {},
            groupingswitch: false,
           groupingitems: ['', 'count', 'groupby'],
// try count rows:
rowscount: '',

geofilterson: true,
format: 'csv',
dialogrow: false,
dialogedrow: false,

menu: false,
        }
    },
    
    props:['dataset_uri', 'tablestructur','speciesvalue', 'areacoordvalue'],


    

    mounted(){
        this.getMeta();
  //      this.pointName();
    },

    methods: {



        pointName() {
            for (let col of this.meta.columns){
             //       console.log(col);
                    if  (col.widget.name === 'point') {
                        this.pointfieldname = col.fieldname;
                }
            }
        },

        getMeta(){
            axios.get(this.tablestructur).then((response) => {
                //console.log(response.data.aaData[0].id);
                this.meta= JSON.parse(response.data.aaData[0].JSON);
                //console.log(response.data.aaData[0].JSON);
//                console.log(this.meta.dataset_id);
                  if (this.meta.dataset_id == 241 || this.meta.dataset_id == 263 || this.meta.dataset_id == 2017) { //hide map for all tables without clean needs it
                    this.geofilterson = false;
                  }
                  else {
                    this.geofilterson = true;
                  }

                this.meta.columns=this.meta.columns.filter(col=> {return col.visible});
//                console.log(this.meta.columns);
//console.log(this.meta.columns);
                this.pointName();

 //               this.getData();
   //             this.updateMap();
                this.meta.columns.forEach(column => {
                    this.filters[column.fieldname]=[];
                    this.sorts[column.fieldname]='';
                    this.groupings[column.fieldname]='';
                });


                this.getData();
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
            querydata['f_species'] = this.speciesvalue;

            if (this.areacoordvalue!==undefined){
            querydata['f_'+this.pointfieldname] = this.areacoordvalue; // dataquery['f_'+this.pointfieldname] = this.areacoordvalue;
            }


//            querydata['f_coordinates'] = this.getpolygon;
            if (key in this.sorts && this.sorts[key] != '') {
              querydata.sort.push({fieldname:key, dir: this.sorts[key]});
//              console.log(querydata);
            }
            //
            if (this.groupingswitch == true) {
              querydata['g_'+key]='count'; // fieldname or key?
//              console.log(querydata, "countall");
//console.log(this.groupingswitch);
              if (key in this.groupings && this.groupings[key] != '') {
                querydata['g_'+key] = this.groupings[key];
                  console.log(querydata);
                  console.log(this.groupings);
              }
              else{
                querydata['g_'+key]='';
              }
            }
            });
  
            axios
          //  .post(this.dataset_uri+'&unique=undefined&count_rows=true&iDisplayStart='+(this.page-1)*this.perPage+'&iDisplayLength='+this.perPage, querydata)
            .post(this.dataset_uri+'&unique=undefined&count_rows=true&iDisplayStart='+(this.page-1)*this.perPage+'&iDisplayLength='+this.perPage, querydata)
            
            .then((response) => {
             //   console.log(this.dataset_uri);
             //   console.log(response.data);
// &unique=undefined&count_rows=true& - что это?
// tofile and print - надо делать другой запрос (без пагинации) - но как?


                this.rows=response.data.aaData;
//console.log(this.rows);

                this.pagecount=Math.max(1,Math.trunc(response.data.iTotalRecords / this.perPage)+1);
this.rowscount = response.data.iTotalRecords;
                this.updateMap();


                })
                .catch(error => console.log(error));
        },

getExportData(){


 let querydata = '';

//          this.sorts.id = true; // sample
//        let querydata = {sort: [{fieldname: "species", dir: true}]};

          Object.keys(this.filters).forEach(key => {
        //  console.log(key, this.filters[key]);
          querydata+='&f_'+key+'='+ this.filters[key];
          if (this.groupingswitch == true) {
            if (key in this.groupings && this.groupings[key] != '') {
              querydata+='&g_'+key+'='+ this.groupings[key];
            }
          }
          });

  window.location.href = this.dataset_uri+querydata+'&to_file=true&format=csv';


 // window.location.href = "google.com";
},

        //формирование урла с мапсервера для карты на основе данных таблицы

        updateMap(){
 //           console.log(this.meta.columns[6]);
 //let color = "'regular'";
            let randomString = Math.random().toString(36).slice(2);
 //console.log(randomString);
 //console.log(this.meta.dataset_id);
 //console.log(this.pointfieldname);
            let dataquery = {

            f: encodeURI(this.meta.dataset_id),
                unique: randomString+'coordinates',
            fieldname: this.pointfieldname,

                // mapstyle - сейчас заглушка. Надо будет сделать так, чтобы оно формировало разный стиль для разных даных
                mapstyle: 'TYPE point CLASS NAME "testclass" STYLE SYMBOL "circle" COLOR 3 169 244 SIZE 10 OFFSET 0 0 OPACITY 100 END LABEL COLOR 0 0 0 FONT "verdana" TYPE truetype SIZE 7 ANGLE 0 POSITION AUTO PARTIALS FALSE END END',
                //199 129 196 
                selected_array: [] };

                Object.keys(this.filters).forEach(key => {
// console.log(key, this.filters[key]);
                dataquery['f_'+key] = this.filters[key]; //здесь меняется только свойство объекта
                dataquery['f_species'] = this.speciesvalue;

                if (this.areacoordvalue!==undefined){
            dataquery['f_'+this.pointfieldname] = this.areacoordvalue;
            }

                });

//console.log(dataquery);
            axios
                .post("https://isling.org/map/createmap", dataquery)
                .then((response) => {

//    console.log(response.data);

                this.url= response.data;

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


        changeGrouping(fieldname){
//console.log(this.groupings, "Start value");
            if (this.groupings[fieldname] == '') {
              this.groupings[fieldname] = "groupby";

//console.log(this.groupings, "1"); //3. works as: 
            }
            else if (this.groupings[fieldname] == 'groupby') {
              this.groupings[fieldname] = '';

//console.log(this.groupings, "2"); //2.  works as: 
            }
/*            else if ((this.groupings[fieldname] == 'groupby') ){
              this.groupings[fieldname] = "groupby";
console.log(this.groupings, "3"); //1. works as: 
            }
*/          
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