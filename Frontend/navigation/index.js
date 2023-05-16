import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeG from '../screens/UserNotConnected/HomeG';
import DrawerNavAdmin from '../screens/SuperAdmin/draweradmin/DrawerNavAdmin';
import AddNewAgent from '../screens/SuperAdmin/Pagesadmin/AddNewAgent';
import LoginScreen from '../screens/LoginAndSingUP/LoginScreen';
import RegisterScreen from '../screens/LoginAndSingUP/RegisterScreen';
import DetailsAgent from '../screens/SuperAdmin/Pagesadmin/DetailsAgent';
import AddNewOffre from '../screens/AgentMunicipalite/ListesOfPages/AddNewOffre';
import AccueilScreen from '../screens/AccueilScreen';
const Stack = createStackNavigator();
const Index = () => {
    return (
        <Stack.Navigator initialRouteName="HomeG">
            <Stack.Screen name="DrawerAdmin" component={DrawerNavAdmin} options={{ headerShown: false }} />
            <Stack.Screen name="HomeG" component={HomeG} options={{ headerShown: false }} />
            <Stack.Screen name="AddNewAgent" component={AddNewAgent} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsAgent" component={DetailsAgent} options={{ headerShown: false }} />
            <Stack.Screen name="AddNewOffre" component={AddNewOffre} options={{ headerShown: false }} />
            <Stack.Screen name="AccueilScreen" component={AccueilScreen} options={{ headerShown: false }} />


        </Stack.Navigator>
    )
}

export default Index
