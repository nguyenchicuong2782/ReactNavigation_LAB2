import React from 'react';
import {creatDrawerNavigator} from '@react-navigation/drawer';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from '../3/screens/Favorties';
import User from './screens/User';
import {MaterialIcons} from '@expo/vector-icons';
import colors from './utils/colors';
import Options from '../3/screens/Options';
import {creatNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const getDrawerItemIcon = icon => ({tintColor}) => (
    <MaterialIcons name={icon} size={22} style={{color: tintColor}}/>
);

const Stack = creatNativeStackNavigator();
const ContactsScreens = ()=>
{
    return (
        <Stack.Navigator
            initialRouteName="Contacts"
            screenOptions ={
                {
                    headerShown:false
                }
            }
        >

        </Stack.Navigator>
    );
}

const FavoritesScreens = () =>
{
    return (
        <Stack.Navigator
            initialRouteName="Favorties"
            screenOptions ={
                {
                    headerShown:false
                }
            }
        >

        </Stack.Navigator>
    );
}

const Drawer = creatDrawerNavigator();
const DrawerNavigator = () =>
{
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="ContactsScreens">

            <Drawer.Screen name="ContactsScreens" component={Contacts}
            options={{
                drawerIcon: getDrawerItemIcon('list'),
            }}
            />
            <Drawer.Screen name="FavoritesScreens" component={FavoritesScreens}
            options={{
                drawerIcon: getDrawerItemIcon('star'),
            }}
            />
            <Drawer.Screen name="UserScreens" component={UserScreens}
            options={{
                drawerIcon: getDrawerItemIcon('person'),
            }}
            />

            </Drawer.Navigator>
            
        </NavigationContainer>
    )
}

export default DrawerNavigator;