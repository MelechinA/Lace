<template>

<!-- <v-card class="rounded-0 px-1" color="red">
<v-card-text>
        This is a testing version only
        <v-btn href="https://isling.org:8000/" target="_blank" variant="outlined"> Production HERE </v-btn>
</v-card-text>
</v-card> -->





  <v-footer
    class="bg-footercolor text-center d-flex flex-column"
  >
    <div>

      <!-- <v-btn
                class="mr-1 my-1"
                variant="flat"
                color="vs"
                href="https://t.me/islingsup" target="_blank">
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


    </div>

    <!--div>
      it's just tool
    </div-->

   <v-btn variant="text" @click="$router.push('/')">
      {{ new Date().getFullYear() }} — <strong><span class="text-regular">L</span><span class="text-vs px-0">.</span></strong>
   </v-btn>
  </v-footer>
</template>
<script>
  export default {
    name: 'BaseFooter',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
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


  }
</script>