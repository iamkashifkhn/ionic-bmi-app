import React from 'react'
import { Route} from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import BMI from './BMI/BMI'
import Page1 from './Page1'
import Page2 from './Page2'

const DashboardPage = ({match}) => {
  return (
    <IonRouterOutlet>
    <Route exact path={match.url} component={BMI} />
    <Route path={`${match.url}/page1`} component={Page1} />
    <Route path={`${match.url}/page2`} component={Page2} />
  </IonRouterOutlet>
  )
}

export default DashboardPage