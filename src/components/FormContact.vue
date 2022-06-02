<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <ion-list>

                    <form @submit.prevent="submitForm">
                        <ion-item>
                            <ion-icon slot="start" :icon="person"></ion-icon>
                            <ion-label position="floating">Nombre(s)</ion-label>
                            <ion-input v-model="formData.nombre" required></ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-icon slot="start" :icon="person"></ion-icon>
                            <ion-label position="floating">Apellido(s)</ion-label>
                            <ion-input v-model="formData.apellido" required></ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-icon slot="start" :icon="mailOutline"></ion-icon>
                            <ion-label position="floating">Correo electronico</ion-label>
                            <ion-input type="email" v-model="formData.email" required></ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-icon slot="start" :icon="callOutline"></ion-icon>
                            <ion-label position="floating">Telefono</ion-label>
                            <ion-input type="tel" v-model="formData.telefono" required min="10" max="10"></ion-input>
                        </ion-item>

                        <ion-button type="submit" expand="block" color="success">
                            <ion-icon slot="start" :icon="personAddOutline"></ion-icon>
                            Agregar contacto
                        </ion-button>

                    </form>

                </ion-list>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup lang="ts">
import { IonList, IonLabel, IonInput, IonItem, IonButton, IonGrid, IonCol, IonRow, IonIcon, toastController } from '@ionic/vue'

import contactsDB from '@/firebase';
import {  addDoc } from 'firebase/firestore';

import router from '@/router';

import { person, mailOutline, callOutline, personAddOutline } from 'ionicons/icons'


const formData = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: 0,
};

async function openToast() {
    const toast = await toastController
    .create({
        message: 'Contacto agegado',
        duration: 2000
    })
    return toast.present();
}

async function submitForm() {
    const addedDoc = await addDoc(contactsDB, formData);
    openToast()
    console.log(addedDoc)

    formData.nombre = '';
    formData.apellido = '' ;
    formData.email = '';
    formData.telefono = 0;
    router.push("/");
}

</script>