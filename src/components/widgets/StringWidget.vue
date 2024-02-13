<template>
    <template v-if="mode === 'table'">
        <p v-if="lengthrow!==undefined">{{v}}</p>
        <p class="text-truncate" style="max-width: 300px;">{{v}}
            

<!--v-overlay
  activator="parent"
  location-strategy="connected"
  scroll-strategy="reposition"
>
<v-card class="pa-2">{{v}}</v-card>
</v-overlay-->
  </p>

</template>
    <template v-else-if="mode === 'edit'">
        <!--div class="field">
            <label class="label">{{column.title}}</label>
            
            <div class="control">
                <input class="input" type="text" placeholder="Text input" v-model="v"  @input="handleInput">
            </div>
        </div-->
<v-text-field :label=column.title variant="outlined" v-model="v"  @input="handleInput"></v-text-field>
        
    </template>
    <template v-else>
        {{v}}
    </template>
    
</template>

<script>
export default {
    name: 'string-widget',
    props:['mode','column', 'modelValue','lengthrow'],
    emits: ['update:modelValue'],
    data(){ 
        return {
            v: this.modelValue,
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