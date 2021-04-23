import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentificaton } from '../pages/UserIdentificaton';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import AuthRoutes from './tab.routes';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      }
    }}
  >
    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />

    <stackRoutes.Screen
      name="UserIdentificaton"
      component={UserIdentificaton}
    />

    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />

    <stackRoutes.Screen
      name="PlantSelect"
      component={AuthRoutes}
    />

    <stackRoutes.Screen
      name="PlantSave"
      component={PlantSave}
    />

    <stackRoutes.Screen
      name="MyPlants"
      component={AuthRoutes}
    />

  </stackRoutes.Navigator>
)

export default AppRoutes;