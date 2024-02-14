<template>
  <div>
    <v-layout class="rounded rounded-md text-myColor" theme="myDarkTheme">
      <v-navigation-drawer
          permanent
          rail
          style="box-shadow: 0 3px 30px rgba(0,0,0,.3), 0 3px 24px rgba(0,0,0,.3)"
          class="bg-mySurface border-0"
      >

        <div class="d-flex justify-start flex-column h-screen">
          <v-list density="compact">
            <v-list-item prepend-icon="mdi-account" title="CLASSIC"></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <div class="d-flex justify-center flex-column h-100">
            <v-list density="comfortable" lines="two">
              <v-list-item prepend-icon="mdi-home" link title="Home" class="mb-3"></v-list-item>
              <v-list-item prepend-icon="mdi-music-clef-treble" link title="Music" class="mb-3"></v-list-item>
              <v-list-item prepend-icon="mdi-palette" link title="Art" class="mb-3"></v-list-item>
              <v-divider></v-divider>
              <v-list-item prepend-icon="mdi-format-paint" link title="Change theme" class="mt-3"></v-list-item>
            </v-list>
          </div>

          <v-divider></v-divider>

          <v-list density="compact">
            <v-list-item :prepend-icon="!theme.current.value.dark ? 'mdi-lightbulb-on' : 'mdi-lightbulb-outline' " @click="toggleTheme" title="Dark Mode"></v-list-item>
          </v-list>
        </div>

      </v-navigation-drawer>

      <v-navigation-drawer
          width="180"
          :elevation="15"
          class="pa-3 bg-mySurface"
          style="border:none; box-shadow: 0 3px 30px rgba(0,0,0,.3), 0 3px 24px rgba(0,0,0,.3)"
      >

        <div class="d-flex justify-center flex-column h-100">
          <v-list density="comfortable" lines="one">
            <v-list-item title="My Blog" value="blog" class="mb-2"></v-list-item>
            <v-list-item title="About Me" value="about" class="mb-2"></v-list-item>
            <v-list-item title="Contact Me" value="contact" class="mb-2"></v-list-item>
            <v-list-item title="Support Me" value="support"></v-list-item>
          </v-list>
        </div>
      </v-navigation-drawer>

      <v-app-bar
          flat
          location="bottom"
          style="border-top:1px solid #424242"
          height="52"
      >
        <v-footer class="d-flex align-center justify-space-between bg-myBase">
          <div class="w-33">
            {{ new Date().getFullYear() }} — <strong>Classic</strong>
          </div>
          <div class="d-flex align-center justify-end w-66 ga-4 ">
            <v-btn class="mx-4" icon="mdi-facebook" variant="plain" size="small"></v-btn>
            <v-btn class="mx-4" icon="mdi-twitter" variant="plain" size="small"></v-btn>
            <v-btn class="mx-4" icon="mdi-linkedin" variant="plain" size="small"></v-btn>
          </div>
        </v-footer>

      </v-app-bar>

      <v-main class="d-flex align-center justify-center h-screen bg-myBase" style="min-height: 300px;">

        <div class="d-flex h-100 pa-10 ga-10" style="width: 100%;max-width: 1400px">
          <div class="main-left w-66 h-100 d-flex flex-column ga-5">
            <v-card class="h-50 rounded-xl" style="box-shadow: 0 1px 15px rgba(0,0,0,.1), 0 1px 8px rgba(0,0,0,.1)" rounded="0">
              <v-img
                  src="~/assets/beethoven.jpeg"
                  class="text-right align-end pb-5"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  cover
                  position="center"
              >
                <v-card-title class="text-white text-h2 text-red-accent-1" style="letter-spacing: 3px!important" v-text="'Music'"></v-card-title>
              </v-img>
            </v-card>

            <v-card class="h-50 rounded-xl" style="box-shadow: 0 1px 15px rgba(0,0,0,.1), 0 1px 8px rgba(0,0,0,.1)" rounded="0">
              <v-img
                  src="~/assets/vangogh.jpg"
                  class="text-right pb-5 align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  cover
                  position="center"
              >
                <v-card-title class="text-white text-h2 font-weight-black text-indigo-accent-1" style="letter-spacing: 3px!important" v-text="'Art'"></v-card-title>
              </v-img>
            </v-card>

          </div>

          <div class="main-right w-33 h-100">
            <v-container class="rounded-xl pa-0 h-100 bg-mySurface" style="box-shadow: 0 1px 15px rgba(0,0,0,.1), 0 1px 8px rgba(0,0,0,.1)">
              <v-card title="Recent Blogs" variant="tonal" color="red-accent-3" rounded="0" class="rounded-t-xl"></v-card>

              <div class="overflow-auto" style="height: 760px">
                <v-card rounded="0" variant="flat">
                  <v-img
                      class="align-end text-white"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                      cover
                  >
                    <v-card-title>Top 10 Classical Composers</v-card-title>
                  </v-img>

                  <v-card-subtitle class="pt-4">
                    Number 10
                  </v-card-subtitle>

                  <v-card-text>
                    <div>Bach</div>
                    <div>Germany, 17<sup>th</sup> Century</div>
                  </v-card-text>
                </v-card>

                <v-divider></v-divider>

                <v-data-iterator :items="allItems" :page="page" :items-per-page="perPage" :items-length="allItems.length">
                  <template v-slot:default="{ items }">
                    <template
                        v-for="(item, i) in items"
                        :key="i"
                    >
                      <v-card v-bind="item.raw" rounded="0" class="bg-mySurface"></v-card>
                      <v-divider v-if="items.length != (i + 1)"></v-divider>
                    </template>
                  </template>
                </v-data-iterator>
              </div>

              <div class="text-center pt-2 rounded-b-xl">
                <v-pagination
                    color="red-accent-3"
                    v-model="page"
                    :length="Math.ceil(allItems.length/perPage)"
                    class="rounded-b-xl"
                ></v-pagination>
              </div>
            </v-container>
          </div>
        </div>

      </v-main>
    </v-layout>
  </div>
</template>

<script setup lang="ts">
import {useTheme} from "vuetify";

const page = ref(1)
const perPage = ref(4)
const allItems = ref(Array.from({length: 15}, (k, v) => ({
  title:'Item '+(v+1),
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
})))

const theme = useTheme()
console.log(theme.current.value.dark)
function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'myLightTheme' : 'myDarkTheme'
}
</script>
