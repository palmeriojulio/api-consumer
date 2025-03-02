import React from 'react';
    import MainStackNavigator from './src/navegacao/NavegadorPrincipal';
    import { NavigationContainer } from '@react-navigation/native';

    export default function App() {
      return (
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      );
    }