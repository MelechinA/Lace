<!--
  Компонент для отрисовки формы правки или представления данных по одной строке из любой таблицы. 
  Получает данные из любых Страницы или Таблицы и показывает вьюс или форму правки.
-->
<template>
  <!--template v-if="mode === 'table'">
  {{formatDate(v)}}
  </template-->    


  <template v-if="mode === 'view'"> 
    <!-- Ac: {{ areacoordvalue }} -->
<base-taxon-data-table
:dataset_uri="'https://isling.org/dataset/list?f='+getBioroupId" 
:tablestructur="'https://isling.org/dataset/list?f=100&f_id='+getBioroupId"
:speciesvalue=v.id
:areacoordvalue=areacoordvalue
></base-taxon-data-table>

<div v-if="getBioroupId == 243">
<base-single-species-gallery
    v-bind:dataset_uri="'https://isling.org/dataset/list?f='+getBioroupId" 
    v-bind:tablestructur="'https://isling.org/dataset/list?f=100&f_id='+getBioroupId"
    :speciesvalue=v.id
>
</base-single-species-gallery><!-- idbiogroup = 243 -->
</div>

<div v-else>
<base-gallery
    v-bind:dataset_uri="'https://isling.org/dataset/list?f='+getBioroupId" 
    v-bind:tablestructur="'https://isling.org/dataset/list?f=100&f_id='+getBioroupId"
    :speciesvalue=v.id
></base-gallery>
</div>  


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
import BaseGeoTable from './BaseGeoTable.vue';
import BaseTaxonDataTable from './BaseTaxonDataTable.vue';
//import DetailsWidget from './widgets/DetailsWidget.vue';
import PointWidget from './widgets/PointWidget.vue';
//import MapPointWidget from './widgets/MapPointWidget.vue';
import ImageWidget from './widgets/ImageWidget.vue';
import BaseTablePageTools from './BaseTablePageTools.vue';
import DateWidget from './widgets/DateWidget.vue';
//import { LMap, LMarker, LTileLayer, LGeoJson, LControl } from "@vue-leaflet/vue-leaflet";
import MapPointWidgetOl from './widgets/MapPointWidgetOl.vue';
//import BaseTaxonGallery from './BaseTaxonGallery.vue';
import BaseGallery from './BaseGallery.vue';
import BaseSingleSpeciesGallery from './BaseSingleSpeciesGallery.vue';
export default {
    name: 'BaseTaxonPage',
    props:['mode', 'meta', 'value', 'areacoordvalue'], // , 
    emits: ['update:modelValue'],
    data(){ 
        return {
            v: this.value,
//            biogroupid: 198,

        }
    }, 
    
    components: {
//DetailsWidget,
PointWidget,
//MapPointWidget,
ImageWidget,
BaseTablePageTools,
DateWidget,
MapPointWidgetOl,
BaseGeoTable,
BaseTaxonDataTable,
//BaseTaxonGallery,
BaseGallery,
BaseSingleSpeciesGallery,
    },

    mounted(){

//        this.getBioroupId();

    },
    //и здесь

    methods:{
      
        handleInput (e) {            
           this.v = e.target.value;            
           this.$emit('update:modelValue', this.v)
        },


    },


    computed:{

    getBioroupId: function(){
        let idbiogroup = undefined;
if (this.value.mgroup.id == 1811)  {
    idbiogroup = 198; // lichens
}
else if (this.value.mgroup.id == 1812) {
    idbiogroup = 198; // Lichenicolous fungi
}
else if (this.value.mgroup.id == 1813) {
    idbiogroup = 198; // Saprobic fungi
}
else if (this.value.mgroup.id == 1817) {
    idbiogroup = 262; // cyano
}
else if (this.value.mgroup.id == 1826) {
    idbiogroup = 230; //hepatics-mosses
}
else if (this.value.mgroup.id == 1815) {
    idbiogroup = 230; //hepatics
}
else if (this.value.mgroup.id == 1825) {
    idbiogroup = 230; // hornworth
}
else if (this.value.mgroup.id == 1816) {
    idbiogroup = 230; // moss
}
else if (this.value.mgroup.id == 1818) {
    idbiogroup = 257; //fungi
}

else if (this.value.mgroup.id == 1819) {
    idbiogroup = 221; // vascular
}
else if (this.value.mgroup.id == 1814) {
    idbiogroup = 243; // fish
}
else {
    idbiogroup = 2188; // all taxons species table
}

return idbiogroup;
        },
    

  } 





}
</script>