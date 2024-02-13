<template>

    <template v-if="column.widget.name === 'edit'">
        <string-filter v-bind="{column:column}" v-model="value"></string-filter>
    </template>
    <template v-else-if="column.widget.name === 'textarea'">
      <string-filter v-bind="{column:column}" v-model="value"></string-filter> 
    </template>
    <template v-else-if="column.widget.name === 'number'">
       <number-filter v-bind="{column:column}" v-model="value"></number-filter> 
    </template>
    <template v-else-if="column.widget.name === 'date'">
       <date-filter v-bind="{column:column}" v-model="value"></date-filter> 
    </template>
    <!--template v-else-if="column.widget.name === 'polygon'">
       <geospatial-filter v-bind="{column:column, meta:meta}" v-model="value"></geospatial-filter> 
    </template-->
    <!--template v-else-if="column.widget.name === 'point'">
       <geospatial-filter v-bind="{column:column, meta:meta}" v-model="value"></geospatial-filter> 
    </template-->

    <template v-else-if="column.widget.name === 'boolean'">
       <boolean-filter v-bind="{column:column}" v-model="value"></boolean-filter> 
    </template>
    <template v-else-if="column.widget.name === 'classify'">
       <classify-filter v-bind="{column:column}" v-model="value"></classify-filter>
    </template>
    <!--template v-else-if="column.widget.name === 'readonly'">
       <default-filter v-bind="{column:column, meta:meta}" v-model="value"></default-filter> 
    </template>
    <template v-else-if="column.widget.name === 'details'">
       <default-filter v-bind="{column:column, meta:meta}" v-model="value"></default-filter> 
    </template-->
    <!--template v-else-if="column.widget.name === 'image'">
       <default-filter v-bind="{column:column, meta:meta}" v-model="value"></default-filter> 
    </template--><!--like boolean-->
    <template v-else-if="column.widget.name === 'objectview'">
         <number-filter v-bind="{column:column, meta:meta}" v-model="value"></number-filter>
    </template>
    <template v-else-if="column.widget.name === 'select'">
       <select-filter v-bind="{column:column}" v-model="value"></select-filter> 
    </template>
    <template v-else>
       name= {{column.widget.name}};
    </template>
</template>

<script>
// @changeValue="v = $event"

import StringFilter from '@/components/StringFilter.vue'
import DateFilter from '@/components/DateFilter.vue'
//import GeospatialFilter from '@/components/GeospatialFilter.vue'
import NumberFilter from '@/components/NumberFilter.vue'
import BooleanFilter from '@/components/BooleanFilter.vue'
import ClassifyFilter from '@/components/ClassifyFilter.vue'
//import ReadonlyFilter from '@/components/ReadonlyFilter.vue'
//import DetailsFilter from '@/components/DetailsFilter.vue'
//import ImageFilter from '@/components/ImageFilter.vue'
import SelectFilter from '@/components/SelectFilter.vue'
import DefaultFilter from '@/components/DefaultFilter.vue'



export default {
    name: 'BaseFilter',
    props:['column', 'modelValue', 'meta'],
    emits: ['update:modelValue', 'filterupdate'],
//    props:['mode', 'column', 'modelValue', 'initValue', 'meta', 'rowobject'],
    components: {
  
        StringFilter,
//        GeospatialFilter,
        DateFilter,
        NumberFilter,
        BooleanFilter,
        ClassifyFilter,
//      ReadonlyFilter,
//        DetailsFilter,
//        ImageFilter,
        SelectFilter,
        DefaultFilter,
      },
  
  emits: ['update:modelValue'], 
    
    computed: {
        value: {
            get() {
                if (this.initValue)
                    return this.initValue // ? - откуда он берется ? 
                else
                    return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
    
}


</script>
