<!--
  Компонент для отрисовки формы правки или представления данных по одной строке из любой таблицы. 
  Получает данные из любых Страницы или Таблицы и показывает вьюс или форму правки.
-->
<template>
  <!--template v-if="mode === 'table'">
  {{formatDate(v)}}
  </template-->    

  <template v-if="mode === 'view'">

    <div class="px-lg-3">
      <div v-if="$store.state.isAdmin" class="my-1 px-1"><base-table-page-tools></base-table-page-tools></div>
      <v-sheet class="d-flex flex-wrap my-lg-2 px-1">
          <v-sheet class="my-1 mr-4">
          <span class="text-h5">LID</span><span class="text-h5 font-weight-bold">{{v.linkid}}</span>
          </v-sheet>
        <div class="d-none d-sm-none d-md-flex">
          <v-sheet class="my-1 mr-4">
            <span class="text-h5">{{ v.currentstorage.name }} <v-tooltip activator="parent" location="bottom">Current storage</v-tooltip></span>
          </v-sheet>
        </div>
          <v-sheet class="my-1 mr-4 flex-nowrap">
          <span class="text-h5"> {{ v.mainstorage.name }}<v-tooltip activator="parent" location="bottom">Main storage</v-tooltip></span> 
            <span class="text-h5 font-weight-bold"> {{ v.localcollnumber }} <v-tooltip activator="parent" location="bottom">Local collection number</v-tooltip></span>
          </v-sheet>

      </v-sheet>

      <!--px-2 - make padding -->
              <!--три блока - бюрократия, география, таксономия--> 


        <div class="d-none d-sm-none d-md-flex my-1 my-lg-2 px-1">
            <span class="text-h3 font-weight-black text-truncate" style="max-width: 1500px;">{{ v.store }} <v-tooltip activator="parent" location="end">Store species</v-tooltip></span>
        </div>
    </div>

        <!-- <v-row v-for="rowsp in v.species.rows" v-bind:key="rowsp" align="center" no-gutters>

          <v-col class="px-lg-4 px-1 text-h5 text-truncate" cols="4"> {{ rowsp.species.name }} </v-col>
                      <v-col><image-widget v-if="rowsp.picturesp" v-bind="{mode:'view',column:meta}" v-model="rowsp.picturesp"/></v-col>
        <v-divider class="ma-2"></v-divider>
        </v-row> -->
        <!-- <div v-if="v.species.rows!=''">   {{ v.species.rows }} </div> -->
<div v-if="v.species.rows!=''"> 
        <div v-for="rowsp in v.species.rows" v-bind:key="rowsp">
          <div class="px-lg-4 px-1 text-h5 text-truncate"> {{ rowsp.species.name }} </div>
          <div class="d-none d-sm-none d-md-flex ml-3">
          <div class="ml-1 mr-2"><image-widget v-if="rowsp.picturesp" v-bind="{mode:'view',column:meta}" v-model="rowsp.picturesp" /></div>
          </div>
          <div class="d-lg-none d-md-none d-xl-flex "><!--mobile-->
          <div class="ml-1 mr-2"><image-widget v-if="rowsp.picturesp" v-bind="{mode:'view',column:meta}" v-model="rowsp.picturesp" /></div>
          </div>
          <v-divider class="ma-2"></v-divider>
        </div>
        <div class="px-lg-3">
          <div class="text-h5 px-1">
            Det: <date-widget v-bind="{mode:'view',column:column}" v-model="v.species.rows[0].detdate" /> {{ v.species.rows[0].detname2 }}
            <v-btn
              class="mr-1 my-1"
              variant="outlined"
              color="regular"
              @click="speciesDetails = true">
              <v-icon icon="mdi-arrow-expand"/> Species in details
            </v-btn>
          </div>
        </div>
</div>
<div v-else>
  <div class="px-lg-3">
    <div class="text-h5 px-1">
      <v-btn
        class="mr-1 my-1"
        variant="outlined"
        color="regular"
        @click="$router.push('/help')">
        <v-icon icon="mdi-help"/> No species (click to help)
      </v-btn>
    </div>
  </div>  
</div>

