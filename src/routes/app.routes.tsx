import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Header from '../components/Header';

import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
      cardStyle: { backgroundColor: '#313746' },
    }}
    initialRouteName="Dashboard"
  >
    <App.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: () => <Header />,
      }}
      name="Dashboard"
      component={Dashboard}
    />
    <App.Screen
      options={{
        headerTransparent: true,
        headerTitle: () => <Header />,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },

        headerBackImage: () => (
          <FeatherIcon name="chevron-left" size={24} color="#f3f9ff" />
        ),
      }}
      name="Cart"
      component={Cart}
    />
  </App.Navigator>
);

export default AppRoutes;
