<template>
    <template v-if="mode === 'table'">
    {{formatDate(v)}}
    </template>
    <template v-else-if="mode === 'view'">
    {{formatDate(v)}}
    </template>
    <template v-else-if="mode === 'edit'">
        <!--input class="input" type="datetime-local" v-model="v"  @input="handleInput"-->
        <input class="input" type="date" v-model="v"  @input="handleInput">
    </template>
    <template v-else>
        {{v}}
    </template>
    
</template>

<script>
    export default {
        name: 'date-widget',
        props:['mode','column', 'modelValue'],
        emits: ['update:modelValue'],
        data(){ 
            return {
                v: this.modelValue,
            }
        },   
        methods:{
            formatDate(v) {
                const date = new Date(v);
                if (!isNaN(date)) {
                return new Intl.DateTimeFormat('ru-RU', {dateStyle: 'short'}).format(date);
                }
                else {
                return "no date";    
                }
            },
            handleInput (e) {            
                this.v = e.target.value;            
                this.$emit('update:modelValue', this.v);
            },
        },
    }
</script>

