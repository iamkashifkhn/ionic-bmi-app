import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

const InputControl = ({ selectedValue, onSelectValue }) => {

  const handleSelectValue = (event) => {
    onSelectValue(event.detail.value);
  };

  return (
    <IonSegment value={selectedValue} onIonChange={handleSelectValue}>
      <IonSegmentButton value={'metric'}>
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value={'us'}>
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
