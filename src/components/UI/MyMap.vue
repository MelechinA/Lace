<template>

      <!--l-map ref="map" v-model:zoom="zoom" :center="[67.81105, 34.72061]"-->
        <!--l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer-->

        <!--l-marker :lat-lng="[67.81105, 34.72061]" draggable> </l-marker-->
        <l-map
      zoom="2"
      :center="center"
      style="height: 500px; width: 100%"
    >
        <l-control-layers />
      <!--l-wms-tile-layer
        v-for="layer in layers"
        :key="layer.name"
        :base-url="baseUrl"
        :layers="layer.layers"
        :visible="layer.visible"
        :name="layer.name"
        layer-type="base"
      /-->

      <l-wms-tile-layer
  base-url="https://maps.heigit.org/osm-wms/service"
  attribution="HeiGIT <a href='osm-wms.de'>OSM WMS</a>"
  layer-type="base"
  name="osm-wms.de"
  version="1.3.0"
  format="image/png"
  transparent="true"
  layers="osm_auto:all"
/>
<l-marker :lat-lng="[67.81105, 34.72061]" draggable> </l-marker>
      </l-map>

  </template>




  
  <script>
  import "leaflet/dist/leaflet.css";
  import { LMap, 
    LTileLayer,   
    LIcon,
   LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
  LWmsTileLayer, } from "@vue-leaflet/vue-leaflet";
  
  export default {
    name: 'MyMap',
    components: {
      LMap,
      LTileLayer,
      LIcon,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
    LWmsTileLayer,
    },
    data() {
      return {
   //     zoom: 2,
      center: [67.81105, 34.72061],
   //     baseUrl: 'http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi',
   //   layers: [
    //    {
   //       name: 'Weather Data',
   //       visible: true,
    //      format: 'image/png',
    //      layers: 'nexrad-n0r-900913',
    //      transparent: true,
    //      attribution: "Weather data © 2012 IEM Nexrad"
    //    }
    //  ]



      };
    },
  };
  </script>
  
 