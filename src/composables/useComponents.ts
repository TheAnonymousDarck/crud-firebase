import { actionSheetController, toastController } from "@ionic/vue";

export  const useDismiss = () => {

    const canDismiss = async () => {
        const actionSheet = await actionSheetController.create({
        header: '¿Estás seguro(a) de que quieres descartar tus cambios?',
        buttons: [
            {
                text: 'Descartar Cambios',
                role: 'destructive'
            },
            {
                text: 'Seguir editando',
                role: 'cancel'
            }
        ]
    });
    
    await actionSheet.present();
    
    const { role } = await actionSheet.onDidDismiss();
    
    if (role === 'destructive') {
        return true;
    }
    
    return false;
    }

    return { canDismiss }
}

export const useToast = (msg:string, duration:number | 2000) => {
    return {
        async openToast() {
            const toast = await toastController
            .create({
                message: msg,
                duration: duration
            })
            return toast.present();
        }
    }
} 