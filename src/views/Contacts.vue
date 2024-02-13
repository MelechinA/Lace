<template>
  <v-app theme="mainCustomLightTheme">
  <main-header></main-header>
  <v-container fluid class="px-2">

          <v-card
            class="mx-auto rounded-0"
            variant="text"
          >
            <v-card-item class="px-2">
              <div>
                <div class="text-h4 mb-1">
                  Any questions:
                </div>
              </div>  
            </v-card-item>    
            <v-card-actions  class="d-inline">
              <!-- <v-btn
                class="my-1"
                variant="flat"
                color="accent"
                href="https://t.me/bbcrussian" target="_blank">
                <span class="text-h5">
                L.'s Telegram
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
                color="regular"
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
            </v-card-actions>
          </v-card>

          </v-container>
          </v-app>
          <base-footer></base-footer>
</template>

<script>
    
import { defineComponent } from 'vue';
import MainHeader from '@/views/MainHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';


export default defineComponent({
  name: 'Contacts',
    components: {
    MainHeader,
    BaseFooter,
  },
  data(){ 
        return {
          clicktooltip: 'Click to copy',

        }
    },

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