<template> 

  <template v-if="mode === 'view'">
    <div class="d-none d-sm-none d-md-flex rounded-0"><!--desktop-->
      <!--v-carousel v-if="imagesGallery.length > 0"
      show-arrows="hover"
      hide-delimiters
      height="200"
      >
        <v-carousel-item
          v-for="(img, index) in imagesGallery"
          :key="index"
          :title="img.title"
          :content="img.license"
          :src="img.link"
          cover
        >
<div class="px-lg-4">
          <v-btn
            class="d-none d-sm-none d-md-flex rounded-0"
            variant="flat"
            color="accent"
            @click="overlay = !overlay, imgsrc = img.link"
            >
              Full
          </v-btn>
</div>
        </v-carousel-item>
      </v-carousel-->

      <v-slide-group 

      v-if="imagesGallery.length > 0"
      v-model="model"

      selected-class="bg-vs"
    >
      <v-slide-group-item
        
        v-for="(img, index) in imagesGallery"
        :key="index"
      >
      <v-card @click="overlay = !overlay, imgsrc = prefixfull+img.link" class="mr-2 rounded-0">
        <v-img 
        width="300"
      height="300"
          aspect-ratio="1/1"
          cover
          :src=prefixsmall+img.link
          >
        </v-img>
      </v-card> 

      <!--v-card @click="overlay = !overlay, imgsrc = img.link"
      
      class="mx-auto mr-2 mb-2 rounded-0"
      max-width="200"
      height="200"
      :image=img.link
      title=""
      theme="dark"
      >
      </v-card-->


        <!--v-card
          class="mr-2 mb-2 rounded-0"
          width="200"
          @click="overlay = !overlay, imgsrc = img.link"
        > 
        <v-img
        :src="img.link"/> 
        </v-card-->
      </v-slide-group-item>
    </v-slide-group>


      <v-dialog v-model="overlay" fullscreen><!--диалог оверлея для фуллскрина - как он отлавливает нужную картинку?-->
            <v-card class="overflow-auto rounded-0">
              <v-img 
                :src="imgsrc"
              > 
                <v-btn
                  rounded="0"
                  variant="flat"
                  color="regular"
                  @click.stop="overlay = !overlay"
                >
                  Close
                </v-btn>

                <!-- <v-btn 
   class="ma-2" 
   outlined 
   :href=imgsrc
   download>
       Download
</v-btn> -->

              </v-img>
            </v-card>
          </v-dialog>
    </div>
    <div class="d-flex d-sm-none d-none d-sm-flex d-md-none"><!--mobile-->
      <v-carousel v-if="imagesGallery.length > 0"
        :show-arrows="false"
        height="400"
      >
        <v-carousel-item
          v-for="(img, index) in imagesGallery"
          :key="index"
          :title=img.title
          :content="img.license"
          :src=prefixmiddle+img.link
          cover
        >
        </v-carousel-item>
      </v-carousel>
    </div>  
  </template>
<!--v-if="v && v!=='null'"   v-if="imagesGallery.length > 0" -->
  <template v-else-if="mode === 'table'">
        <v-btn
        v-if="v && v!=='null'"
            class="my-1 mr-1"  
            variant="outlined"
            color="regular"
            @click="showimagedialog = !showimagedialog"


        >
        {{ imagesGallery.length }} img
        </v-btn>



    <v-dialog
       
      v-model="showimagedialog"
      fullscreen
    >
    <v-card class="overflow-auto rounded-0 py-10">
      <v-carousel
      show-arrows="hover"
      hide-delimiters
      >
        <v-carousel-item
          v-for="(img, index) in imagesGallery"
          :key="index"
          :title="img.title"
          :content="img.license"
          :src=prefixmiddle+img.link
          cover
        >

          <v-btn
            class="rounded-0 mr-4"
            variant="flat"
            color="regular"
            @click.stop="showimagedialog = !showimagedialog"
            >
              Close
          </v-btn>

          <v-btn
            class="rounded-0"
            variant="flat"
            color="accent"
            @click="overlay = !overlay, imgsrc = prefixfull+img.link"
            >
              Full
          </v-btn>


          <v-dialog v-model="overlay" fullscreen
          ><!--диалог оверлея для фуллскрина - как он отлавливает нужную картинку?-->
            <v-card class="overflow-auto rounded-0">
              <v-img 
                :src="imgsrc"
              > 
                <v-btn
                  rounded="0"
                  variant="flat"
                  color="regular"
                  @click.stop="overlay = !overlay"
                >
                  Close
                </v-btn>
              </v-img>
            </v-card>
          </v-dialog>
        </v-carousel-item>
      </v-carousel>
    </v-card>  
    </v-dialog>
  </template>

  <template v-else-if="mode === 'edit'">

    <v-file-input label="File" variant="outlined" @input="handleInput"></v-file-input>

    <!-- <div class="file">
      <label class="file-label">
        <input class="file-input" type="file" name="file" @input="handleInput">
          <span class="file-cta">
            <span class="file-icon">
            <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
            Choose a file11+++
            </span>
          </span>
      </label>
    </div> -->
  </template>
  <template v-else>
    {{v}}
  </template>

</template>


<script>

export default {
    name: 'image-widget',
    props:['mode', 'column', 'modelValue', 'imgtitle'],
    emits: ['update:modelValue'],
    components: {

    },
    data(){
    return {
    v: this.modelValue,
    showimagedialog: false, 
    overlay: false,
    imgsrc: '',
    prefixfull: "https://isling.org/image/data?image=",
    prefixsmall: "https://isling.org/image/data?image=small_",
    prefixmiddle: "https://isling.org/image/data?image=middle_"
/*
    breakpoints: {

        1500: {
          slideRatio: 2 / 3
        },
        900: {
          slideRatio: 1
        },
      },
*/

    }
    },
    methods:{
        handleInput (e) {            
           this.v = e.target.value;            
           this.$emit('update:modelValue', this.v);
           this.dialogVisible = false;
        },
        showDialog() {
            this.dialogVisible = true;
        }

    }, 
    computed:{
    imagesGallery: function(){
        if (this.modelValue != undefined) {  // checking undefined values - so ok? 
        let images=JSON.parse(this.modelValue);
        for(var i=0; i<images.length; i++){
 //         images[i].link="https://isling.org/image/data?image="+images[i].link;
          images[i].link=images[i].link;
 //         images[i].link="https://isling.org/image/data?image=small_"+images[i].link; //так нагородить галерею - т.к. фуллы долго грузятся
        }
//console.log(images);
        return images;
        
      } else {
        return ""; // end of checking
      }
        
    },
//     imagesGalleryFull: function(){
//         if (this.modelValue != undefined) {  // checking undefined values - so ok? 
//         let fullimages=JSON.parse(this.modelValue);
//         for(var i=0; i<fullimages.length; i++){
//           fullimages[i].link="https://isling.org/image/data?image="+fullimages[i].link;
//  //         images[i].link="https://isling.org/image/data?image=small_"+images[i].link; //так нагородить галерею - т.к. фуллы долго грузятся
//         }
// //console.log(images);
//         return fullimages;
        
//       } else {
//         return ""; // end of checking
//       }
        
//     },

  } 
}
</script>
