<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Editar/Eliminar Contacto</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    
      <list-contacts :is-edit="isEdit" />

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ListContacts from '@/components/ListContacts.vue';

const isEdit = true;

</script>