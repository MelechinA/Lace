<template>
<ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
    :projection="projection"
    :controls="[]"
    class="mb-1"
>
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />
    <ol-zoom-control />

    <ol-tile-layer>
      <ol-source-xyz :url=this.selected />
    </ol-tile-layer>
   
    <!--ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer-->

    <!--ol-tile-layer>
      <ol-source-bingmaps
        apiKey="AjtUzWJBHlI3Ma_Ke6Qv2fGRXEs0ua5hUQi54ECwfXTiWsitll4AkETZDihjcfeI"
        :imagerySet="AerialWithLabels"
      />
    </ol-tile-layer-->

    <ol-vector-layer>
      <ol-source-vector :projection="projection">
        <ol-interaction-draw
        v-if="drawEnable"
          :type="drawType"
          @drawend="drawend"
          @drawstart="drawstart"
        >
          <ol-style>
            <ol-style-stroke color="blue" :width="2"></ol-style-stroke>
            <ol-style-fill color="rgba(255, 255, 0, 0.4)"></ol-style-fill>
          </ol-style>
        </ol-interaction-draw>
      </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
        <ol-style-circle :radius="7">
          <ol-style-fill color="red"></ol-style-fill>
        </ol-style-circle>
      </ol-style>
    </ol-vector-layer>

    <ol-tile-layer>
      <ol-source-tile-wms
      :url=url.wms_link
            :layers=pointfieldname
            layer-type="base"
            :transparent="true"
            visible="true"
            format="image/png"
      />
    </ol-tile-layer>

    
  </ol-map>
  <base-table-tools v-if="$store.state.loggedIn"/> <!--Что-то стор глючит-->
  <!-- <base-table-tools /> -->
  <v-btn
            class="mb-1 mr-1"
            variant="outlined"
            color="regular"
            @click="layerSwitch()"
        >        
        <v-icon icon="mdi-layers" /> <span class="d-none d-sm-none d-md-flex">{{ layername }}</span>
  </v-btn>


  <v-btn
            class="mb-1 mr-1"
            variant="flat"
            color="regular"
            @click="drawEnable = !drawEnable, menu = false"
        >
        <v-icon icon="mdi-shape-polygon-plus" /> <span class="d-none d-sm-none d-md-flex">Polygon</span>-<v-icon icon="mdi-filter"></v-icon>
        </v-btn>

    <!-- <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          class="my-b mr-1"
          variant="flat"
          color="regular"
          v-bind="props"
        >
        <v-icon icon="mdi mdi-map-search" /> <span class="d-none d-sm-none d-md-flex">Geofilters</span>
        </v-btn>
      </template>

      <v-card min-width="300">



        <v-list>
          <v-list-item>
            <v-btn
            class="my-b mr-1"
            variant="flat"
            color="regular"
            @click="drawEnable = !drawEnable, menu = false"
        >
        <v-icon icon="mdi-shape-polygon-plus" /> <span class="d-none d-sm-none d-md-flex">Polygon</span>-<v-icon icon="mdi-filter"></v-icon>
        </v-btn>
          </v-list-item> -->
          <!--v-list-item>
            <v-btn
            class="my-b mr-1"
            variant="flat"
            color="regular"
            @click="drawType = 'Circle', drawEnable = !drawEnable, menu = false"
            prepend-icon="mdi-shape-circle-plus"
        >
        Draw Circle
        </v-btn>
          </v-list-item-->
        <!-- </v-list>

        </v-card>
      </v-menu> -->

       <!--v-btn
        v-if="getpolygon != ''"
            class="my-b mr-1"
            append-icon="mdi-close-circle"
            variant="flat"
            color="vs"
            @click="deleteall"
        >
        Reset geofilters
        </v-btn--><!--что-то сделать чтобы удалить не отлько фильтры но и полигоны из карты - они не удаляются от удаления фильтров -->
        <v-btn
            class="my-b mr-1"
            append-icon="mdi-close-circle"
            variant="flat"
            color="vs"
            v-for="(f, index) in v" :key="index"
            @click="deleteItem(index)"
        >
        {{ drawType }}-{{index}}
        </v-btn>

</template>

<script>
import proj4 from 'proj4'; 
import BaseTableTools from './BaseTableTools.vue';
export default {
    name: 'GeospatialFilterSeparate',
    props:['column', 'modelValue', 'meta', 'url', 'pointfieldname'],
    emits: ['update:modelValue', 'filterupdate'],

    components: {
proj4,
BaseTableTools,
  },

    data(){ 
        return {
menu: false,
            selected: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
       //     selected: "https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png",
            layername: "ESRI",
            v: [],
            cvalue: "",
            clicktooltip: 'Click to copy',
            getpolygon: '',
            wkt: '',
            meterspolygon: '',
//            jsonpolygon: '',
zoom: 1,
rotation: 0,
center: [3717911.36,10320608.70],
// центр надо сделать вычисляемым - зависмым от выбранного полигна или региона. На гислабе вот советуют найти среднее между мин и мак шир и долгот (крайних точек)
//center: [40,40],
drawType: "Polygon",
projection: "EPSG:3857",
// projection: "EPSG:4326",
//projection: "EPSG:32640",
drawEnable: false,
        }
    },
    methods:{

        drawstart(event) {
  console.log(event);
},
      drawend(event){
//  console.log(event.target.sketchLineCoords_);
  console.log(event);

   this.meterspolygon = event.target.sketchLineCoords_; // получаем json-полигон
 
//преобразуем его проекцию и преобразование в WKT
let getpolygonol = this.meterspolygon;

let firstProjection = "EPSG:4326";
let secondProjection = "EPSG:3857";

  var points=[];
  console.log(points);
for(var p=0; p<getpolygonol.length; p++){
  
    points.push(proj4(secondProjection,firstProjection,getpolygonol[p]).join(' '))
}


points.push(proj4(secondProjection,firstProjection,getpolygonol[0]).join(' '))

this.getpolygon ='MULTIPOLYGON((('+points.join(', ')+')))';

//this.getData();
this.handleInput(this.getpolygon);
},

layerSwitch(){
if (this.selected == "https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png") {
this.selected = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
this.layername = "ESRI";
}
else if (this.selected == "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}") {
this.selected = "https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png";
this.layername = "TopoOSM";
}
else console.log(this.selected);
},


        handleInput(e) {     
            this.v.push(e); 
//console.log(this.cvalue);
            this.cvalue = ""; 
//console.log(this.cvalue);        
            this.$emit('update:modelValue', this.v.join(';'));
//console.log(this.v); 
            this.$emit('filterupdate');
console.log(this.v);
        },

        deleteItem(index) {

            this.v.splice(index, 1);
            this.$emit('update:modelValue', this.v.join(';'));
            this.$emit('filterupdate');
        },


    clearInput(){
        this.options = [];
    },






        deleteall() {
          // this.v = [];
          // this.$emit('update:modelValue', this.v.join(';'));
          // this.$emit('filterupdate');
//что-то что удаляет красные полигоны
//this.v = [];
//this.getpolygon = '';
//this.$emit('filterupdate');
},

    },
   
    computed: {
        value: {
            get() {
                if (this.initValue)
                    return this.initValue
                else
                    return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    },



}
</script>