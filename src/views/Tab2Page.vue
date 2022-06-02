<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Crear un nuevo Contacto</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <FormContact/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import FormContact from '@/components/FormContact.vue';

</script>
