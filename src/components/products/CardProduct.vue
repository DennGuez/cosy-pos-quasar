<template>
    <div class="q-pa-xs">
        <q-card class="card-custom bg-primary bordered" flat>
            <q-card-section class="q-pa-ms text-left">
                <div class="text-subtitle1 text-weight-medium">Especial Birria Ramen</div>
                <div class="text-subtitle2 text-accent">Bs7.50</div>
            </q-card-section>
            <q-card-actions class="q-pa-ms absolute-bottom-right" align="right">
                <q-btn class="style-button" flat><q-icon name="add" size="xs"/></q-btn>
                <span  class="text-subtitle1 q-mx-md">0</span>
                <q-btn class="style-button rounded-borders" flat><q-icon name="remove" size="xs"/></q-btn>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.style-button {
    border: 0.5px solid #676767;
    border-radius: 8px;
}
.card-custom {
    width: 175px;
    height: 140px;
}

</style>