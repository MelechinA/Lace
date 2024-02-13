<template>
  <v-app theme="mainCustomLightTheme">
    <main-header></main-header>
    <v-container fluid class="px-2">
        <v-card
            class="mx-auto rounded-0"
            variant="text"
          >
            <v-card-item class="px-2"> <!--px-2 - make padding -->
                <div class="text-h5 mb-1">
                  Rules of using the information system L.
                </div>
                <div class="text-h6 mb-1">
                  Rights
                </div>
                <div class="mb-1">
                  Since information on specimens in the collections and funds of scientific and other organizations does not apply to information whose access to or distribution is limited in accordance with federal laws (i.e. does not apply to any type of secret or confidential information, is not subject to copyright and / or related rights), their use, including by entering into the public database L., is free and cannot be limited (the User has the right to enter data on specimens in L. any collection). Taking into account the scientific and educational goals of the creation and functioning of the information system L., its User is also entitled to add materials obtained from the databases of third parties to the database L. provided that the User is legally authorized to use such databases and must link the source database on the page specimen, as well as data on herbarium specimens cited in literary sources (including in the form of quotes), subject to the obligatory indication of the author of the corresponding publication, its name and other bibliographical data.
                </div>
                <div class="text-h6 mb-1">
                  Citation
                </div>
                <div class="mb-1">
                  <p>
Data arrays exported from L., as well as files (unless a different license is specified for the file) can be used under the <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a> license. Materials (Samples) can be freely used for personal, scientific and educational purposes to the extent that meets such goals, in the whole world, taking into account the conditions of applicable open licenses.
</p>
<p>
The use of materials obtained or extracted from the CRIS information system should be accompanied by an indication of IS L. and the entire chain of data sources, including IS L. The following link format is recommended: [data, for example, type and place of collecting, authorship] (Herbarium sample [acronym] [local herbarial number if any] Lid- [] (by L.)). For literary sources: [data] Author (year, or other marker in the list of sources) (by L. (Lid- [])). Lid is the unique identifier of any material (Sample L.) inside the IS L. - it can be omitted if necessarily.
</p>
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
  name: 'Rights',

  components: {
    MainHeader,
  },
  data: () => ({

    }),
      
});
</script>
