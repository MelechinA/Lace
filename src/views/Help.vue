<template>
  <v-app theme="mainCustomLightTheme">
    <main-header></main-header>
    <v-container fluid class="px-2">
        <v-card
            class="mx-auto rounded-0"
            variant="text"
          >
            <v-card-item class="px-2"> <!--px-2 - make padding -->


                <div class="text-h6 mb-1">
                  Helps
                </div>
                <div>
                  Our contacts about any questions:
                </div>
                

                  <!-- <v-btn
                class="my-1 mr-2"
                variant="outlined"
                color="regular"
                href="https://t.me/islingsup" target="_blank">
                <span class="text-h5">
                L.support in Telegram
                </span>
                <v-icon icon="mdi-send" />
                <v-tooltip
                  activator="parent"
                  location="bottom"
                >Open in TG app </v-tooltip>
              </v-btn> -->


              <v-btn
                class="my-1"
                variant="flat"
                color="accent"
                v-copy="'islingsup@gmail.com'"
                @click="clicktooltipMessage"
                >
                <span class="text-h5">
                  islingsup@gmail.com 
                </span> <v-icon icon="mdi-email" />
                <v-tooltip
                  activator="parent"
                  location="bottom"
                >{{clicktooltip}}</v-tooltip>
              </v-btn>


                <div class="text-h4 mb-1">
                  <!---->
                </div>
                <div class="text-h5 mb-1">
<!--p>
The use of materials obtained or extracted from the CRIS information system should be accompanied by an indication of IS L. and the entire chain of data sources, including IS L. The following link format is recommended: [data, for example, type and place of collecting, authorship] (Herbarium sample [acronym] [local herbarial number if any] Lid- [] (by L.)). For literary sources: [data] Author (year, or other marker in the list of sources) (by L. (Lid- [])). Lid is the unique identifier of any material (Sample L.) inside the IS L. - it can be omitted if necessarily.
</p-->
                </div>

            </v-card-item>

          </v-card> 
        </v-container>
        <base-footer></base-footer>
        </v-app>
        </template>

<script>
import { defineComponent } from 'vue';
import MainHeader from '@/views/MainHeader.vue';


export default defineComponent({
  name: 'Help',

  components: {
    MainHeader,
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
