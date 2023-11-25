<script setup lang="ts">
import TabsMenu from 'src/components/products/TabsMenu.vue';
import CardProduct from 'src/components/products/CardProduct.vue';
import { useUIStore } from 'src/stores/UIStore'
const UIStore = useUIStore()

</script>

<template>
    <q-page class="bg-dark">
        <!-- <q-toolbar class="q-pl-md" inset>
          <q-toolbar-title class="text-white">
            <strong>Menu</strong> Products
          </q-toolbar-title>
        </q-toolbar> -->
      <TabsMenu />
      <q-separator spaced="lg" inset />
      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="UIStore.tabMenu"
          animated
          transition-prev="scale"
          transition-next="scale"
          class="bg-dark text-white text-center"
        >
          <q-tab-panel class="q-pa-sm" name="all">
            <div class="row justify-around">
              <CardProduct v-for="item in 40" />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </q-page>
</template>

<style scoped>
.card-custom {
  max-width: 192px;
}
.style-button {
  border: 0.5px solid white;
}

</style>