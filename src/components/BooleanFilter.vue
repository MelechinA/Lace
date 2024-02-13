<template>
<v-radio-group inline 
:label="column.title"
@change ="handleInput" 
v-model="v" 
> 

  <v-radio label="yes" value="true"></v-radio>
  <v-radio label="no" value="false"></v-radio>
  <v-radio label="all" value=""></v-radio>
  

</v-radio-group>

   
</template>



<script>
export default {
name: 'BooleanWidget',
props:['column', 'modelValue'],
emits: ['update:modelValue', 'filterupdate'],
data(){ 
    return {
 //       v: this.modelValue,
        v: [],
  //      model: 'no',
    }
},   
methods:{
    handleInput (e) {            
       this.v = e.target.value;            
       this.$emit('update:modelValue', this.v);
       this.$emit('filterupdate');
    }
},
}
</script>