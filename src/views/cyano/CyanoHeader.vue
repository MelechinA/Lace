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
<v-tab :value="cyanohome" @click="$router.push('/cyano/')">
<span class="text-regular">Cyano </span> home
</v-tab>
<!--v-btn value="lhome" @click="$router.push('/lichens/')" :color="isSelected ? 'regular' : undefined">
<span class="text-regular">Lichens </span> home
</v-btn-->

<v-tab 
  value="cyan_species_main"
  @click="getAllMeta"
>
Species
<v-menu activator="parent">
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      @click="$router.push('/cyano/table/'+item.idlink)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</v-tab>

<v-tab 
  value="cyan_specimen_main"
  @click="getAllMeta"
>
Specimens
<v-menu activator="parent">
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      @click="$router.push('/cyano/table/'+item.idlink)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</v-tab>
<v-tab 
  value="molecules_cyano"
  @click="getAllMeta"
>
Molecules
<v-menu activator="parent">
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      @click="$router.push('/cyano/table/'+item.idlink)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</v-tab>
<!-- <v-tab value="cyan_specimen_others">
      Others
      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            @click="$router.push('/cyano/table/'+item.idlink)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
</v-tab>
<v-tab value="cyanotaxonomy">
Taxonomy
<v-menu activator="parent">
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      @click="$router.push('/cyano/table/'+item.idlink)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</v-tab> -->
<!--v-tab value="lichenproject?">
Projects
<v-menu activator="parent">
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :value="index"
      @click="$router.push('/lichens/table/'+item.idlink)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</v-tab-->
<v-tab value="contact" @click="$router.push('/contacts/')">Contacts</v-tab>
<!-- <v-tab value="login" @click="$router.push('/login')">Login</v-tab> -->
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
            <v-tab class="px-2" @click.stop="drawer = !drawer" value="cyanohome" @click="$router.push('/cyano/')"><span class="text-regular">Cyano </span><span class="px-0"> home</span> <!--v-icon icon="mdi-home-variant"></v-icon--></v-tab>
            <v-tab 
              value="cyan_species_main"
              @click="getAllMeta"
            >
            Species
            <v-menu activator="parent" location=center>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push('/cyano/table/'+item.idlink), drawer = !drawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-tab>

            <v-tab 
              value="cyan_specimen_main"
              @click="getAllMeta"
            >
            Specimens
            <v-menu activator="parent" location=center>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push('/cyano/table/'+item.idlink), drawer = !drawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-tab>
            <v-tab 
              value="molecules_cyano"
              @click="getAllMeta"
            >
            Molecules
            <v-menu activator="parent" location=center>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push('/cyano/table/'+item.idlink), drawer = !drawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-tab>

            <!-- <v-tab 
              value="cyan_specimen_others"
              @click="getAllMeta"
            >
            Others
            <v-menu activator="parent" location=center>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push('/cyano/table/'+item.idlink), drawer = !drawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-tab>

            <v-tab 
              value="cyanotaxonomy"
              @click="getAllMeta"
            >
            Taxonomy
            <v-menu activator="parent" location=center>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push('/cyano/table/'+item.idlink), drawer = !drawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-tab> -->

            <!--v-tab 
              value="lichenprojects"
              @click="getAllMeta"
            >
            Projects
            <v-menu activator="parent" location=center>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push('/lichens/table/'+item.idlink), drawer = !drawer"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-tab-->

            <v-tab value="contact" @click.stop="$router.push('/contacts'), drawer = !drawer">Contact</v-tab>
            <!--v-tab value="login" @click.stop="$router.push('/login'), drawer = !drawer">Login</!--v-tab-->
            <!--vuex'ом засунуть вместо "Login" динамику (показывать имя юзера с возможностью выхода или Анон+Логин - если анонимус)-->

          </v-list>  
        </v-tabs>
    </v-navigation-drawer>
    <!--v-btn 
      variant="text"
      @click.stop="drawer = !drawer"
      class="d-flex d-sm-none d-none d-sm-flex d-md-none px-2 bg-regular"
    >
      <strong>Menu</strong> <v-icon icon="mdi-dots-vertical"></v-icon>
    </v-btn-->
<!--end mobile version of menu-->

</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CyanoHeader',
  data: () => ({
    drawer: false,
    tableDescription: null,
    allTableStructurLink: 'https://isling.org/dataset/list?f=100&f_description=',
    items: [],

  }),

    computed: {
        getAllMeta(){
          this.items = []; //claer items before create new items massif.
            axios.get(this.allTableStructurLink+this.tableDescription).then((response) => {  // tab - provide of description value
              let itemsarray = response.data.aaData;
                for (let i = 0; i < itemsarray.length; i++) {
                  this.items.push({ title: itemsarray[i].name, idlink: itemsarray[i].id, descriptiontype: itemsarray[i].description });
// console.log(this.items);
                  }
            });
        },
    },

});
</script>