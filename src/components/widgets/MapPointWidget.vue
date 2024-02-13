<template>
    <template v-if="mode === 'table'">
        <!--p class="text-truncate" style="max-width: 300px;">{{pointformat(modelValue)}}</p-->
        <!--l-marker :lat-lng = "markerLatLng"> </l-marker-- один из способов показать выделенную точку-->
    </template>
    <template v-else-if="mode === 'view'">
        <div style=" height: 50%">
        <l-map :zoom="4" :center="markerLatLng">
            <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
            transparent="false"
            :attribution="attr"
            ></l-tile-layer>
       
            <l-marker :lat-lng = "markerLatLng" ></l-marker> 
        </l-map>
        </div>
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
import { LMarker, LMap, LTileLayer, LControlAttribution, LControl, LControlZoom } from "@vue-leaflet/vue-leaflet";
export default {
    name: 'point-widget',
    props:['mode','column', 'modelValue', 'attr'],
    emits: ['update:modelValue'],
    data(){
        return {
   //         v: this.modelValue,
            markerLatLng: this.pointformat(this.modelValue),

            textLatLon: this.pointformattext(this.modelValue)

        }
    },
    components: {
        LMarker,
    LTileLayer, 
    LMap, 
    LControlAttribution, 
    LControl,
    LControlZoom,
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

        
        pointformat(v){
            // v -   это произволное локальое значение  - параметр функции, который замещается на необходимое значение в строке markerLatLng: this.pointformat(this.modelValue), (в моделях)

            var point=this.wkt2decimal(v)

            
let lat = point.lat.toFixed(6).replace(/0+$/, "");
let lon = point.lon.toFixed(6).replace(/0+$/, "");

             return [lat,lon];
             
 //            return point.lat.toFixed(6).replace(/0+$/, "")+', '+point.lon.toFixed(6).replace(/0+$/, "");
        },


        pointformattext(v){
            var point=this.wkt2decimal(v)
            return point.lat.toFixed(6).replace(/0+$/, "")+', '+point.lon.toFixed(6).replace(/0+$/, "");
        },








    },
}
</script>
