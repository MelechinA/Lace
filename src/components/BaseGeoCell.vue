<template>
    <template v-if="column.widget.name === 'edit'">
        <string-widget v-bind="{mode:mode,column:column, lengthrow:lengthrow}" v-model="value"></string-widget>
    </template>
    <template v-else-if="column.widget.name === 'textarea'">
       <text-widget v-bind="{mode:mode,column:column}" v-model="value"></text-widget> 
    </template>
    <template v-else-if="column.widget.name === 'date'">
       <date-widget v-bind="{mode:mode,column:column}" v-model="value" ></date-widget> 
    </template>
    <template v-else-if="column.widget.name === 'polygon'">
       <polygon-widget v-bind="{mode:mode,column:column}" v-model="value" ></polygon-widget> 
    </template>
    <template v-else-if="column.widget.name === 'point'">
       <point-widget v-bind="{mode:mode,column:column}" v-model="value" ></point-widget> 
    </template>
    <template v-else-if="column.widget.name === 'number'">
       <number-widget v-bind="{mode:mode,column:column}" v-model="value" ></number-widget> 
    </template>
    <template v-else-if="column.widget.name === 'boolean'">
       <boolean-widget v-bind="{mode:mode,column:column}" v-model="value" ></boolean-widget> 
    </template>
    <template v-else-if="column.widget.name === 'classify'">
       <!-- <classify-widget v-bind="{mode:mode,column:column}" v-model="value" ></classify-widget>  -->
       <classify-widget v-bind="{mode:mode,column:column,rowobject:rowobject, lengthrow:lengthrow}" v-model="value" ></classify-widget> 
    </template>
    <template v-else-if="column.widget.name === 'readonly'">
       <readonly-widget v-bind="{mode:mode,column:column}" v-model="value" ></readonly-widget> 
    </template>
    <template v-else-if="column.widget.name === 'details'">
       <details-widget v-bind="{mode:mode,column:column}" v-model="value" ></details-widget> 
    </template>
    <template v-else-if="column.widget.name === 'image'">
       <image-widget v-bind="{mode:mode,column:column}" v-model="value" ></image-widget> 
    </template>
    <template v-else-if="column.widget.name === 'objectview'">
       <objectview-widget v-bind="{mode:mode,column:column,meta:meta,rowobject:rowobject}" v-model="value" ></objectview-widget> 
    </template>
    <template v-else-if="column.widget.name === 'select'">
       <select-widget v-bind="{mode:mode,column:column}" v-model="value" ></select-widget> 
    </template>

    <template v-else-if="column.widget.name === 'ref'">
       <reference-widget v-bind="{mode:mode,column:column}" v-model="value" ></reference-widget> 
    </template>
    <template v-else-if="column.widget.name === 'attachment'">
       <file-widget v-bind="{mode:mode,column:column}" v-model="value" ></file-widget> 
    </template>

    <template v-else>
       name= {{column.widget.name}};
    </template>
</template>

<script>
// @changeValue="v = $event"

import StringWidget from '@/components/widgets/StringWidget.vue'
import DateWidget from '@/components/widgets/DateWidget.vue'
import PointWidget from '@/components/widgets/PointWidget.vue'
import NumberWidget from '@/components/widgets/NumberWidget.vue'
import BooleanWidget from '@/components/widgets/BooleanWidget.vue'
import ClassifyWidget from '@/components/widgets/ClassifyWidget.vue'
import ReadonlyWidget from '@/components/widgets/ReadonlyWidget.vue'
import DetailsWidget from '@/components/widgets/DetailsWidget.vue'
import ImageWidget from '@/components/widgets/ImageWidget.vue'
import ObjectviewWidget from '@/components/widgets/ObjectviewWidget.vue'
import SelectWidget from '@/components/widgets/SelectWidget.vue'
import TextWidget from '@/components/widgets/TextWidget.vue'
import PolygonWidget from '@/components/widgets/PolygonWidget.vue'
import ReferenceWidget from '@/components/widgets/ReferenceWidget.vue'
import FileWidget from '@/components/widgets/FileWidget.vue'

export default {
    name: 'base-geo-cell',
    props:['mode','column', 'modelValue', 'initValue', 'meta', 'rowobject', 'lengthrow'],
    components: {
  
        StringWidget,
        TextWidget,
        PolygonWidget,
        DateWidget,
        PointWidget,
        NumberWidget,
        BooleanWidget,
        ClassifyWidget,
        ReadonlyWidget,
        DetailsWidget,
        ImageWidget,
        ObjectviewWidget,
        SelectWidget,
        ReferenceWidget,
        FileWidget,
  
  },
    emits: ['update:modelValue'],    
    
    computed: {
        value: {
            get() {
                if (this.initValue)
                    return this.initValue
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
