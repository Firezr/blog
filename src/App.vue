<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item @click="goHome">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="goHome">
          <v-list-item-action>
            <v-icon>contact_mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <!-- <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Welcome to here !</v-toolbar-title>
    </v-app-bar>-->

    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-4"
      >
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Jarry's Blog</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn icon color="yellow" v-on="on">
              <v-icon>more_vert</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <template v-slot:extension>
          <v-tabs align-with-title background-color="transparent">
            <v-tab
              @click="$router.push({ path: route_name==='index'?'/':'/admin/write' })"
            >{{route_name==='index'?'index':'write'}}</v-tab>
            <v-tab @click="$router.push({ path: '/list' })">List</v-tab>
            <v-tab>Comment</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-4" class="overflow-y-auto" max-height="650">
        <v-container id="container" min-height="1000">
          <div style="margin-top:225px">
            <router-view />
          </div>
        </v-container>
      </v-sheet>
    </v-card>

    <v-content>
      <!-- <router-view /> -->
    </v-content>
    
    <!-- <v-bottom-navigation v-model="bottomNav" dark shift>
      <v-btn>
        <span>Video</span>
        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>
        <v-icon>music_note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn>
        <span>Image</span>
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
      <span >制作 于北京</span>
      
    </v-footer>
  </v-app>
</template>

<script>
import { log } from "util";
export default {
  name: "app",
  // props: {
  //   // source: String
  // },
  mounted() {
    this.route_name = this.$route.name;
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ],

    bottomNav: 3,

    route_name: ""
  }),
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
    loadList() {}
    // scroll(e){
    //   console.log(e);

    //   document.querySelector('#container').style.marginTop = e.scrollTop
    // }
  },
  computed: {
    color () {
        switch (this.bottomNav) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      },
  }
};
</script>

<style>
</style>
