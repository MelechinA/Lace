<template>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          class="mb-1 mr-1"
          variant="flat"
          color="regular"
          v-bind="props"
        >
        <v-icon icon="mdi mdi-vector-polygon" /> <span class="d-none d-sm-none d-md-flex"> Fixed area </span>-<v-icon icon="mdi-filter"></v-icon>
        </v-btn>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item>
            <v-list-item-title>Filter by:</v-list-item-title>

            <v-autocomplete
              hide-no-data
              variant="outlined"
              class="mb-1"
              hide-details="auto"
                  :items="options"
                  :item-title="title"
                  :item-value="value" 
                  label="Region (still to RF only)"
                      v-model:search="search"
                      v-model = "searchvalue"
                      @update:modelValue="regionFilter" 
                      @keydown.enter ="clearInput"
                  >
            </v-autocomplete>

          </v-list-item>
        </v-list>

        </v-card>
      </v-menu>

    <v-btn
    class="mb-1 mr-1"
            append-icon="mdi-close-circle"
            variant="flat"
            color="vs"
        v-for="(title, index) in buttonvalue" :key="index"
        @click="deleteItem(key)"
    >
        {{title}}
    </v-btn>

</template>

<script>
import axios from 'axios';
export default {
    name: 'GeoAerialFilter',
    props:['column', 'modelValue', 'meta'],
    emits: ['update:modelValue', 'filterupdate'],

    data(){ 
        return {
            menu: false,
            rv: [],
            v: this.modelValue,
            buttonvalue: [],
            options: [],
            searchvalue: undefined,
            search: '',
            labelmessage: "Type more than 3 symbols, please",
regiontableid: null,
geotableid: 2171,
regionfieldname: 'name_lat',


        }
    },
    methods:{
getLookupData(){
//            let dataset_uri = 'https://isling.org:8000/dataset/list?f='+this.geotableid; // test v
            let dataset_uri = 'https://isling.org/dataset/list?f='+this.geotableid;
            let filtervalue = '&f_'+this.regionfieldname+'='+this.searchvalue;
//console.log(dataset_uri, filtervalue);
            // let dataset_uri = 'https://isling.org:8000/dataset/list?f='+this.column.widget.properties.dataset_id;
            // let filtervalue = '&f_'+this.column.widget.properties.db_field+'='+this.searchvalue;

            axios
                .post(dataset_uri+'&count_rows=true&iDisplayStart='+0+'&iDisplayLength='+5+filtervalue)
                .then((response) => {
                    let rows = response.data.aaData;
//console.log(rows);
                    let rowsoptions=[];

                        rows.forEach(function(item) {
                            let rowsitem={};
                                rowsitem={"value":item.id, "title": item.name_lat}
                            rowsoptions.push(rowsitem);
                        });
                        this.options = rowsoptions;
                    })
                .catch(error => console.log(error));
        },

regionFilter(regionvalue){
  this.regiontableid = regionvalue.value;
//console.log(this.regiontableid);
      this.rv.push("geotable:"+this.geotableid+":"+regionvalue.value+":geom"); 
      this.regiontableid =null;
      this.$emit('update:modelValue', this.rv.join(';'));
      this.$emit('filterupdate');
//console.log(this.rv);
        this.$nextTick(() => { 
        this.buttonvalue.push(this.search); 
        this.search = ''; 
        });
        this.menu = false;
    },


        deleteItem(index) {

            this.rv.splice(index, 1);
            this.$emit('update:modelValue', this.rv.join(';'));
            this.$emit('filterupdate');
            this.buttonvalue.splice(index, 1);
        },


    clearInput(){
        this.options = [];
    },


    },

    watch: {
        search() {
        if (this.search.length > 3) {
          this.labelmessage = "";
          this.searchvalue = this.search;
          this.getLookupData();
          this.searchvalue = undefined;
        }
      },
    }, 
    
    computed: {
        value: {
            get() {
                if (this.initValue)
                    return this.initValue
                else
                    return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    },



}
</script>