<template>
  <v-app>
    <!-- <div v-if="$route.name!='Login'"> </div> -->
    <!-- <v-navigation-drawer app>
    </v-navigation-drawer> -->

    <!-- <v-app-bar app>
    </v-app-bar> -->
    

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>


export default {
 name: "App",

  components: {
   
  },

  data: () => ({
    
  }),
};
</script>