<div class="d-none d-sm-none d-md-flex">
           <v-btn
                        v-if="v.coordinates"
                        variant="text"
                        color=""
                        v-copy="v.coordinates"
                        @click="clicktooltipMessage"
                        >
                        <span class="text-h5">
                          <point-widget v-bind="{mode:'view',column:column}" v-model="v.coordinates" /> 
                        </span>
                        <v-tooltip
                          activator="parent"
                          location="bottom"
                        >Coordinates. {{clicktooltip}}</v-tooltip>
                      </v-btn>

                      <v-btn
                      v-if="v.legdate"
                        variant="text"
                        color="">
                        <span class="text-h5"><date-widget v-bind="{mode:'view',column:column}" v-model="v.legdate" /></span>
                        <v-tooltip
                          activator="parent"
                          location="bottom"
                        >Leg. Date</v-tooltip>
                      </v-btn>
                      <v-btn
                      v-if="v.legname2"
                        variant="text"
                        color="">
      <span class="text-h5">{{v.legname2}}</span>
                        <v-tooltip
                          activator="parent"
                          location="bottom"
                        >Leg. Name</v-tooltip>
                      </v-btn>
                      <v-btn
                      v-if="v.legnum"
                        variant="text"
                        color="">
                        <span class="text-h5"> {{v.legnum}}</span>
                        <v-tooltip
                          activator="parent"
                          location="bottom"
                        >Leg. number</v-tooltip>
                      </v-btn>

                      <v-btn
                      v-if="v.location"
                        @click="overlaylocation = !overlaylocation"
                        variant="text"
                        color="">
                        <span class="text-h5 text-truncate" style="max-width: 400px;">{{ v.location }}</span>
                        <v-tooltip
                          activator="parent"
                          location="bottom"
                        >Location. Click to see fulltext</v-tooltip>
                      </v-btn>
                      <v-overlay
                        v-model="overlaylocation"
                        class="align-center justify-center"
                        scroll-strategy="block"
                        max-width="800"
                      >
                      <card>
                      <v-card-title class="bg-white text-h4">Location</v-card-title><v-card-text class="bg-white text-h5">{{ v.location }}</v-card-text> 
                      </card>
                      </v-overlay>
                    
          <v-btn
                    class="mx-1 my-1"
                        variant="outlined"
                        color="regular"
                        @click="geoEco = true">
                        <v-icon icon="mdi-arrow-expand"/> Geo-Eco-data
                      </v-btn>
                      <!--v-btn
                        class="mr-1 my-1"
                        variant="outlined"
                        color="regular"
                        @click="speciesDetails = true">
                        Hide map
                        </v-btn-->
                      </div>
                      <div class="d-sm-flex d-md-none">
                        <v-btn
          class="mx-1 my-1"
                        variant="outlined"
                        color="regular"
                        @click="geoEco = true">
                        <v-icon icon="mdi-arrow-expand"/> Geo-Eco-data
                      </v-btn>
                      <!--v-btn
                        class="mr-1 my-1"
                        variant="outlined"
                        color="regular"
                        @click="speciesDetails = true">
                        Hide map
                        </v-btn-->

                        <!--v-btn
                        v-if="v.specimen_picture"
                        class="mr-1 my-1"
                        variant="outlined"
                        color="regular"
                        @click="speciesDetails = true">
                        Place pics
                        </v-btn-->
                        <!--image-widget v-if="v.specimen_picture" v-bind="{mode:'table',column:meta}" v-model="v.specimen_picture" /-->

                      </div>

 <!--div v-if = "v.coordinates=''" class="mb-2 mt-1"> 
  <v-img
                          src="https://isling.org:8000/image/data?image=o7P8tHWJQcCETD.PNG"
                          height="200"
                          cover  
                          class="mx-auto rounded-0 px-1 px-lg-4 mb-2 mt-1"
                    />
</div>
<div  v-else-->

<!--map-point-widget v-bind="{mode:'view',column:column, attr:attribbutionmap}" v-model="v.coordinates" >
</map-point-widget-->
<!--desktop-->
<map-point-widget-ol v-bind="{mode:'view',column:column, mapheight:mapheightpage}" v-model="v.coordinates" class="d-none d-sm-none d-md-flex rounded-0 px-4 mb-1">
</map-point-widget-ol>
<!--mobile-->
<map-point-widget-ol v-bind="{mode:'view',column:column, mapheight:mapheightpage}" v-model="v.coordinates" class="d-flex d-sm-none d-none d-sm-flex d-md-none mb-1">
</map-point-widget-ol>

<image-widget v-if="v.specimen_picture" v-bind="{mode:'view',column:meta}" v-model="v.specimen_picture" class="mb-1" />

<!--здесь надо какое-то ветвлние - типа если образец стандартный - то показать все красиво, если нестандартный - вывалить все через гео-целл-->
    <!--div v-for="rowsp in v.species.rows" v-bind:key="rowsp"> 
  {{ rowsp.species.name }}
  <image-widget v-if="rowsp.picturesp" v-bind="{mode:'table',column:meta}" v-model="rowsp.picturesp" />

    </div-->

<!--получаем виды отдельно - не в виджете детайлс-->
<!--v-btn
                        class="mr-1 my-1"
                        variant="outlined"
                        color="regular"
                        @click="speciesDetails = true">
                        Show Species in details
                        </v-btn-->
<!--дать кнопу виды подробно - показать через детайлс-->


<!--div v-for="col in meta.columns" v-bind:key="col"> 

<base-geo-cell v-bind="{mode:'view', column:col, initValue:v[col.fieldname], meta:meta, rowobject:v}">

</base-geo-cell>
</div-->

  <!--div v-for="col in meta.columns" v-bind:key="col">
