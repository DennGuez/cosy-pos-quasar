<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>

<template>
  <q-item
    class="q-pa-none text-white rounded-borders item-class"
    active-class="active-menu"
    clickable
    tag="a"
    :to="{name: link}"
  >
    <q-item-section
      class="q-pa-none items-center text-accent"
      v-if="icon"
    >
      <q-icon :name="icon" size="md"/>
      <!-- <q-item-label >{{ title }}</q-item-label> -->
    </q-item-section>
  </q-item>
  <q-separator spaced inset vertical dark />
</template>