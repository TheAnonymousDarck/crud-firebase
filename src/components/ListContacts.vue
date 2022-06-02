<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <ion-list >
                    <ion-item-sliding 
                    v-for="contact in contacts" 
                    :key="contact.id"
                    >
            
                    <ion-item>
                        <ion-avatar>
                            <ion-icon :icon="person"/>
                        </ion-avatar>
                        <ion-label>
                            <h2> {{ contact.nombre  }} {{ contact.apellido }} </h2>
                            <h3> {{ contact.telefono }}                       </h3>
                            <p>  {{ contact.email  }}                         </p>
                        </ion-label>
                        <ion-icon v-if="props.isEdit" :icon="createOutline" @click="openModal(contact.id)"/>
                        <ion-icon v-if="props.isEdit" :icon="trashOutline" @click="deleteContact(contact.id)"/>
                    </ion-item>
            
                    </ion-item-sliding>
                </ion-list>

            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup lang="ts">
import contactsDB from '@/firebase';
import router from '@/router';
import { IonAvatar, IonItemSliding, IonLabel, IonIcon, IonList, IonItem, IonGrid,IonRow, IonCol, toastController } from '@ionic/vue';
import { getDocs, doc, deleteDoc } from 'firebase/firestore';
import { trashOutline ,createOutline, person } from 'ionicons/icons'
import { ref, defineProps } from 'vue';


const props = defineProps({
    isEdit: {
        type: Boolean,
        default: false
    },
    isOpen: {
        type: Boolean,
        default: false
    }, 
})

const contacts= ref<any>([]);

async function fetchContacts() {
    const querySnapshot = await getDocs(contactsDB);
    let contactsData:any[];
    contactsData = []
    querySnapshot.forEach( (contact)  => {
        let contactData = contact.data();
        contactData.id = contact.id;
        contactsData.push( contactData );
    });
    contacts.value = contactsData;
}

async function openToast() {
    const toast = await toastController
    .create({
        message: 'Contacto eliminado',
        duration: 2000
    })
    return toast.present();
}

async function deleteContact(contactId:any) {
    const contactRef = doc(contactsDB, contactId);
    await deleteDoc(contactRef);
    openToast()
    router.push("/");
    fetchContacts()
}
//funcion para testear
// function log(id:any) {
//     console.log(id)
// }

function openModal(contactId:any){
    router.push(`/edit/${contactId}`)
}

fetchContacts()

</script>