<template>
    <div>
        <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" >
        <button @click="goHome()">
        <v-icon :large="true" color="yellow darken-3">mdi-paw</v-icon>
          <span class="blue-grey--text text--darken-3">Pawty</span>
        </button>
      </v-toolbar-title >
      <v-spacer></v-spacer>
      <v-btn 
      text 
      to="/"
      >
        <v-icon :small="true" color="yellow darken-3">mdi-home</v-icon>
        <span class="mr-2 blue-grey--text text--darken-3">Home</span>
      </v-btn>
      <v-btn 
      text 
      to="/petid"
      >
        <v-icon :small="true" color="yellow darken-3">mdi-clipboard-text-outline</v-icon>
        <span class="mr-2 blue-grey--text text--darken-3">PetID</span>
      </v-btn>
      <v-btn 
      text 
      to="/post"
      >
        <v-icon :small="true" color="yellow darken-3">mdi-post</v-icon>
        <span class="mr-2 blue-grey--text text--darken-3">Post</span>
      </v-btn>
      <Auth />
    </v-app-bar>
    </div>
</template>

<script>
import Auth from "./Auth";
export default {
    name: 'AppHeader',
    components: {
        Auth
    },
    methods : {
        goHome() {
            this.$router.push({name:'home'}).catch();
        }
    }
}
</script>

