<template>
    <template v-if="mode === 'table'">
        {{v}}
    </template>
    <template v-else-if="mode === 'edit'">
        {{v}}
    </template>
    <template v-else>
        {{v}}
    </template>
    
</template>

<script>
export default {
    name: 'readonly-widget',
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