<template>
    <!--как тут правильно сделать я пока непноимаю-->
    <!--ветвимся по типу данных - для видов и для образцов получаем роут по разному-->
 <!--  198 и 200 - это иды корневых таблиц (для видов и оразцов) специфичные для групп -->
    <template v-if="mode === 'table'">
 <!-- <v-btn v-if="meta.dataset_id === 198"
 variant="outlined"
 @click="$router.push(199+'/'+rowobject.link_to_specimen.id)" target="_blank"
 > {{v}} 
</v-btn> -->
<v-btn v-if="meta.dataset_id === 198"
 variant="outlined"
 :href="'https://islingdev.surge.sh/lichens/table/199/'+rowobject.link_to_specimen.id" target="_blank"
 > {{v}} 
</v-btn>
<!--по прямой ссылке - работает безотказно, но это говнокод (?). Можно конечно основную часть пути получать через стор - тогда менее говнокод
по роуту - не работает если путь нестандартный (например при переходе из страницы таксона)
-->


<!--lichens  https://islingdev.surge.sh/lichens/table/199/-->
<!--из таблицы видов - материал показываем по стандартной корневой таблице образцов данной группы-->
<v-btn v-else-if ="meta.dataset_id === 262"
 variant="outlined"
 @click="$router.push(261+'/'+rowobject.link_to_specimen.id)" target="_blank"
 > {{v}} 
</v-btn><!--cyano-->
<v-btn v-else-if ="meta.dataset_id === 230"
 variant="outlined"
 @click="$router.push(229+'/'+rowobject.link_to_specimen.id)" target="_blank"
 > {{v}} 
</v-btn><!--bryophytes-->

<v-btn v-else-if ="meta.dataset_id === 257"
 variant="outlined"
 @click="$router.push(256+'/'+rowobject.link_to_specimen.id)" target="_blank"
 > {{v}} 
</v-btn><!--fungi-->

<v-btn v-else-if ="meta.dataset_id === 221"
 variant="outlined"
 @click="$router.push(220+'/'+rowobject.link_to_specimen.id)" target="_blank"
 > {{v}} 
</v-btn><!--vascular-->

<v-btn v-else
variant="outlined"
 @click="$router.push(meta.dataset_id+'/'+rowobject.id)"
 > {{v}} 
</v-btn>
    </template>
    
    <template v-else-if="mode === 'edit'">
        {{column.title}}{{ v }}
        <!-- <div class="field">
            <label class="label">{{column.title}}</label>
            <div class="control">
                <input class="input" type="text" v-model="v"  @input="handleInput">
            </div>
        </div> -->
        
    </template>
    <template v-else>
        {{v}}
    </template>
    
</template>

<!--{{row.link_to_specimen.id}}

rowobject.link_to_specimen.id //material id
@click="$router.push(rowobject.ref_classname_147o+'/'+rowobject.link_to_specimen.id)"
 @click="$router.push(rowobject.classname+'/'+rowobject.id)"


rowobject.ref_classname_147o // table id


-->

<script>
export default {
    name: 'objectview-widget',
    props:['mode','column', 'modelValue', 'rowobject', 'meta'],
    emits: ['update:modelValue'],
    data(){ 
//    console.log(this.modelValue)
//    console.log(this.column)
        return {
            v: this.modelValue,

            routename: '',
        }
    },
    methods:{ 
        handleInput (e) {            
           this.v = e.target.value;            
           this.$emit('update:modelValue', this.v)
        },
       // getMaterialName () {
            /*
            let routename = $route.name;
            if (routename=='lichenstables')  { this.materialname = 'lichensdatamaterial';}
            else {
                this.materialname = 'lichensdatamaterial';
                 }
                 */
          //       this.materialname = 'lichensdatamaterial';
          //       console.log(materialname);
            
       // },
       /*
        writeStoreTid(){
            this.$store.commit('getTableIdTo', this.meta.dataset_id); // криво?
        },
*/
    },
}
</script>
