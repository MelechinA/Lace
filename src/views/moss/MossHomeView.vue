<template>
  <v-app :theme=$store.state.theme>
<moss-header />


  <v-container fluid class="px-2">

          <v-card
            class="mx-auto rounded-0"
            variant="text"
          >
            <v-card-item class="px-2"> <!--px-2 - make padding -->
              <div>
                <!--div class="text-overline mb-1">
                  <span class="text-green">Write us for any question: </span><span class="text-pink">islingsup@gmail.com</span>
                </div-->
                <div class="text-h6 mb-1">
                  Species section
                </div>
                <!--div class="text-caption">
                  Species list or data about a taxon
                </div-->
              </div>
            </v-card-item>

            <v-card-actions  class="d-inline">

                <v-btn
                  class="my-1"
                  variant="flat"
                  color="attentionlight"
                  @click="$router.push('/moss/table/230')" target="_blank">
                  Species table DwC-type
                </v-btn>
            </v-card-actions>
          </v-card>



          <v-card
            class="mx-auto rounded-0 my-5"
            variant="text"
          >
            <v-card-item class="px-2"> <!--px-2 - make padding -->
              <div>
                <!--div class="text-overline mb-1">
                  <span class="text-green">Write us for any question: </span><span class="text-pink">islingsup@gmail.com</span>
                </div-->
                <div class="text-h6 mb-1">
                  Collections
                </div>
                <!--div class="text-caption">
                  Search data about specimen or input and edit data of specimen
                </div-->
              </div>
            </v-card-item>

            <v-card-actions  class="d-inline">
              <v-btn
                  class="my-1"
                  variant="outlined"
                  color="regular"
                  @click="$router.push('/moss/table/236')">
                  KPABG moss
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="outlined"
                  color="regular"
                  @click="$router.push('/moss/table/235')">
                  All moss collections
                </v-btn>
                
            </v-card-actions>
          </v-card>


          <v-card
            class="mx-auto rounded-0 my-5"
            variant="text"
          >
            <v-card-item class="px-2"> <!--px-2 - make padding -->
              <div>
                <!--div class="text-overline mb-1">
                  <span class="text-green">Write us for any question: </span><span class="text-pink">islingsup@gmail.com</span>
                </div-->
                <div class="text-h6 mb-1">
                  Other sources
                </div>
                <!--div class="text-caption">
                  Search data about specimen or input and edit data of specimen
                </div-->
              </div>
            </v-card-item>

            <v-card-actions  class="d-inline">
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="regular"
                  @click="$router.push('/moss/table/234')">
                  Observations
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="regular"
                  @click="$router.push('/moss/table/233')">
                  Literary and side DB
                </v-btn>

                <v-btn
                  class="my-1"
                  variant="flat"
                  color="regular"
                  @click="$router.push('/moss/table/229')">
                  All hepatic-moss specimen
                </v-btn>
            </v-card-actions>
          </v-card>




          <v-card
            class="mx-auto rounded-0 my-5"
            variant="text"
          >
            <v-card-item class="px-2">
              <div>
                <div class="text-overline mb-1">
                  <!--Main page of the <span class="text-green">L</span><span class="text-pink">.</span>--->
                </div>
                <div class="text-h6 mb-1">
                  Other links
                </div>
                <!--div class="text-caption">
                  Other links:
                </div-->
              </div>
            </v-card-item>
            <v-card-actions  class="d-inline">
              <v-btn
                  class="my-1"
                  color="regular" 
                  variant="outlined"
                  @click="$router.push('/')">
                  L. home page
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="outlined"
                  color="accent"
                  href="https://isling.org:8000/" target="_blank">
                  Try in sandbox
                </v-btn>
            </v-card-actions>
          </v-card>


</v-container>
  <base-footer></base-footer>
  </v-app>
</template>


<script>

import { defineComponent } from 'vue';
import MossHeader from '@/views/moss/MossHeader.vue';


export default defineComponent({
  name: 'MossHomeView',

  components: {
    MossHeader,
  },

  data: () => ({
      loaded: false,
      loading: false,
    }),

    methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },


});
</script>