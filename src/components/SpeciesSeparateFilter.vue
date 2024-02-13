<template>
  <v-autocomplete
  hide-no-data
  variant="outlined"
  class="mb-1"
  hide-details="auto"
      :items="options"
      :item-title="title"
      :item-value="value" 
      :label="this.column.title"
          v-model:search="search"
          v-model = "searchvalue"
          @update:modelValue="handleInput" 
          @keydown.enter ="clearInput"
      >
  </v-autocomplete>
  
      <v-btn
          class="mb-1 mr-1"
          append-icon="mdi-close-circle"
          variant="flat"
          color="regular"
          v-for="(title, index) in buttonvalue" :key="index"
          @click="deleteItem(key)"
      >
          {{title}}
      </v-btn>
  
  </template>
  
  
  <script>
  import axios from 'axios';
  export default {
      name: 'ClassifyFilter',
      props:['column', 'modelValue'],
      emits: ['update:modelValue', 'filterupdate'],
      data(){
  
          return {
              v: this.modelValue,
              buttonvalue: [],
              options: [],
              searchvalue: undefined,
              search: '',
              labelmessage: "Type more than 3 symbols, please",
  ro: '',
          }
                      
      },
  
  
      methods:{
  
          getLookupData(){
              let dataset_uri = 'https://isling.org:8000/dataset/list?f='+this.column.widget.properties.dataset_id;
              let filtervalue = '&f_'+this.column.widget.properties.db_field+'='+this.searchvalue;
              axios
                  .post(dataset_uri+'&count_rows=true&iDisplayStart='+0+'&iDisplayLength='+10+filtervalue)
                  .then((response) => {
                      let rows = response.data.aaData;
                      let rowsoptions=[];
  if (this.column.title == 'Species') {
                          rows.forEach(function(item) {
                              let rowsitem={};
                              if(item.refmainsynonym.id != null){
                                  rowsitem={"value":item.refmainsynonym.id, "title": item.name}
                              }
                              else {
                                  rowsitem={"value":item.id, "title": item.name}
                              }
                              rowsoptions.push(rowsitem);
                          });
                      }
                      else {
                          rows.forEach(function(item) {
                              let rowsitem={};
                                  rowsitem={"value":item.id, "title": item.name}
                              rowsoptions.push(rowsitem);
                          });
                      }
                          this.options = rowsoptions;
                      })
                  .catch(error => console.log(error));
          },
  
      handleInput(cvalue){
          console.log(cvalue);
        this.v.push(cvalue); 
        this.$emit('update:modelValue', this.v.join(';'));
        this.$emit('filterupdate');
        // this code ($nextTick) clears the field of entered value
          this.$nextTick(() => { // Oh - thank you stranger!!!:  [ https://stackoverflow.com/questions/51670250/clear-v-autocomplete-as-soon-as-a-value-has-been-selected/51670955#51670955 ]
          this.buttonvalue.push(this.search); //set value of button (for possibility of see the changed values)
          this.search = ''; 
          })
      },
  
      clearInput(){
          this.options = [];
      },
  
  
  
      deleteItem(index) {
        this.v.splice(index, 1);
        this.$emit('update:modelValue', this.v.join(';'));
        this.$emit('filterupdate');
        this.buttonvalue.splice(index, 1);
  
      },
  
      deleteAll() {
        this.v = [];
        this.buttonvalue = [];
        this.$emit('update:modelValue');
        this.$emit('filterupdate');
  
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
      }
      
  
  }
  </script>