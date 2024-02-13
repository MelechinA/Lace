<template>
    <template v-if="mode === 'table'">
        <!--p class="text-truncate" style="max-width: 300px;">{{pointformat(modelValue)}}</p-->
        <!--l-marker :lat-lng = "markerLatLng"> </l-marker-- один из способов показать выделенную точку-->
    </template>
    <template v-else-if="mode === 'view'">

<ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    :style="mapheight"
>
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <!-- <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer> -->
    <ol-tile-layer>
      <ol-source-xyz :url=this.selected />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-point :coordinates="coordinate"></ol-geom-point>
          <ol-style>
            <ol-style-circle :radius="radius">
              <ol-style-fill :color="fillColor"></ol-style-fill>
              <ol-style-stroke
                :color="strokeColor"
                :width="strokeWidth"
              ></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>


    </template>


    <template v-else-if="mode === 'edit'">
        <textarea class="textarea" v-model="markerLatLng" @input="handleInput"  placeholder="Введите текст"></textarea>
    </template>
    <template v-else>
        {{modelValue}}
    </template>
    
</template>

<script>
//@input="handleInput" 
import proj4 from 'proj4';
export default {
    name: 'point-widget',
    props:['mode','column', 'modelValue','mapheight'],
    emits: ['update:modelValue'],
    components: {
proj4,
  },
    data(){
        return {

            center: this.pointformat(this.modelValue),
 projection: "EPSG:3857",
// projection: "EPSG:4326",
//projection: "EPSG:32640",
zoom: 8,
rotation: 0,
radius: 10,
strokeWidth: 8,
strokeColor: "#03A9F4",
//strokeColor: "#c781c4",
fillColor: "transparent",
selected: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",

coordinate: this.pointformat(this.modelValue),

//            markerLatLng: this.pointformat(this.modelValue),

            textLatLon: this.pointformattext(this.modelValue)

        }
    },
    components: {
    },


        



    methods:{
        handleInput (e) {            
           this.v = e.target.value;            
           this.$emit('update:modelValue', this.v)
        },
        wkt2decimal(val){
            var re=/MULTIPOINT\((-?[0-9]*\.?[0-9]*)\s(-?[0-9]*\.?[0-9]*)\)/
            var arr = re.exec(val);			
            if (arr==null || arr.length<3)
                return {lat:0, lon:0};
            return {lon:parseFloat(arr[1]), lat:parseFloat(arr[2])};
        },


// reprojection(){
// let firstProjection = "EPSG:4326";
// let secondProjection = "EPSG:3857";

// repoint = proj4(secondProjection,firstProjection,this.coordinate);
// console.log(repoint);
// return repoint;
// },
        
        pointformat(v){
            // v -   это произволное локальое значение  - параметр функции, который замещается на необходимое значение в строке markerLatLng: this.pointformat(this.modelValue), (в моделях)

            let point=this.wkt2decimal(v)
          
 let lat = Number(point.lat.toFixed(10).replace(/0+$/, ""));
 let lon = Number(point.lon.toFixed(10).replace(/0+$/, ""));
//console.log(typeof(lat));
let firstProjection = "EPSG:4326";
let secondProjection = "EPSG:3857";

   //          return proj4(firstProjection,secondProjection,[30,60]);
          return proj4(firstProjection,secondProjection,[lon,lat]);

           //    return [lat,lon];
      //       return [lon, lat];

 //            return point.lat.toFixed(6).replace(/0+$/, "")+', '+point.lon.toFixed(6).replace(/0+$/, "");
        },


        pointformattext(v){
            var point=this.wkt2decimal(v)
            return point.lat.toFixed(6).replace(/0+$/, "")+', '+point.lon.toFixed(6).replace(/0+$/, "");
        },








    },
}
</script>
