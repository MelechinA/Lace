<template>

    <!-- <v-btn 
    class="d-flex d-sm-none d-none d-sm-flex d-md-none px-2" 
    @click=handleClick
    color="vs"
    icon="mdi-magnify"
    ></v-btn> -->

    <v-text-field 
    class="mb-1"
    hide-details="auto"
    :label=this.column.title 
    @keyup.enter = "handleInput"
    v-model = "cvalue" 
    variant="outlined"

    append-inner-icon = "mdi-magnify"
    @click:append-inner = "handleClick"

    >
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
<!-- @keydown.enter="handleInput" 
    @keyup.enter ="handleInput"
    @keyup.tab ="handleInput"

        append-inner-icon = "mdi-magnify"
    @click:append-inner = "handleInput"
-->
<script>
export default {
    name: 'StringFilter',
    props:['column', 'modelValue'],
    emits: ['update:modelValue', 'filterupdate'],
    data(){ 
        return {
            v: [],
            cvalue: "",
            rules: [
//        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
        }
    },
    methods:{

        handleClick(){
            console.log(this.cvalue);
            this.v.push(this.cvalue); 
            this.cvalue = ""; 
            //console.log(this.cvalue);        
            this.$emit('update:modelValue', this.v.join(';'));
            //console.log(this.v); 
            this.$emit('filterupdate');

        },

        handleInput(e) {     
            this.v.push(e.target.value); 

            this.cvalue = ""; 
//console.log(this.cvalue);        
            this.$emit('update:modelValue', this.v.join(';'));
//console.log(this.v); 
            this.$emit('filterupdate');
//console.log(this.v);
        },

        deleteItem(index) {
            this.v.splice(index, 1);
            this.$emit('update:modelValue', this.v.join(';'));
            this.$emit('filterupdate');
        },

        
    },

}
</script>