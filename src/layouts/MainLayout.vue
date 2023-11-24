<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Panel',
    caption: 'quasar.dev',
    icon: 'dashboard',
    link: 'dashboard'
  },
  {
    title: 'Menu',
    caption: 'github.com/quasarframework',
    icon: 'shopping_cart',
    link: 'products'
  }
];

const route = useRoute()
const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const currentRouteName = computed(() => {
  if (route.name === 'products') {
    return '<strong>Menu</strong> Products'
  }
  if (route.name === 'dashboard') {
    return '<strong>Tabla</strong> Actividad'
  }
})

</script>

<template>
  <q-layout view="lHr lpR fFf">

    <q-header class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <div v-html="currentRouteName"></div>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer class="bg-dark" show-if-above v-model="leftDrawerOpen" side="left" :width="80">
      <!-- drawer content -->
      <q-list class="column items-center">
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-drawer class="bg-dark" show-if-above v-model="rightDrawerOpen" side="right">
      <q-layout>
        <q-header class="bg-dark text-white">
          <q-toolbar>
            <q-toolbar-title>
              <strong>Orden</strong> Menu
            </q-toolbar-title>
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-card class="bg-primary text-white">
            <q-item>
              <q-item-section class="col-1">
                <q-item-label class="text-black text-subtitle2 text-center bg-white style-counter">
                  1
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-medium" >Ramen cochabambino</q-item-label>
                <q-item-label class="text-white" caption>Bs7.50</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-center">x2</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-right">Bs15.00</q-item-label>
              </q-item-section>
            </q-item>
          </q-card>
        </q-page-container>
      </q-layout>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<style scoped>
.style-counter {
  padding: 2px;
  border-radius: 15px;
}
</style>