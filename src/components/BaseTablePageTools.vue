<template>
<!--
https://www.npmjs.com/package/vue3-copy
Однако непонятно как скопировать обработанные данные (а не сырые) - как засунуть в строку копирование вот это вот, например (чтобы всю строку копировать):

<div v-for="row in rows" :key="row.id"> 
<div v-for="col in meta.columns" v-bind:key="col">
<base-geo-cell v-bind="{mode:'view', column:col, initValue:row[col.fieldname], meta:meta, rowobject:row}" />
</div>
</div>
-->

<!--v-btn
                  class="my-1 mr-1"
                  variant="flat"
                  color="regularlight"
                  v-copy="`there insert row`"
                  @click="clicktooltipMessage">
                  <v-icon icon="mdi-content-copy"></v-icon> <span class="d-none d-sm-none d-md-flex">Copy</span> 
                  <v-tooltip
                    activator="parent"
                    location="bottom"
                  >{{clicktooltip}}</v-tooltip>
                </v-btn-->
                
        <!--та же проблема  принтом - откуда брать обработанный шаблон для принта и надо ли его вообще для страницы делать?-->        
<!-- <v-dialog
        v-model="dialogprint"
        >
        <template v-slot:activator="{ props }">
            <v-btn
                class="my-1 mr-1" 
                variant="flat"
                color="regularlight"
                v-bind="props"
            >
            <v-icon icon="mdi-printer"></v-icon>  <span class="d-none d-sm-none d-md-flex">Print</span>
            </v-btn>
        </template>
        <v-card class="mx-auto rounded-0">
                <v-card-item class="px-2">
                    <div> -->
                        <!-- можно конечно сразу принтить или дать возможность выбрать вариант - ? -->
                        <!--template v-for="col in meta.columns" :key="col">
                        <geo-cell v-bind="{mode:'edit', column:col, initValue:curentRow[col.fieldname], meta:meta, rowobject:curentRow}"></geo-cell>
                        </template-->

                    <!-- </div>
                </v-card-item>
                <v-card-actions  class="d-inline">
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="regularlight"
                        @click.stop="(dialogprint = !dialogprint)">
                        Cancel
                    </v-btn>
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="accent"
                        @click.stop="(dialogprint = !dialogprint)">
                        Print
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog> -->

<!--end anon tools-->

<!--tools-->
    <div class="d-inline">
        <!--div v-if="$store.state.loggedIn" class="d-inline"-->

        <v-dialog
        v-model="dialogcopy"
        >
        <template v-slot:activator="{ props }">
            <v-btn
                class="my-1 mr-1" 
                variant="flat"
                color="accent"
                v-bind="props"
            >
            <v-icon icon="mdi-content-duplicate"></v-icon> <span class="d-none d-sm-none d-md-flex">Clone</span>
            </v-btn>
        </template>
        <v-card class="mx-auto rounded-0">
            <v-card-item class="px-2">
                <v-row no-gutters d-inline>
                    <v-col
                        v-for="n in 10"
                        :key="n"
                        cols="12"
                        sm="4"
                    ><v-text-field class="px-2" variant="outlined" label="Label"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-item>
                <v-card-actions  class="d-inline">
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="regularlight"
                        @click.stop="(dialogcopy = !dialogcopy)">
                        Cancel
                    </v-btn>
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="accent"
                        @click.stop="(dialogcopy = !dialogcopy)">
                        Clone
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
        v-model="dialogedit"
        >
        <template v-slot:activator="{ props }">
            <v-btn
                class="my-1 mr-1" 
                variant="flat"
                color="accent"
                v-bind="props"
            >
            <v-icon icon="mdi-pencil"></v-icon> <span class="d-none d-sm-none d-md-flex">Edit</span>
            </v-btn>
        </template>
        <v-card class="mx-auto rounded-0">
            <v-card-item class="px-2">
                <v-row no-gutters d-inline>
                    <v-col
                        v-for="n in 10"
                        :key="n"
                        cols="12"
                        sm="4"
                    ><v-text-field class="px-2" variant="outlined" label="Label"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-item>
                <v-card-actions  class="d-inline">
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="regularlight"
                        @click.stop="(dialogedit = !dialogedit)">
                        Cancel
                    </v-btn>
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="accent"
                        @click.stop="(dialogedit = !dialogedit)">
                        Edit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
        v-model="dialogdelete"
        >
        <template v-slot:activator="{ props }">
            <v-btn
                class="my-1 mr-1" 
                variant="outlined"
                color="regular"
                v-bind="props"
            >
            <v-icon icon="mdi-delete-forever"></v-icon> <span class="d-none d-sm-none d-md-flex">Delete</span>
            </v-btn>
        </template>
        <v-card class="mx-auto rounded-0">
                <v-card-item class="px-2">
                    <div>
                        Do you really want it?
                        <!--template v-for="col in meta.columns" :key="col">
                        <geo-cell v-bind="{mode:'edit', column:col, initValue:curentRow[col.fieldname], meta:meta, rowobject:curentRow}"></geo-cell>
                        </template-->

                    </div>
                </v-card-item>
                <v-card-actions  class="d-inline">
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="regularlight"
                        @click.stop="(dialogdelete = !dialogdelete)">
                        Cancel
                    </v-btn>
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="vs"
                        @click.stop="(dialogdelete = !dialogdelete)">
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!--/div-->
        </div>
<!--end filters-->
</template>
<script>
export default {
    name: 'BaseTablePageTools',
    components: {
    },
    data(){ 
        return {

            dialogcopy: false,
            dialogedit: false,
            dialogdelete: false,
            dialogprint: false,
            clicktooltip: 'Click to copy',

        }
    },
    
//    props:['dataset_uri', 'tablestructur'],

    methods: {
        clicktooltipMessage(){
          if (this.clicktooltip =='Click to copy') {
          this.clicktooltip = 'Copied';
          }
          else {
            this.clicktooltip = 'Click to copy';
          }
          setTimeout(() => {
        this.clicktooltip = 'Click to copy';
      }, 500);

        },

    },

}
</script>



