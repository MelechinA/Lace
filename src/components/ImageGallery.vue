    <template>
      <div class="d-none d-sm-none d-md-flex rounded-0">

        <!--desktop-->
        <v-carousel v-if="imagesGallery.length > 0"
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
        </v-carousel>
        <v-dialog v-model="overlay" fullscreen>
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
      </div>
      <div class="d-flex d-sm-none d-none d-sm-flex d-md-none"><!--mobile-->
        <v-carousel v-if="imagesGallery.length > 0"
          :show-arrows="false"
          height="400"
        >
          <v-carousel-item
            v-for="(img, index) in imagesGallery"
            :key="index"
            :title="img.title"
            :content="img.license"
            :src="img.link"
            cover
          >
          </v-carousel-item>
        </v-carousel>
      </div>  
    </template>
  

  
  
  <script>
  
  export default {
      name: 'image-gallery',
      props:['column', 'modelValue', 'imgtitle'],
      emits: ['update:modelValue'],
      components: {
  
      },
      data(){
      return {
      v: this.modelValue,
      showimagedialog: false, 
      overlay: false,
      imgsrc: '',
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
            images[i].link="https://isling.org/image/data?image="+images[i].link;
          }
  console.log(images);
          return images;
          
        } else {
          return "undefined"; // end of checking
        }
          
      },

    } 
  }
  </script>
  