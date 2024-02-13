<template>
    <template v-if="mode === 'table'">
        {{v}}
    </template>
    <template v-else-if="mode === 'edit'">
        <div class="field">
            <label class="label">{{column.title}}</label>
            <div class="control">
                <v-text-field :label=column.title variant="outlined" type="Number" v-model="v"  @input="handleInput"></v-text-field>
            </div>
        </div>
        
    </template>
    <template v-else>
        {{v}}
    </template>
    
</template>

<script>
export default {
    name: 'number-widget',
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
