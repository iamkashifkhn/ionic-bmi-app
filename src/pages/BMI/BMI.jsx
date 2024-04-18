// import { Redirect, Route } from "react-router-dom";
import React, { useRef, useState } from "react";
import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonRow,
  IonTitle,
  IonToolbar,
  IonAlert,
  IonPage,
} from "@ionic/react";

import InputControl from "../../components/InputControl";
import BMIResult from "../../components/BMIResult";
import BMIControls from "../../components/BMIControls";

const BMI = () => {
  const [bmi, setBMI] = useState(null);
  const [error, setError] = useState(null)
  const [selectedUnit, setSelectedUnit] = useState('metric')
  const weightInputRef = useRef();
  const heightInputRef = useRef();

  const calculateBMI = () => {
    const enteredHeight = +heightInputRef.current?.value;
    const enteredWeight = +weightInputRef.current?.value;
    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError("Please Enter a Valid (non-negative) Number")
      return;
    }

    const weightConversionFactor = selectedUnit === 'metric' ? 1 : 2.2;
    const heightConversionFactor = selectedUnit === 'metric' ? 1 : 3.28

    const weight = +enteredWeight / weightConversionFactor;
    const height = +enteredHeight / heightConversionFactor;
    const result = weight / (height * height);
    setBMI(result);
  };

  const resetBMI = () => {
    heightInputRef.current.value = "";
    weightInputRef.current.value = "";
    setBMI(null);
  };

  const handleSelectUnitHandler = (unit) => {
    setSelectedUnit(unit);
  };

  return (
    <IonPage>
    {/* <IonApp> */}
      <IonAlert isOpen={!!error} message={error}
        buttons={[{
          text:"Okay",
          handler:()=>{
            setError(null)
          }   
        }]}
      />
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
        <IonRow>
          <IonCol>
            <InputControl selectedValue={selectedUnit} onSelectValue={handleSelectUnitHandler}/>
          </IonCol>
        </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  labelPlacement="floating"
                  label={`Height (${selectedUnit === 'metric' ? 'meters' : 'feet'})`}
                  placeholder="Height"
                  type="number"
                  ref={heightInputRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  labelPlacement="floating"
                  label={`Weight (${selectedUnit ==='metric' ? 'kg': 'lb'})`}
                  placeholder="Weight"
                  type="number"
                  ref={weightInputRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <BMIControls onCalculate={calculateBMI} onReset={resetBMI} />
          {bmi && <BMIResult bmi={bmi} />}
        </IonGrid>
      </IonContent>
    {/* </IonApp> */}
    </IonPage>
  );
};

export default BMI;
