import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './MainScreen';
import MushroomScreen from './MushroomScreen'

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name='Main'
                    component={MainScreen}
                />
                <Stack.Screen
                    name='Mush'
                    component={MushroomScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
