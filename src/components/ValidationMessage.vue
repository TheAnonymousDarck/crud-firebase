<template>
    <ion-chip color="danger">
        <ion-label> {{ props.msg }} </ion-label>
        <ion-icon :icon="closeCircle"></ion-icon>
    </ion-chip>
</template>

<script setup lang="ts">
    import { IonChip, IonLabel, IonIcon } from '@ionic/vue'
    import { closeCircle } from 'ionicons/icons';

    import { defineProps } from 'vue';
    const props = defineProps<{
        msg: string,
    }>()


</script>