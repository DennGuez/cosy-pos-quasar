<template>
  <q-item class="bg-primary text-white q-mb-sm">
      <q-item-section class="col-1">
      <q-item-label class="text-dark text-subtitle2 text-center bg-white style-counter">
          {{ index + 1 }}
      </q-item-label>
      </q-item-section>
      <q-item-section>
      <q-item-label>Ramen cochabambino</q-item-label>
      <q-item-label class="text-accent" caption>Bs7.50</q-item-label>
      </q-item-section>
      <q-item-section>
      <q-item-label class="text-center text-accent">x2</q-item-label>
      </q-item-section>
      <q-item-section>
      <q-item-label class="text-right text-weight-medium">Bs15.00</q-item-label>
      </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineProps<{
  index: number
}>()
</script>

<style scoped>
.style-counter {
  padding: 2px;
  border-radius: 15px;
}
</style>