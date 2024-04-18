import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

const Page2 = () => {
  return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Page1</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonHeader collapse='condense'>
        <IonToolbar>
          <IonTitle>Hello Kashif</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
</IonPage>
  )
}

export default Page2