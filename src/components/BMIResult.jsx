import React from 'react'
import {IonRow, IonCol, IonCard, IonCardContent} from '@ionic/react'

const BMIResult = ({bmi}) => {
  return (
    <IonRow>
    <IonCol>
      <IonCard>
        <IonCardContent>
          <h2>{bmi}</h2>
        </IonCardContent>
      </IonCard>
    </IonCol>
  </IonRow>
  )
}

export default BMIResult