<template>
    <div v-if="valuedetails && valuedetails.length > 0"> 
      <template v-if="mode === 'table'">
      
        <v-btn 
        variant="tonal" 
        @click="detailsoverlay = !detailsoverlay"
        >
        {{ valuedetails.length }} <v-icon icon="mdi-chevron-down"></v-icon>

        </v-btn>

        <v-overlay
          v-model="detailsoverlay"
          class="align-center justify-center"
          scroll-strategy="block"
          max-width="1200"
        >
        <v-card>
       
        <v-card-text class="bg-white text-h5">

      <v-table>
      <thead>
        <tr>
          <th v-for="col in metadetails.columns" v-bind:key="col"> {{col.title}} </th>
        </tr> 
      </thead>
      <tbody>
        <tr v-for="row in valuedetails"  :key="row.id">
          <td v-for="col in metadetails.columns" v-bind:key="col">
    <base-geo-cell v-bind="{mode:'table',column:col, initValue:row[col.fieldname], meta:metadetails, rowobject:row}"/>
          </td>
        </tr>
      </tbody>
    </v-table>
        </v-card-text> 
        <div class="px-2">
              <v-card-actions>
                <v-row justify="space-between" class="text-center">
                  <v-col><v-btn
                    class="my-1"
                    variant="flat" 
                    color="regular" 
                    block @click="detailsoverlay = false"
                  >Close</v-btn></v-col>
                  <v-col><v-btn
                    v-if="$store.state.loggedIn"
                    class="my-1"
                    variant="flat" 
                    color="attentionlight"
                    block 
                    @click.stop="$router.push('/contacts'), detailsoverlay = false"
                    >Edit</v-btn></v-col>
                </v-row>
              </v-card-actions>
      </div>

        </v-card>
        </v-overlay>
      </template>


      <template v-else-if="mode === 'view'"> <!--добаить сортировка видов-->
 
      <v-card>
     

        
    <v-table>
    <thead>
      <tr>
        <th v-for="col in metadetails.columns" v-bind:key="col"> {{col.title}} </th>
      </tr> 
    </thead>
    <tbody>
      <tr v-for="row in valuedetails"  :key="row.id">
        <td v-for="col in metadetails.columns" v-bind:key="col">
  <base-geo-cell v-bind="{mode:'table',column:col, initValue:row[col.fieldname], meta:metadetails, rowobject:row}"/>
        </td>
      </tr>
    </tbody>
  </v-table>

      </v-card>

    </template>
      <!--template v-if="mode === 'view'">
  <v-table>
    <thead>
      <tr>
        <th v-for="col in metadetails.columns" v-bind:key="col"> {{col.title}} </th>
      </tr> 
    </thead>
    <tbody>
      <tr v-for="row in valuedetails"  :key="row.id">
        <td v-for="col in metadetails.columns" v-bind:key="col">
  <base-geo-cell v-bind="{mode:'view',column:col, initValue:row[col.fieldname], meta:metadetails, rowobject:row}"/>
        </td>
      </tr>
    </tbody>
  </v-table>
  
  </template-->



    <template v-else-if="mode === 'edit'">

      <v-card>
     
<base-table-tools v-if="$store.state.isAdmin"></base-table-tools> <!-- добавить стрелки вверх-вниз для исправления сортировки-->
        
     <v-table>
     <thead>
       <tr>
         <th v-for="col in metadetails.columns" v-bind:key="col"> {{col.title}} </th>
       </tr> 
     </thead>
     <tbody>
       <tr v-for="row in valuedetails"  :key="row.id" @click="curentRowDetails(row)" @dblclick="editRow(row)" :class="{ 'bg-regularlight' : (row==curentRowDet) }">
        <td v-for="col in metadetails.columns" v-bind:key="col">
   <base-geo-cell v-bind="{mode:'table',column:col, initValue:row[col.fieldname], meta:metadetails, rowobject:row}"/>
        </td>
       </tr>
     </tbody>
   </v-table>
 
       </v-card>

    </template>
    <template v-else>
        {{v}}
    </template> 

</div>
    
</template>

<!--

<v-card class="pa-2">{{row.species.name}}{{row.detname2}}</v-card>

      icon="mdi-chevron-down"

-->

<script>
import BaseTableTools from '@/components/BaseTableTools.vue';
export default {
    name: 'DetailsWidget',
    props:['mode','column', 'modelValue'],
    emits: ['update:modelValue'],
    data(){ 

//  console.log(this.column.widget.properties.dataset_id) // здесь я получаю ИД таблицы детайлса (9401a508-9be3-45ff-8bde-78ab47347a33)
//  console.log(this.column.widget.properties.detailmeta.columns) // здесь я получаю описание структуры детайлса?

    return {
            valuedetails: this.modelValue.rows,
            metadetails: {},
            dialogVisible: false,
            detailsoverlay: false, // value of modal window
//            meta:{columns:[]},
//            rows:[],
//            showdetailsdialog: false,
// this.column.widget.properties.detailmeta
editrow: false,
curentRowDet: {},

        }
    },
    components: {
BaseTableTools,
//
    },


    mounted(){
this.metadetails = this.column.widget.properties.detailmeta;
this.metadetails.columns=this.metadetails.columns.filter(col=> {return col.visible});
// откуда ноги растут здесь? потому что только в моунтеде можно этотпроизевси.

//console.log(this.metadetails)
},




    methods: {

        /*
        clicktooltipMessage(){
          if (this.clicktooltip =='Click to copy') {
          this.clicktooltip = 'Copied';
          }
          else {
            this.clicktooltip = 'Click to copy';
          }
          setTimeout(() => {
        this.clicktooltip = "Click to copy";
      }, 500);

        },
*/

        curentRowDetails(row) {
            this.curentRowDet = row;

        },

        editRow(row) {
            this.curentRowDet = row;
            this.editrow = true;
        },

        /*
    computed:{
    speciesList: function(){
        
        var species=this.modelValue;
       
        for(var i=0; i<species.length; i++){
          species[i]=species[i].name;
        }

        return species;
        
    },

  }
  */ 
    },



  // watch: {
  //   curentRowDetails(newValue) {
  // console.log(newValue) 
  // }
  // },

}

</script>
