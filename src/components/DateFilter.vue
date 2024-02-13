<template>
    <!-- V:  {{v}} CV:{{ cvalue }} -->
        <!--input class="input" type="datetime-local" v-model="v"  @input="handleInput"-->
        <v-text-field 
            :label=this.column.title type="date"
            @keyup.enter="handleInput" 
            v-model = "cvalue" 
            variant="outlined"
            class="mb-1"
            hide-details="auto"
            
            append-inner-icon="mdi-filter-plus"
            @click:append-inner="rangefilter = !rangefilter"
        >
            

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
                    <v-text-field class="mb-1" variant="outlined" label="From date" type="date" v-model = "rangevaluestart" hide-details="auto"></v-text-field>{{rangevaluestart}}
                    <v-text-field variant="outlined" label="To date" type="date" @keyup.enter="handleRangeInput(), rangefilter = !rangefilter" v-model = "rangevalueend" hide-details="auto"></v-text-field> {{ rangevalueend }}
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
//@input="handleInput" 
export default {
    name: 'date-filter',
    props:['column', 'modelValue'],
    emits: ['update:modelValue', 'filterupdate'],
    data(){ 
        return {
   //         v: this.modelValue,
  //          v: ["2022-10-05 - 2022-10-05"],
  v: [],
            cvalue: null,
            rangefilter: false,
            buttonfieldtextdata: [],
            rangevaluestart: null,
            rangevalueend: null,
            sorticon: "mdi-sort-numeric-variant",
        }
    },   
    methods:{
       /* handleInput (e) {            
           this.v = e.target.value;            
           this.$emit('update:modelValue', this.v)
        },
*/
        handleInput() {
            let valuedata = this.cvalue;
            this.buttonfieldtextdata.push(valuedata);
            let range = valuedata+" - "+valuedata; // valuedata+" - "+valuedata - это беку нужен именно диапазон (дажеесли значение даты одно)
            this.v.push(range); 
            this.cvalue = null;         
            this.$emit('update:modelValue', this.v.join(';'));
            this.$emit('filterupdate');
        },

        handleRangeInput() {  
            let start = this.rangevaluestart;
            let end = this.rangevalueend;
            let range = start+" - "+end; 
            this.v.push(range);  
            this.cvalue = null;        
            this.$emit('update:modelValue', this.v.join(';'));
            this.$emit('filterupdate');
            let buttondata = "range:" + start +" - "+ end;
            this.buttonfieldtextdata.push(buttondata);
            this.rangevaluestart = null;
            this.rangevalueend = null;


        },

        deleteItem(index) {
            this.v.splice(index, 1);
            this.$emit('update:modelValue', this.v.join(';'));
            this.$emit('filterupdate');
            this.buttonfieldtextdata.splice(index, 1);
        },

        formatDate(v) {
            const date = new Date(v);
            if (!isNaN(date)) {
            return new Intl.DateTimeFormat('ru-RU', {dateStyle: 'short'}).format(date);
            }
            else {
            return "no date";    
            }
        },

        resetRangeInput() {  
            this.rangevaluestart = null;
            this.rangevalueend = null;
        },

        dataSort() {

//       this.sorticon = "mdi-sort-numeric-variant";
       this.sorticon =  "mdi-sort-numeric-ascending-variant";
//         this.sorticon =  "mdi-sort-numeric-descending-variant";
        },


    },
}
</script>