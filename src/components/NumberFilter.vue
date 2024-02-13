<template>
    <!-- V:  {{v}} CV:{{ cvalue }} -->
    <v-text-field 
    :label=this.column.title 
    @keyup.enter="handleInput" 
    v-model = "cvalue" 
    variant="outlined" 
    type="Number"
    class="mb-1"
    hide-details="auto"
    append-inner-icon="mdi-filter-plus"
    @click:append-inner="rangefilter = !rangefilter"


    >
    <!--     :prepend-inner-icon="sorticon"
    @click:prepend-inner="dataSort"-->
 </v-text-field>

        <v-btn
            class="my-1 mr-1"
            append-icon="mdi-close-circle"
            variant="flat"
            color="regular"
            v-for="(f, index) in buttonfieldtextdata " :key="index"
            @click="deleteItem(index)"
        >
        {{ f }} 
        </v-btn>

    <v-dialog
        v-model="rangefilter"
        temporary
        width="auto"
    >
        <v-card
            class="rounded-0"

        >
        <v-card-item  class="px-2">
                    <v-text-field class="pt-2" variant="outlined" label="Start" type="Number" v-model = "rangevaluestart"></v-text-field>{{rangevaluestart}}
                    <v-text-field variant="outlined" label="End" type="Number" @keyup.enter="handleRangeInput(), rangefilter = !rangefilter" v-model = "rangevalueend"></v-text-field> {{ rangevalueend }}
            </v-card-item>

            <v-card-actions  class="d-inline">
                <v-btn
                    class="my-1"
                    variant="flat"
                    color="regularlight"
                    @click.stop="rangefilter = !rangefilter">
                    Cancel
                </v-btn>
                <v-btn
                    class="my-1"
                    variant="flat"
                    color="regularlight"
                    @click.stop="resetRangeInput">
                    Reset
                </v-btn>
                <v-btn
                    class="my-1"
                    variant="flat"
                    color="accent"
                    @click="handleRangeInput(), rangefilter = !rangefilter">
                    Select Range
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>





</template>

<script>
export default {
    name: 'NumberFilter',
    props:['column', 'modelValue'],
    emits: ['update:modelValue', 'filterupdate'],
    data(){ 
        return {
            v: [],
            cvalue: null,
            rangefilter: false,
            rangevaluestart: null,
            rangevalueend: null,
            buttonfieldtextdata: [],
            sorticon: "mdi-sort-numeric-variant",
        }
    },
    methods:{
        /*handleInput(e) {     
            this.v.push(e.target.value); // это то что мы засовываем в инпут
            */
            handleInput() {  
            let valuedata = this.cvalue;
            this.buttonfieldtextdata.push(valuedata);   
            this.v.push(valuedata); 
            this.cvalue = null;
            this.$emit('update:modelValue', this.v.join(';'));
            this.$emit('filterupdate');
        },

        handleRangeInput() {  
            let start = this.rangevaluestart;
            let end = this.rangevalueend;
            let range = start+"-PropertyIsGreaterThanOrEqualTo-"+end+"-PropertyIsLessThanOrEqualTo"; 
            this.v.push(range);  
            this.cvalue = null;        
            this.$emit('update:modelValue', this.v.join(';'));
            this.$emit('filterupdate');
            let buttondata = "range:" + start +" - "+ end;
            this.buttonfieldtextdata.push(buttondata);
            this.rangevaluestart = null;
            this.rangevalueend = null;

        },

        resetRangeInput() {  
            this.rangevaluestart = null;
            this.rangevalueend = null;
        },

        deleteItem(index) {
            this.v.splice(index, 1);
            this.$emit('update:modelValue', this.v.join(';'));
            this.$emit('filterupdate');
            this.buttonfieldtextdata.splice(index, 1);
        },


        dataSort() {

     //       this.sorticon = "mdi-sort-numeric-variant";
            this.sorticon =  "mdi-sort-numeric-ascending-variant";
   //         this.sorticon =  "mdi-sort-numeric-descending-variant";



        },
    },

}
</script>