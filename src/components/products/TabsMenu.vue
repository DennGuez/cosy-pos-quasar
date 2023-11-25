<template>
    <q-tabs
        class="text-white"
        active-class="active-tabs"
        inline-label
        v-model="UIStore.tabMenu"
        indicator-color="transparent"
        active-color="white"
        active-bg-color="primary"
        >
        <q-tab class="rounded-borders" name="all" icon="mail" label="Todo" no-caps />
        <q-separator spaced inset vertical />
        <q-tab class="rounded-borders" name="mails" icon="mail" label="Bebidas" no-caps />
        <q-separator spaced inset vertical />
        <q-tab class="rounded-borders" name="alarms" icon="alarm" label="Sopas" no-caps />
        <q-separator spaced inset vertical />
        <q-tab class="rounded-borders" name="movies" icon="movie" label="Pizzas" no-caps />
    </q-tabs>
</template>

<script setup lang="ts">
import { useUIStore } from 'src/stores/UIStore'
const UIStore = useUIStore()

</script>