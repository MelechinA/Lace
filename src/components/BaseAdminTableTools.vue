<template>
<!--start admin tools-->
        <v-dialog
        v-model="dialogshare"
        >
        <template v-slot:activator="{ props }">
            <v-btn
                class="mb-1 mr-1" 
                variant="outlined"
                color="vs"
                v-bind="props"
            >
            <v-icon icon="mdi-link-variant-plus"></v-icon>  <span class="d-none d-sm-none d-md-flex">Share</span>
            </v-btn>
        </template>
        <v-card class="mx-auto rounded-0">
                <v-card-item class="px-2">
                    <div>
                Здесь морда шаринга
                    </div>
                </v-card-item>
                <v-card-actions  class="d-inline">
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="regularlight"
                        @click.stop="(dialogshare = !dialogshare)">
                        Cancel
                    </v-btn>
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="accent"
                        @click.stop="(dialogshare = !dialogshare)">
                        Share
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
        v-model="dialogsettings"
        >
        <template v-slot:activator="{ props }">
            <v-btn
                class="mb-1 mr-1" 
                variant="outlined"
                color="vs"
                v-bind="props"
            >
            <v-icon icon="mdi-wrench"></v-icon>  <span class="d-none d-sm-none d-md-flex">Settings</span>
            </v-btn>
        </template>
        <v-card class="mx-auto rounded-0">
                <v-card-item class="px-2">
                    <div>
                Здесь морда настроек
                    </div>
                </v-card-item>
                <v-card-actions  class="d-inline">
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="regularlight"
                        @click.stop="(dialogsettings = !dialogsettings)">
                        Cancel
                    </v-btn>
                    <v-btn
                        class="my-1"
                        variant="flat"
                        color="accent"
                        @click.stop="(dialogsettings = !dialogsettings)">
                        Apply
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
<!--end admin tools-->


</template>
<script>
export default {
    name: 'BaseAdminTableTools',
    components: {
    },
    data(){ 
        return {
            dialogsettings: false,
            dialogshare: false,
            toolsfilters: false,
            dialogdelete: false,
            dialogedit: false,
            dialogcopy: false,
            dialogadd: false,
        }
    },
    

}
</script>


