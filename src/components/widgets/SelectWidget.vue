<template>
    <template v-if="mode === 'table'">
        <!-- <div v-for="titloption in options" >
        {{ titloption[v] }} -->

            <!-- {{options[v].title}} --><!--это источник проблем если значение пустое - непонятно что делать-->

{{ v }}


        <!-- <p  class="overflow-hidden" style="white-space:nowrap; width: 200px">
            {{options[v]}}
        </p> -->
            <!--v-overlay
            activator="parent"
            location-strategy="connected"
            scroll-strategy="reposition"
            >
            <v-card class="pa-2">{{options[v]}}</v-card>
            </v-overlay-->

    </template>
    
    <template v-else-if="mode === 'edit'">


                <v-select
                variant="outlined"
                v-model="select"
                    :items="options"
                    item-title="title"
                    item-value="value"
                    label="Select"
                    return-object
                    @update:modelValue="handleInput"
                    hide-details="auto"
                    class="mb-1"
                ></v-select>


          <!--select v-model="selected">
    <option v-for="option in options" :key="option.id" :value="option.value">
      {{ option.text }}
    </option>
  </select-->
  
    </template>
    <template v-else>
        {{v}}
    </template>
    
</template>

<script>
export default {
    name: 'select-widget',
    props:['mode','column','modelValue'],
    emits: ['update:modelValue'],
    data(){

//        console.log(this.column.widget.properties.options)
let options=[{}];

let list=this.column.widget.properties.options.split(';')
    list.map(function (value){
        let val=value.split(':');
        let item={"value":val[0], "title": val[1]}
        options.push(item);

        // let list=this.column.widget.properties.options.split(';')
        // list.map(function (value){
        //     let val=value.split(':');
        //     options[val[0]]=val[1];
        })
        
        return {
        //    v: this.modelValue,
        //    options: options,

           v: this.modelValue,
      options: options,
      cvalue: null,
      select: { title: 'All', value: '' },
        } 
    },   
    methods:{
        // handleInput (e) {            
        //    this.v = e.target.value;
        handleInput () {  
        this.v = this.select.value;           
           this.$emit('update:modelValue', this.v);
        },
    },
}
</script>