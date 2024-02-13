<template>
  <v-app :theme=$store.state.theme>
    <!--v-app theme="mainCustomLightTheme"--> <!--Если делать все под одной темой - будет ли это путать юзеров. А если все в разных - будет ли напрягать?-->
      <lichens-header-vue></lichens-header-vue>


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


          <!-- <v-text-field class="px-2 my-1"
            :loading="loading"
            variant="solo"
            label="Search species"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
          ></v-text-field>
          Gallery (как лучше - запустить тут галерею или кнопку присобачить?) -->

            <v-card-actions  class="d-inline">
                <!-- <v-btn
                  class="my-1"
                  variant="flat"
                  color="attentionlight"
                  @click="$router.push('/lichens')" target="_blank">
                  Species list generalized
                </v-btn> -->
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="attentionlight"
                  @click="$router.push('/lichens/table/198')" target="_blank">
                  Species table DwC-type
                </v-btn>
                <!-- <v-btn
                  class="my-1"
                  variant="flat"
                  color="attentionlight"
                  @click="$router.push('/lichens')" target="_blank">
                  Annotated species list
                </v-btn> -->
                <!-- <v-btn
                  class="my-1"
                  variant="flat"
                  color="attention"
                  @click="$router.push('/lichens/lichensgallery')" target="_blank">
                  Species Images
                </v-btn> -->
            </v-card-actions>
          </v-card>




          <v-card
            class="mx-auto rounded-0"
            variant="text"
          >
            <v-card-item class="px-2"> <!--px-2 - make padding -->
              <div>
                <div class="text-h6 mb-1">
                  Projects
                </div>
              </div>
            </v-card-item>

            <v-sheet class="mb-3">
              <v-card
                class="d-flex align-center justify-center ml-2"
                max-width="331"
                height="38"
                image="https://isling.org/image/data?image=small_ACLdS4x60Cw6nX.JPG"
                title="Lichen Gallery"
                @click="$router.push('/lichens/lichensgallery')" target="_blank"
                theme="dark"
              ></v-card>
            </v-sheet>

            <v-card-actions  class="d-inline">
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="regular"
                  @click="$router.push('/lichens/checklistmurmansk/')" target="_blank">
                  Lichen Cheklist of the Murmansk region
                </v-btn>
                <!-- <v-btn
                  class="my-1"
                  variant="flat"
                  color="regular"
                  @click="$router.push('/lichens/lichensgallery')" target="_blank"> <img src="https://isling.org/image/data?image=small_ACLdS4x60Cw6nX.JPG"/>
                  Species Images
                </v-btn> -->
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
              <!-- <v-btn
              v-if="$store.state.loggedIn=true"
                  class="my-1"
                  variant="flat"
                  color="vs"
                  @click="$router.push('/lichens/table/200')">
                  Home[Username] collection
                </v-btn> -->
                <!-- <v-btn
                  class="my-1"
                  variant="flat"
                  color="regular"
                  @click="$router.push('/lichens/table/200')">
                  KPABG
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="regular"
                  @click="$router.push('/lichens')" target="_blank">
                  INEP
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="regular"
                  @click="$router.push('/lichens')" target="_blank">
                  SMR
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="regular"
                  @click="$router.push('/lichens')" target="_blank">
                  PZV
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="regular"
                  @click="$router.push('/lichens')" target="_blank">
                  DC
                </v-btn> -->
                <v-btn
                  class="my-1"
                  variant="outlined"
                  color="regular"
                  @click="$router.push('/lichens/table/200')">
                  All collections
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
                  @click="$router.push('/lichens/table/201')">
                  Observations
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="regular"
                  @click="$router.push('/lichens/table/202')">
                  Literary and side DB
                </v-btn>
                <!-- <v-btn
                  class="my-1"
                  variant="outlined"
                  color="regular"
                  @click="$router.push('/lichens/table/200')">
                  All sources
                </v-btn> -->
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
import LichensHeaderVue from '@/views/lichens/LichensHeader.vue';


export default defineComponent({
  name: 'LichensHomeView',

  components: {
    LichensHeaderVue,
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