<template>
    <template v-if="mode === 'table'">
        <!-- <p class="text-truncate" style="max-width: 300px;">{{v}}
  </p> -->
  <v-btn v-if="v && v!=='null'"
                  class="my-1"
                  variant="text"
                  color="regular"
                  :href=v target="_blank">
        <span class="text-truncate" style="max-width: 100px;">{{ v }}</span>
  </v-btn>


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