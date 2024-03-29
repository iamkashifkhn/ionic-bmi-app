import React from 'react'
import { IonRow, IonButton, IonIcon, IonCol } from '@ionic/react'
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const BMIControls = ({onCalculate, onReset}) => {
  return (
    <IonRow>
    <IonCol className="ion-text-left">
      <IonButton onClick={onCalculate}>
        <IonIcon slot="start" icon={calculatorOutline}/>
        Calcualte</IonButton>
    </IonCol>

    <IonCol className="ion-text-right">
      <IonButton onClick={onReset}>
        <IonIcon slot="start" icon={refreshOutline}/>
        Reset
        </IonButton>
    </IonCol>
  </IonRow>
  )
}

export default BMIControls