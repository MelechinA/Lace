<template>
<!--tools-->
<!-- <div class="d-inline"> -->

        <v-dialog 
        v-model="dialogadd"
        >
            <template v-slot:activator="{ props }">
                <v-btn
                    class="mb-1 mr-1"  
                    variant="flat"
                    color="accent"
                    v-bind="props"
                >
                <v-icon icon="mdi-plus"></v-icon> <span class="d-none d-sm-none d-md-flex">Add</span>
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
                        @click.stop="dialogadd = !dialogadd">
                        Cancel
                    </v-btn>
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="regularlight"
                        @click.stop="">
                        Reset
                    </v-btn>
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="accent"
                        @click.stop="dialogadd = !dialogadd">
                        Add
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
        v-model="dialogcopy"
        >
        <template v-slot:activator="{ props }">
            <v-btn
                class="mb-1 mr-1" 
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
                class="mb-1 mr-1" 
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
                class="mb-1 mr-1" 
                variant="outlined"
                color="accent"
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
        <!-- </div> -->



</template>
<script>
export default {
    name: 'BaseTableTools',
    components: {
    },
    data(){ 
        return {
    //        dialogsettings: false,
     //       dialogshare: false,
            toolsfilters: false,
            toolsgeneralisation: false,
            dialogdelete: false,
            dialogedit: false,
            dialogcopy: false,
            dialogadd: false,
        }
    },
    
//    props:['dataset_uri', 'tablestructur'],


}
</script>