<base-geo-cell v-bind="{mode:'view', column:col, initValue:model-value[col.fieldname], meta:meta, rowobject:model-value}">


</base-geo-cell>

</div-->

 <!--dialogs-->
 <v-dialog v-model="geoEco" fullscreen><!-- all data of Geo and Eco-->
            <v-card class="rounded-0">

                    <div class="bg-white">
                      <v-card-title> <point-widget v-bind="{mode:'view',column:column}" v-model="v.coordinates" /> </v-card-title>
                      <v-card-text> <p>{{ v.location }} </p>
                      <p>Leg.: <date-widget v-bind="{mode:'view',column:column}" v-model="v.legdate" /> {{v.legname2}} {{v.legnum}}</p> </v-card-text>
                    </div>
<map-point-widget-ol v-bind="{mode:'view',column:column, mapheight:mapheightfull}" v-model="v.coordinates" >
</map-point-widget-ol>
<!--map-point-widget v-bind="{mode:'view',column:column, attr:attribbutionmap}" v-model="v.coordinates" >
</map-point-widget-->
      <div class="px-2">
              <v-card-actions>
                <v-row justify="space-between" class="text-center">
                  <v-col cols="auto"><v-btn
                    class="my-1"
                    variant="flat" 
                    color="regular" 
                    block @click="geoEco = false"
                  >Close</v-btn></v-col>
                  <!--v-if="user"-->
                  <!--v-col>                    
                    <v-btn
                    class="my-1"
                    variant="flat" 
                    color="regular" 
                    block @click="geoEco = false"
                  >Edit</v-btn></v-col-->
                </v-row>
              </v-card-actions>
      </div>
            </v-card>
          </v-dialog>


<v-dialog v-model="speciesDetails" fullscreen><!-- all data of speciesDetails-->
            <v-card class="overflow-auto rounded-0">
                    <div class="bg-white">
                      <!--v-card-title> И вот здесь вот показать всю детайлсину </v-card-title-->
                      <v-card-text>

                        <details-widget v-if="metadetails.widget" v-bind="{mode:'view',column:metadetails}" v-model="v.species" ></details-widget>
                      
                      </v-card-text>
                    </div>

      <div class="px-2">
              <v-card-actions>
                <v-row class="text-center">
                  <v-col cols="auto"><v-btn
                    class="my-1"
                    variant="flat" 
                    color="regular" 
                    block @click="speciesDetails = false"
                  >Close</v-btn></v-col>
                  <!--v-if="user"-->
                  <!--v-col>
                    <v-btn
                    class="my-1"
                    variant="flat" 
                    color="regular" 
                    block @click="speciesDetails = false"
                  >Edit</v-btn></v-col-->
                </v-row>

              </v-card-actions>
      </div>
            </v-card>
          </v-dialog>



  </template>

  <template v-else-if="mode === 'edit'">
      <!--input class="input" type="datetime-local" v-model="v"  @input="handleInput"-->
      <input class="input" type="date" v-model="v"  @input="handleInput">
  </template>

  <template v-else>
      {{v}}
  </template>
  
</template>

<script>
import DetailsWidget from './widgets/DetailsWidget.vue';
import PointWidget from './widgets/PointWidget.vue';
//import MapPointWidget from './widgets/MapPointWidget.vue';
import ImageWidget from './widgets/ImageWidget.vue';
import BaseTablePageTools from './BaseTablePageTools.vue';
import DateWidget from './widgets/DateWidget.vue';
//import { LMap, LMarker, LTileLayer, LGeoJson, LControl } from "@vue-leaflet/vue-leaflet";
import MapPointWidgetOl from './widgets/MapPointWidgetOl.vue';
export default {
    name: 'BaseDataMaterial',
    props:['mode','meta', 'value'],
    emits: ['update:modelValue'],
    data(){ 
        return {
            v: this.value,
            speciesDetails: false,
            geoEco: false,
            overlaylocation: false,
            metadetails: {},
         //   attribbutionmap: '<a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a>',
         mapheightpage: "height: 200px",
         mapheightfull: "height: 50%",
        }
    }, 
    
    components: {
DetailsWidget,
PointWidget,
//MapPointWidget,
ImageWidget,
BaseTablePageTools,
DateWidget,
MapPointWidgetOl,
/*LMap,

    LMarker,
    LTileLayer,
    LGeoJson,
    LControl,*/

    },

    mounted(){
      for (const column of this.meta.columns) {
        if(column.fieldname=='species'){
        this.metadetails=column;
        console.log(column);
      break;
          }
        }
    },
    //и здесь

    methods:{
      
        handleInput (e) {            
           this.v = e.target.value;            
           this.$emit('update:modelValue', this.v)
        },

/*
formatDate(v) {
            const date = new Date(v);
                // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('ru-RU', {dateStyle: 'short'}).format(date);
        }
*/



    },




}
</script>