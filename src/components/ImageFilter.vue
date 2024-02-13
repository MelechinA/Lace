<template> 
<v-radio-group inline 
:label="column.title"
@change ="handleInput" 
v-model="v" 
>
  <v-radio label="yes" value="isnotnull"></v-radio>
  <v-radio label="no" value="isnull"></v-radio>
  <v-radio label="all" value=""></v-radio>
  

</v-radio-group>

   
</template>



<script>
export default {
name: 'BooleanWidget',
props:['column', 'modelValue', 'meta'],
emits: ['update:modelValue', 'filterupdate'],
data(){ 
    return {
 //       v: this.modelValue,
 //       v: [],
        v: "",
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