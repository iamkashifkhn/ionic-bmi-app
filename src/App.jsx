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
  setupIonicReact,
  IonAlert,
} from "@ionic/react";
import BMIControls from "./components/BMIControls";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import BMIResult from "./components/BMIResult";

setupIonicReact();

const App = () => {
  const [bmi, setBMI] = useState(null);
  const [error, setError] = useState(null)
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
    const result = enteredWeight / (enteredHeight * enteredHeight);
    setBMI(result);
  };

  const resetBMI = () => {
    heightInputRef.current.value = "";
    weightInputRef.current.value = "";
    setBMI(null);
  };

  return (
    <IonApp>
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
              <IonItem>
                <IonInput
                  labelPlacement="floating"
                  label="Height"
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
                  label="Weight"
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
    </IonApp>
  );
};

export default App;
