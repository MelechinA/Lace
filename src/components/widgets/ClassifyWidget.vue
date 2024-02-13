<template>
    <template v-if="mode === 'table'">
        <p v-if="lengthrow!==undefined">{{v}}</p>
        <p v-else class="text-truncate" style="max-width: 300px;">
            {{v}} 
        <!--{{ modelValue }}
            //        @click="$router.push(link)" target="_blank" // один из вариантов решения ссылок а страницу Вида или образца и т.п.
                    @click="$router.push(199+'/'+rowobject.link_to_specimen.id)" target="_blank"
            v-overlay
  activator="parent"
  location-strategy="connected"
  scroll-strategy="reposition"
>
<v-card class="pa-2">{{v}}</v-card>
</v-overlay-->
  </p>
    </template>
    <template v-else-if="mode === 'edit'">
        <div class="field">
            <label class="label">{{column.title}}</label>
            <div class="control">
                <input class="input" type="text" v-model="v"  @input="handleInput">
            </div>
        </div>        
    </template>
    <template v-else>
        {{v}}
    </template>
    
</template>

<script>
export default {
    name: 'classify-widget',
    props:['mode','column', 'modelValue','rowobject', 'lengthrow'], // искать отметку в column
    emits: ['update:modelValue'],
    data(){
//    console.log(this.modelValue)

        let s=''; 
        let ids = '';
        if(typeof this.modelValue =='object' && this.modelValue.linkid) {
            s=this.modelValue.linkid;
            ids = this.modelValue.id;
        }
        else if (typeof this.modelValue =='object' && this.modelValue.name) {
            s=this.modelValue.name;
            ids = this.modelValue.id;
        }

        else
            s=this.modelValue.id;
        return {
            v: s,
            vid: ids,
//            link: 199+'/'+this.rowobject.link_to_specimen.id,
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
