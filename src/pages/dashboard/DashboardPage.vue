<script setup lang="ts">
import CardDashboard from 'src/components/dashboard/CardDashboard.vue'
</script>

<template>
<q-page>
    <div class="q-pa-md row items-start q-gutter-md">
        <CardDashboard v-for="item in 4"/>
    </div>
    <div class="row">
        <div class="red col q-pa-md"><span>Todays upsale</span></div>
        <div class="red col-8 q-pa-md"><span>Accepted orders</span></div>
    </div>
</q-page>
</template>

<style lang="sass" scoped>
.red
  border: 2px solid red
</style>