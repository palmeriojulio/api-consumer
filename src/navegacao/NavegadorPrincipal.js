import React from 'react';
    import { createStackNavigator } from '@react-navigation/stack';
    import Lista from '../componentes/Lista';
    import Detalhes from '../componentes/Detalhes';

    const Stack = createStackNavigator();

    const MainStackNavigator = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Lista de produtos" component={Lista} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
      );
    };

    export default MainStackNavigator;