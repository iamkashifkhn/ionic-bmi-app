import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home= () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
