<template>
  <v-app theme="mainCustomLightTheme">
  <main-header></main-header>
    <v-container fluid class="px-2">
      <v-card
        class="mx-auto rounded-0"
        variant="text"
      >
      <!--max-width="800px"-->
            <v-card-item class="px-2">
              <div>

                <div class="text-h6 mb-1">
                  What is L.?
                </div>
                <div class="mb-1">
                  Information System (IS) "L." - is a tool for entering, storing, organizing, analyzing and showing data from various sources (observations, sample collections, literature, etc.), different types (text, images, DNA data, etc.) for all groups of living organisms.
                </div>
                
                <div class="text-h6 mb-1">
                  L.'s goal
                </div>
                <div class="mb-1">
                  L.'s goal is to give any User L. an instrument of a full cycle of working with bio-data (a full cycle includes entering, storing, organizing, searching, analyzing and presenting) any type (text, binary files) from any sources (collections, observations, literature, other information systems) without limitation by collection, region, country or biological group of organisms.
                  Our main task is to make L. as convenient and self-sufficient as possible so that the User L. does not have the need or desire to use any other information resource or tool in his work.
                </div>
                
                <div class="text-h6 mb-1">
                  L.'s members:
                </div>
                <div class="mb-1">
                  Collections that use L. as their main information system: KPABG, SMR, INEP, KAND, PZV, JCUCC
                </div>
                
                <div class="text-h6 mb-1">
                  Fundings:
                </div>
                <div class="mb-1">
                  RFBR, RSF funds; PABGI KSC RAS, INEP KSC RAS, ISDCT SB RAS.
                </div>
                
                <div class="text-h6 mb-1">
                  More about L.:
                </div>
                <v-btn
                  class="my-1 mr-1"
                  variant="flat"
                  color="regular"
                  @click="dialoghowitwork = true"
                >
                What can I use L. for?
                </v-btn>
                <!--v-btn--
                  class="my-1 mr-1"
                  variant="flat"
                  color="regular"
                  @click="dialogwhyl = true"
                >
                  Why L.?
                </!--v-btn-->
                <v-btn
                  class="my-1 mr-1"
                  variant="flat"
                  color="accent"
                  @click="dialogwhymember = true"
                >
                How get started use of L.?
                </v-btn>
                
              </div>
              </v-card-item>
            </v-card>
            </v-container>
               

                <v-dialog
                  v-model="dialoghowitwork"
                >
                  <v-card 
                  class="mx-auto rounded-0"
                  max-width="800">
                    <v-card-text>
                    <p class="text-h6">If I'm an Researcher:</p>
                    <p>1. To search, export and use data anonymously (e.g. as in GBIF).</p>
                    <p>2. To organize data for my projects - for example: once in a lifetime to collect all observations, your own and other people’s samples, all literary data of any area; to associate samples with images or molecular data; store all your data of all types in a linked form on servers with daily backups; semi-automatically collect data into projects - for example, “Checklist of lichens of the Murmansk region”</p>
                  </v-card-text>
                  <v-card-text>
                    <p class="text-h6">If I'm the curator of a collection:</p>
                    <p>1. To enter, change, store specimen data and print labels.</p>
                    <p>2. For managing the exchange fund and tracking specimens in a loan (getting rid of bureaucracy in both cases).</p>
                  </v-card-text>
                  <v-card-text>
                    <p class="text-h6">If I'm a project\laboratory manager:</p>
                    <p>1. To track and verify the primary data of performers/employees</p>
                    <p>2. To obtain statistics on primary data</p>
                  </v-card-text>
                  <v-card-text>
                      <v-btn
                          class="my-1 mr-1"
                          variant="flat"
                          color="regular" 
                          @click="dialoghowitwork = false"
                        >Clear
                      </v-btn>
                      <v-btn
                        class="my-1 mr-1"
                        variant="outlined"
                        color="regular" 
                        @click.stop="dialoghowitwork = false, $router.push('/help')"
                        >I have some questions
                      </v-btn>
                      <v-btn
                          class="my-1"
                          variant="flat"
                          color="regular" 
                          @click="dialoghowitwork = false, dialogwhymember = true"
                        >Get started
                      </v-btn>
                  </v-card-text>
                  </v-card>
                </v-dialog>

                <!--v-dialog--
                  v-model="dialogwhyl"
                >
                <v-card 
                  class="mx-auto rounded-0"
                  max-width="800">
                    <v-card-text>
                       (Why not?!) 
                    </v-card-text>
                    <v-card-text>
                    <p class="text-h6">L.advantages:</p>
                    <p>1. </p>
                    <p>2. </p>
                  </v-card-text>
                    <v-card-actions>
                        <v-btn
                          class="my-1 mx-1"
                          variant="flat"
                          color="regular" 
                          @click="dialogwhyl = false"
                        >Clear</v-btn>
                        <v-btn
                          class="my-1"
                          variant="flat"
                          color="accent" 
                          @click.stop="$router.push('/contacts'), dialogwhyl = false"
                          >Discuss?</v-btn>
                    </v-card-actions>
                  </v-card>
                </!--v-dialog-->
                
 
                <v-dialog
                  v-model="dialogwhymember"
                >
                <v-card 
                  class="mx-auto rounded-0"
                  max-width="800">
                  <v-card-text>
                    <p class="text-h6">Instruction for Researchers:</p>
                    <p>1. Write letter to administrator of L. with short description of yourself 
                      (with links on your researches, articles - e.g. in Researchgate or other resources) 
                      and your goals - which data type you would like organise.</p>
                    <p>2. If your target collection is member of L. - 
                      write or call to curator of this collection - he will registered you and give you rigths to need collection table (and to other data tables if it need). </p>
                      <p>3. If your target collection is not member of L. - 
                      admin will registered you and give you rigths to table "Side collections" (and to other data tables if it need). </p>
                  </v-card-text>
                  <v-card-text>
                    <p class="text-h6">Instruction for Curators:</p>
                    <p>1. Write letter to administrator of L. about yours collection, goals, etc. 
                      Admin will registered you and create needs tables, forms etc - by deals.</p>
                    <p>2. After testing and fixes all issues you can use L. for your collection</p>
                  </v-card-text>

                  <v-card-text>
                    <p class="text-h6">Why is independent registration prohibited ?</p>
                    <p>1. It doesn't make sense - (after registration) only admin or curator have ability to give rights to needs tables. 
                      Just registered user haven't any rights on input or edit.</p>
                    <p>2. Also the acquaintance with new members needs for security and filtering of freaks. </p>
                  </v-card-text>
                  <v-card-text>
                     <v-btn
                          class="my-1 mr-1"
                          variant="outlined"
                          color="regular" 
                          @click="dialogwhymember = false"
                        >Clear</v-btn><v-btn
                          class="my-1"
                          variant="flat"
                          color="accent" 
                          @click.stop="$router.push('/contacts'), dialogwhymember = false"
                          >Get started</v-btn>
                  </v-card-text>
                  </v-card>
                </v-dialog>



        <base-footer></base-footer>
        </v-app>
        </template>

<script>
import { defineComponent } from 'vue';
import MainHeader from '@/views/MainHeader.vue';


export default defineComponent({
  name: 'About',

  components: {
    MainHeader,
  },
  data: () => ({

      dialoghowitwork: false,
      dialogwhymember: false,
      dialogwhyl: false,
    }),
      
});
</script>
