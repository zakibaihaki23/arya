<template>
    <section>
        <v-navigation-drawer enable-resize-watcher :permanent="modeDesktop" v-model="drawer" app color="#F6FBF6" height="100%" :dark="false">
            <div class="pt-5"/>
            <v-list>
                <div class="pt-6"/>

                <!-- MasterHelper -->
                <v-list-item color="#4ABFB2" to="/MasterHelper">
                    <v-list-item-icon class="p-icon-nav" style="margin-right:25px">
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="fs13">Master Helper</v-list-item-title>
                </v-list-item>
                
                <!-- GRUP PACKING -->
                <v-list-group group="Packing" color="#4ABFB2"  v-privilege="'ivt'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>mdi-layers</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Packing</v-list-item-title>
                    </template>

                    <v-list-item to="/Packing/ListPacking" color="#4ABFB2" v-privilege="'prd'" >
                        <v-list-item-content class="p-icon-nav"> List Packing </v-list-item-content>
                    </v-list-item>
                        <hr class="mx-9 hr-navbar" color="#4ABFB2" v-privilege="'prd'">
                    <v-list-item to="/Packing/ListPackingDetail" v-privilege="'pta'" >
                        <v-list-item-content class="p-icon-nav"> List Packing Detail</v-list-item-content>
                    </v-list-item>
                        <hr class="mx-9 hr-navbar" color="#4ABFB2" v-privilege="'uom'">
                    <v-list-item to="/Packing/PackingItem" v-privilege="'ctg'">
                        <v-list-item-content class="p-icon-nav"> Packing Item </v-list-item-content>
                    </v-list-item>
                        <hr class="mx-9 hr-navbar" color="#4ABFB2" v-privilege="'ctg'">
                </v-list-group>

                <!-- GRUP PICKING -->
                <v-list-group group="Picking" color="#4ABFB2"  v-privilege="'ivt'">
                    <template v-slot:activator>
                        <v-list-item-icon class="p-icon-nav">
                            <v-icon>mdi-layers</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="fs13">Picking</v-list-item-title>
                    </template>

                    <v-list-item to="/Picking/ListPicking" color="#4ABFB2" v-privilege="'prd'" >
                        <v-list-item-content class="p-icon-nav"> List Picking </v-list-item-content>
                    </v-list-item>
                        <hr class="mx-9 hr-navbar" color="#4ABFB2" v-privilege="'prd'">
                    <v-list-item to="/Picking/PickingAssignment" v-privilege="'pta'" >
                        <v-list-item-content class="p-icon-nav"> Picking Assignment</v-list-item-content>
                    </v-list-item>
                        <hr class="mx-9 hr-navbar" color="#4ABFB2" v-privilege="'uom'">
                    <v-list-item to="/Picking/PickingData" v-privilege="'ctg'">
                        <v-list-item-content class="p-icon-nav"> Picking Data </v-list-item-content>
                    </v-list-item>
                        <hr class="mx-9 hr-navbar" color="#4ABFB2" v-privilege="'ctg'">
                </v-list-group>

                <br><br><br>
            
                <v-list-item color="#4ABFB2" to="/">
                    <v-list-item-icon class="p-icon-nav" style="margin-right:25px">
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="fs13">Logout</v-list-item-title>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>
    </section>
</template>
#4ABFB2

<script>
    export default {
      name:"Navbar",
       
    };
</script>

<style scoped>
/* background v-list active */
.v-list .v-list-item--active {
    color: inherit;
    background-image: url(/img/bg_navbar.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}
/* padding icon */
.p-icon-nav {
    padding-left:20px; 
}
</style>