<template>
    <template v-if="mode === 'table'">
        <p class="text-truncate" style="max-width: 300px;">{{pointformat(v).lat}}, {{pointformat(v).lon}}</p> 
    </template>
    <template v-else-if="mode === 'view'">
        <p class="text-truncate" style="max-width: 300px;">{{pointformat(v).lat}}, {{pointformat(v).lon}}</p>
    </template>
    <!--template v-else-if="mode === 'mapoint'">
        {{markerLatLng}}
        {{v}}

        <l-map :zoom="4" :center="[67.81105, 34.72061]" style="height: 300px;">
            <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
            transparent="false"
            ></l-tile-layer>
       
            <l-marker :lat-lng = markerLatLng> </l-marker>

        </l-map>
    </template-->


    <template v-else-if="mode === 'edit'">
        <v-text-field :label=column.title variant="outlined" v-model=v  @input="handleInput"></v-text-field>

        <!-- <v-text-field :label=column.title variant="outlined" v-model=lat @input="handleInput">  </v-text-field> -->
<!--поделить на поля; заполнить лат лон-ами; добавить кнопку - "взять точку с карты"-->
<!--{{wkt2decimal(v).lat.toFixed(6)}}-->
    </template>
    <template v-else>
        {{v}}
    </template>
    
</template>

<script>
//@input="handleInput" 
//import { LMarker, LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
export default {
    name: 'point-widget',
    props:['mode','column', 'modelValue'],
    emits: ['update:modelValue'],
    data(){
        return {
            v: this.modelValue,
            markerLatLng: '',
   //         pointfieldname: this.column.fieldname,
// lat: this.pointformat(this.modelValue).lat,
// lon: '',

        }
    },
    components: {
/*        LMarker,
    LTileLayer, 
    LMap,  
    */    },
/*
mounted(){
    this.updatePointFieldName();
   },
 */ 
  //      this.pointformatMapPoint();
        
        
      //  this.markerLatLng = '['+this.pointformat()+']';
       // this.pointformat(v);



 //   },

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

        
        pointformat(v){
            var point=this.wkt2decimal(v)

//let latLon = point.lat.toFixed(6).replace(/0+$/, "")+', '+point.lon.toFixed(6).replace(/0+$/, "");
//this.markerLatLng = latLon;
           // this.markerLatLng = [66.81105, 24.72061];
            //this.markerLatLng = point.lat.toFixed(6).replace(/0+$/, "")+', '+point.lon.toFixed(6).replace(/0+$/, "") ;
//return latLon;
// this.lat = point.lat.toFixed(6);
// this.lon = point.lon.toFixed(6);
//            return point.lat.toFixed(6).replace(/0+$/, "")+', '+point.lon.toFixed(6).replace(/0+$/, "");
            return { 
         lat:   point.lat.toFixed(6).replace(/0+$/, ""),
         lon:   point.lon.toFixed(6).replace(/0+$/, ""),
        };
            },

/*
            updatePointFieldName() {
    this.$emit('updatePoFiNa', this.column.fieldname);
  },
*//*
        pointformatMapPoint(v){
            let point=this.wkt2decimal(v);
            console.log(point);

            // this.markerLatLng = [66.81105, 24.72061];
            this.markerLatLng = v;
            //this.markerLatLng = '['+ point.lat.toFixed(6).replace(/0+$/, "")+', '+point.lon.toFixed(6).replace(/0+$/, "") +']';
            

        }
*/




    },
}
</script>
