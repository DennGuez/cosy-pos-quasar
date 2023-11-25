<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useElementSize } from '@vueuse/core'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'
import OrderCard from 'src/components/products/OrderCard.vue'

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


const el = ref(null)
const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

const { height } = useElementSize(el)
const route = useRoute()

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
  <q-layout view="lHr lpR fFf" class="bg-dark">

    <q-header class="bg-dark text-white">
      Height: {{ height }}
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

    <q-drawer class="bg-dark q-pr-md" show-if-above v-model="rightDrawerOpen" side="right">
      <!-- <q-layout view="lHh lpr lFf" container>
        <q-header class="bg-dark">
          <q-toolbar>
            <q-toolbar-title class="">
              <strong>Orden</strong> Menu
            </q-toolbar-title>
          </q-toolbar>
        </q-header>

        <q-footer class="bg-red">
          <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey-8" style="height: 100%;">
            <q-tab label="Images" />
            <q-tab label="Videos" />
            <q-tab label="Articles" />
          </q-tabs>
          <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey-8" style="height: 100%;">
            <q-tab label="Images" />
            <q-tab label="Videos" />
            <q-tab label="Articles" />
          </q-tabs>
        </q-footer>

        <q-page-container >
          <q-page ref="el" class="text-white">
            <OrderCard v-for="(_, index) in 1" :index="index"/>
          </q-page>
        </q-page-container>
    </q-layout> -->
    <div style="width: 100%; background: red; height: 50px;">
        Header
    </div>
    <div class="column" style="height: calc(100vh - 50px);">
      <div class="col-auto overflow-auto" style="max-height: calc(100vh - 250px);">
        <OrderCard v-for="(_, index) in 9" :index="index"/>
      </div>
      <div class="col order-last" style="background: purple;">
        footer
      </div>
    </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<style lang="scss" scoped>
// $box_height: 100vh;
// .header-order_menu {
//   position: fixed!important;
//   top: 0!important;
// }
/* .footer-order_menu {
  position: fixed!important;
  bottom: 0!important;
} */
</style>