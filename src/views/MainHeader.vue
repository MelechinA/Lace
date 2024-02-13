<template>
<!-- <v-card class="rounded-0 px-1" color="red">
<v-card-text>
        This is a testing version only
        <v-btn href="https://isling.org:8000/" target="_blank" variant="outlined"> Production HERE </v-btn>
</v-card-text>
</v-card> -->


    <v-tabs
      v-model="tableDescription"
      class="d-none d-sm-none d-md-flex"
    >
<v-tab :value="homel" @click="$router.push('/')">
<span class="text-regular">L</span><span class="text-attention px-0">.</span>home
</v-tab>
<v-tab value="about" @click="$router.push('/about')">About </v-tab>
<v-tab value="helpl" @click="$router.push('/help')">Help </v-tab>
<v-tab value="rights" @click="$router.push('/rights')">Rights </v-tab>

<v-tab 
  value="species_main"
  @click="getAllMeta"
>
Species
<v-menu activator="parent">
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      @click="$router.push('/table/'+item.idlink)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</v-tab>

<v-tab 
  value="specimen_main"
  @click="getAllMeta"
>
Specimens
<v-menu activator="parent">
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      @click="$router.push('/table/'+item.idlink)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</v-tab>

<v-tab 
  value="allspecies"
  @click="getAllMeta"
>
Service tables
<v-menu activator="parent">
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      @click="$router.push('/table/'+item.idlink)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</v-tab>


<!-- <v-tab value="specimen_others">
      Others
      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            @click="$router.push('/table/'+item.idlink)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
</v-tab>
<v-tab value="taxonomy">
Taxonomy
<v-menu activator="parent">
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      @click="$router.push('/table/'+item.idlink)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</v-tab>
<v-tab value="projects">
Projects
<v-menu activator="parent">
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      @click="$router.push('/table/'+item.idlink)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</v-tab> -->
<v-tab value="contacts" @click="$router.push('/contacts/')">Contacts</v-tab>
<!-- <v-tab value="login" @click="$router.push('/login')">Login</v-tab>
<v-tab value="service" @click="$router.push('/service')">Service </v-tab> -->
</v-tabs>
 
<!--mobile version of menu-->
<div>
<v-btn
      color="regular"
      variant="text"
      @click.stop="drawer = !drawer"
      class="d-flex d-sm-none d-none d-sm-flex d-md-none px-2"
    >
      <strong>Menu</strong> <v-icon icon="mdi-dots-vertical"></v-icon>
</v-btn>
</div>
    <v-navigation-drawer
        v-model="drawer"
        temporary
    >
        <v-tabs
          direction="vertical"
          v-model="tableDescription"
        >
          <v-list >
            <v-tab value="homel" @click="drawer = !drawer, $router.push('/')">
            <span class="text-regular">L</span><span class="text-accent px-0">.</span>home
            </v-tab>
            <v-tab value="about" @click="drawer = !drawer, $router.push('/about')">About </v-tab>
            <v-tab value="helpl" @click="drawer = !drawer, $router.push('/help')">Help </v-tab>
            <v-tab value="rights" @click="drawer = !drawer, $router.push('/rights')">Rights </v-tab>
            
            
            <v-tab 
              value="species_main"
              @click="getAllMeta"
            >
            Species
            <v-menu activator="parent" location=center>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push('/table/'+item.idlink), drawer = !drawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-tab>

            <v-tab 
              value="specimen_main"
              @click="getAllMeta"
            >
            Specimens
            <v-menu activator="parent" location=center>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push('/table/'+item.idlink), drawer = !drawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-tab>

            <!-- <v-tab 
              value="specimen_others"
              @click="getAllMeta"
            >
            Others
            <v-menu activator="parent" location=center>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push('/table/'+item.idlink), drawer = !drawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-tab>

            <v-tab 
              value="taxonomy"
              @click="getAllMeta"
            >
            Taxonomy
            <v-menu activator="parent" location=center>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push('/table/'+item.idlink), drawer = !drawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-tab> -->

            <!-- <v-tab 
              value="projects"
              @click="getAllMeta"
            >
            Projects
            <v-menu activator="parent" location=center>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push('/table/'+item.idlink), drawer = !drawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-tab> -->

            <v-tab value="contact" @click.stop="$router.push('/contacts'), drawer = !drawer">Contact</v-tab>
            <!--v-tab value="login" @click.stop="$router.push('/login'), drawer = !drawer">Login</!--v-tab>
            <v-tab-- value="service" @click.stop="$router.push('/service'), drawer = !drawer">Service </v-tab-->
            <!--vuex'ом засунуть вместо "Login" динамику (показывать имя юзера с возможностью выхода или Анон+Логин - если анонимус)-->

          </v-list>  
        </v-tabs>
    </v-navigation-drawer>

<!--end mobile version of menu-->

</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MainHeader',
  data: () => ({
    drawer: false,
    tableDescription: null,
    allTableStructurLink: 'https://isling.org/dataset/list?f=100&f_description=',
    items: [],

  }),
/*               Т.к. именно здесь формируются линки, то я должен здесь получать список возможных линков и их имен (чтобы заменить искуственный массив items) (ну потом можно это куда-то пренести, но суть надо отрабоать здесь).
               Чтобы получить массив со списком этих вот - aaData.id, aaData.title, aaData.name - я должен получить structure  без привязки к ID 
               - те. получить вообще всю "структуру структур"

        ?????       
*/

    computed: {
        getAllMeta(){
          this.items = []; //claer items before create new items massif.
            axios.get(this.allTableStructurLink+this.tableDescription).then((response) => {  // tab - provide of description value
              let itemsarray = response.data.aaData;
                for (let i = 0; i < itemsarray.length; i++) {
                  this.items.push({ title: itemsarray[i].name, idlink: itemsarray[i].id, descriptiontype: itemsarray[i].description });
//console.log(this.items);
                  }
            });
        },
    },

});
</script>