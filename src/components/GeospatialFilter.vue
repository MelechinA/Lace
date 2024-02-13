<template> {{ meta }}





    <v-text-field 
    class="mb-1"
    hide-details="auto"
    :label=this.column.title 
    @keyup.enter="handleInput" 
    v-model = "cvalue" 
    variant="outlined">
        <v-btn
            class="my-b mr-1"
            append-icon="mdi-close-circle"
            variant="flat"
            color="regular"
            v-for="(f, index) in v" :key="index"
            @click="deleteItem(index)"
        >
        {{f}}
        </v-btn>
    </v-text-field> 
</template>

<script>
export default {
    name: 'GeospatialFilter',
    props:['column', 'modelValue'],
    emits: ['update:modelValue', 'filterupdate'],
    data(){ 
        return {
            v: [],
            cvalue: "",
        }
    },
    methods:{
        handleInput(e) {     
            this.v.push(e.target.value); 
//console.log(this.cvalue);
            this.cvalue = ""; 
//console.log(this.cvalue);        
            this.$emit('update:modelValue', this.v.join(';'));
console.log(this.v); 
            this.$emit('filterupdate');
console.log(this.v);
        },

        deleteItem(index) {
            this.v.splice(index, 1);
            this.$emit('update:modelValue', this.v.join(';'));
            this.$emit('filterupdate');
        },
    },

}
</script>