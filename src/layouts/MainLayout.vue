<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
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
        <q-header class="header-order_menu bg-dark text-white relative-position">
          <q-toolbar>
            <q-toolbar-title>
              <strong>Orden</strong> Menu
            </q-toolbar-title>
          </q-toolbar>
        </q-header>
        <q-page-container>
          <OrderCard v-for="(_, index) in 15" :index="index"/>
          <q-card class="">
            <q-card-section>
              subtotal           
            </q-card-section>
            <q-card-section>
              Total
            </q-card-section>
            <q-card-section>
              Place Order
            </q-card-section>
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
.header-order_menu {
  position: fixed!important;
  top: 0!important;
}
</style>