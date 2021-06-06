import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import NewReminder from '../screens/NewReminder';

const Stack = createStackNavigator();
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
            >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="NewReminder" component={NewReminder}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
