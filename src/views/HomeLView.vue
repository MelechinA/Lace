<template>
  <v-app theme="mainCustomLightTheme">
  <main-header></main-header>
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
                  Sections:
                </div>
                <!--div class="text-caption">
                  Sections:
                </div-->
              </div>
            </v-card-item>

            <v-card-actions  class="d-inline">
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="red"
                  @click="$router.push('/cyano')" target="_blank">
                  Cyano
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="orange"
                  @click="$router.push('/moss')" target="_blank">
                  Moss
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="yellow"
                  @click="$router.push('/hepatics')" target="_blank">
                  Hepatics
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="green"
                  @click="$router.push('/fungi')" target="_blank">
                  Fungi
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="light-blue"
                  @click="$router.push('/vascular')" target="_blank">
                  Vascular
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="indigo"
                  @click="$router.push('/fish')" target="_blank">
                  Fish
                </v-btn>
                <v-btn
                  class="my-1"
                  variant="flat"
                  color="deep-purple"
                  @click="$router.push('/lichens')" target="_blank">
                  Lichens
                </v-btn>
                <!--v-btn
                  class="my-1"
                  variant="flat"
                  color="red"
                  @click="$router.push('/bacteris')" target="_blank">
                  Bacteria
                </!--v-btn>
                <v-btn--
                  class="my-1"
                  variant="flat"
                  color="orange"
                  @click="$router.push('/multigroup')" target="_blank">
                  Multigroup
                </v-btn-->
            </v-card-actions>
          </v-card>

          <v-card
            class="mx-auto rounded-0  my-5"
            variant="text"
          >
            <v-card-item class="px-2">
              <div>
                <div class="text-overline mb-1">
                  <!--Main page of the <span class="text-green">L</span><span class="text-pink">.</span>--->
                </div>
                <div class="text-h6 mb-1">
                  See also:
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

                  @click="$router.push('/help')" target="_blank">
                  Get started
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
                  Notes:
                </div>
                Functions "edit" and "add" still in development so it's available <v-btn
                  class="my-1"
                  variant="text"
                  color="accent"
                  href="https://isling.org/" target="_blank">here
                  
                </v-btn> (in "old" interface)
              </div>
            </v-card-item>

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
                  Development progress [upd: 08.02.2024]
                </div>
                <div><span class="text-regular">Done:</span> Gallery, Checklist (of some region), Species page (to cheklists), Taxon page, Basic structure, Tables of specimens, 
                  Tables of species, Filtering, Sorting, Grouping, Specimen page, Bio-sections, Maps (include region and free-polygon filters) </div>
                <div><span class="text-regular">In progress:</span>  Login, Edit\add-forms, Print-form </div>
                <div><span class="text-regular">In nearest plans:</span> xls-export, "Annotated" list </div>
                
                
              </div>
            </v-card-item>

         </v-card>


</v-container>
  <base-footer></base-footer>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import MainHeader from './MainHeader.vue';


export default defineComponent({
  name: 'HomeLView',

  components: {
    MainHeader,
  },
  data: () => ({

    }),
      
});
</script>