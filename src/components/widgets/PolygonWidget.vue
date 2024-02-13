<template>
    <template v-if="mode === 'table'">
        {{v}}
    </template>
    <template v-else-if="mode === 'edit'">
        <textarea class="input" type="text" v-model="v" @input="handleInput"  placeholder="Введите текст"></textarea>
    </template>
    <template v-else>
        {{v}}
    </template>
    
</template>

<script>
//@input="handleInput" 
export default {
    name: 'polygon-widget',
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
