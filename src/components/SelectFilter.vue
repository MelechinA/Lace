<template>
  <!-- <v-select
    :items="options"
    :item-title="title"
    :item-value="value"
    :label="column.title"
    variant="outlined"
    v-model="cvalue"
    class="mb-1"
    hide-details="auto"
    @update:modelValue="handleInput"
  >
  </v-select>
 <v-btn
    class="mb-1 mr-1"
    append-icon="mdi-close-circle"
    variant="flat"
    color="regular"
    v-for="(f, index) in v" :key="index"
    @click="deleteItem(index)"
  >
  {{f}}
  </v-btn>  -->
<!-- 
2. сохранить Мультивыбор!!!!
-->
<!--
:items="options" это массив объектов который создается в Дата и выгядит типа: :items='[{"value": "1", "title": "none"}, {"value": "2", "title": "sp."}]'
-->
<v-select
variant="outlined"
v-model="select"
    :items="options"
    item-title="title"
    item-value="value"
    :label=this.column.title 
    return-object
    @update:modelValue="handleInput"
    hide-details="auto"
    class="mb-1"
></v-select>
 
</template>

<script>
export default {
  name: 'select-filter',
  props:['column','modelValue'],
  emits: ['update:modelValue', 'filterupdate'],
  data(){
    let options=[];
//    console.log(typeof this.column.widget.properties.options);
    let list=this.column.widget.properties.options.split(';')
    list.map(function (value){
        let val=value.split(':');
        let item={"value":val[0], "title": val[1]}
        options.push(item);
    })
    return {
      v: this.modelValue,
      options: options,
      cvalue: null,
      select: { title: 'All', value: '' },
    } 
  },   
  methods:{
    // handleInput(cvalue){
    //   this.v.push(cvalue); 
         handleInput(){
 //         this.cvalue = this.select.value;
 //this.v.push(this.select.value); 
       this.v = this.select.value; 
  //    this.select = { title: 'All', value: '' }; 
 //     this.$emit('update:modelValue', this.v.join(';'));
      this.$emit('update:modelValue', this.v);
      this.$emit('filterupdate');
    },
    deleteItem(index) {
      this.v.splice(index, 1);
      this.$emit('update:modelValue', this.v.join(';'));
      this.$emit('filterupdate');
    },
  },
}
</script>