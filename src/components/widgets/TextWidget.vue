<template>
    <template v-if="mode === 'table'">
        <p  class="text-truncate" style="max-width: 300px;">{{v}}

      <v-overlay
        activator="parent"
        location-strategy="connected"
        scroll-strategy="reposition"
      >
      <v-card class="pa-2">{{v}}</v-card>
    </v-overlay>
                    <!--v-tooltip
                        activator="parent"
                        location="start"
                        
                    >{{v}}</v-tooltip-->
        </p>
    </template>
    <template v-else-if="mode === 'edit'">
        <v-textarea :label=column.title variant="outlined" v-model="v" @input="handleInput"  placeholder="Input some text" />     
    </template>
    <template v-else>
        {{v}}
    </template>
    
</template>

<script>
//@input="handleInput" 
export default {
    name: 'text-widget',
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