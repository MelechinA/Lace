<template>
    <v-app theme="mainCustomLightTheme">
      <lichens-header></lichens-header>
      
      <div class="px-lg-3">
        <div class="text-h4 px-lg-1 px-1">
          Lichen checklist of the Murmansk region
        </div>

<div class="text-h6 px-lg-1 px-1">

<!--link to about  and blah blah blah-->

  <base-checklist
    :dataset_uri="'https://isling.org/dataset/list?f='+198" 
    :tablestructur="'https://isling.org/dataset/list?f=100&f_id='+198"
    :spcffieldname="'ref_cfsspslfvsp_cwwi'"
    :spcffieldvalue="1"
    :mgroup="'ref_mgroup_x0zk'"
    :mgroupvalue="1811"
    :areacoordvalue="'geotable:2171:4:geom'"
    :idtable="198"

  ></base-checklist>
</div>


</div>


          <base-footer></base-footer>
          </v-app>
          </template>
  
  <script>
  import { defineComponent } from 'vue';
  import LichensHeader from '@/views/lichens/LichensHeader.vue';
  import BaseChecklist from '@/components/BaseChecklist.vue';
  
  
  export default defineComponent({
    name: 'LichenCheklistMurmansk',
  
    components: {
BaseChecklist,
      LichensHeader,
    },
    data: () => ({
      clicktooltip: 'Click to copy',
      }),
      methods: {
          clicktooltipMessage(){
            if (this.clicktooltip =='Click to copy') {
            this.clicktooltip = 'Copied';
            }
            else {
              this.clicktooltip = 'Click to copy';
            }
            setTimeout(() => {
          this.clicktooltip = 'Click to copy';
        }, 10000);
  
          },
  
      },
        
  });
  </script>
  