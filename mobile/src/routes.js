import React from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

//screenOptions={{ headerShown= false}} serve para retirar o titutlo da rota na tela que aparece no canto superior

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}