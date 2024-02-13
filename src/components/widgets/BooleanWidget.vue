<template>
    <template v-if="mode === 'table'">
        <span>{{ v ? "YES" : "no" }}</span>
    </template>
    <template v-else-if="mode === 'edit'">

        <v-radio-group inline 
:label="column.title"
@change ="handleInput" 
v-model="v" 
> 

  <v-radio label="yes" value="true"></v-radio>
  <v-radio label="no" value="false"></v-radio>
  <v-radio label="all" value=""></v-radio>
  

</v-radio-group>


        <!-- <div class="control">
            <label class="label">{{column.title}}</label>
            <label class="radio">
                <input type="radio" name="answer" v-model="v"  @input="handleInput">
                Yes
            </label>
            <label class="radio">
                <input type="radio" name="answer" v-model="v"  @input="handleInput">
                No
            </label>
        </div> -->
        
    </template>
    <template v-else>
        {{v}}
    </template>
    
</template>

<script>
export default {
    name: 'boolean-widget',
    props:['mode','column', 'modelValue'],
    emits: ['update:modelValue'],
    data(){ 
        return {
            v: this.modelValue
        }
    },   
    methods:{
        handleInput (e) {            
           this.v = e.target.value;            
           this.$emit('update:modelValue', this.v)
        }
    },
}
</script>
