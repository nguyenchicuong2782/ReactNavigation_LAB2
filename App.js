import React from 'react';
import { Text, View } from 'react-native';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import DrawerNavigator from '../components/contact-list/4/routes';
import Favorites from '../components/contact-list/3/screens/Favorties';
import User from '../components/contact-list/3/screens/User';
import Options from '../components/contact-list/3/screens/Options';
import Store from './store';
import {Provider} from 'react-redux';

const App=()=>
{
  return(
    <Provider store={Store}>
      <DrawerNavigator/>
    </Provider>
  )
}
export default App;