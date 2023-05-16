import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { useState, useEffect } from 'react'
import { Platform, StyleSheet } from 'react-native'
import Icon, { Icons } from '../../../constants/Icons';
import DrawerScreen from '../../DrawerScreen';
import CustomDrawerAdmin from './CustomDrawerAdmin';
import AdminM from '../Pagesadmin/AdminM';
import AgentService from '../../../services/agentService';
import AdminMC from '../Pagesadmin/AdminMC';
import AccountManagement from '../Pagesadmin/AccountManagement';
import AccueilScreen from '../../AccueilScreen';

const Drawer = createDrawerNavigator();

const DrawerNavAdmin = () => {
  const agentService = new AgentService()
  const [nb, setNb] = useState(0);

  const privilege = 1
  useEffect(() => {
    // nbnotif();
    // const intervalId = setInterval(nbnotif, 1000);
    // return () => clearInterval(intervalId);
  }, []);
  const ScreensArrayAdmin = [
    { route: 'Home', label: 'المنزل', type: Icons.Feather, icon: 'home', component: AccueilScreen, },
    { route: 'Notifications', label: 'الإشعارات', type: Icons.Ionicons, icon: 'notifications', component: DrawerScreen, notification: nb, },
    { route: 'Cloud', label: 'الطقس', type: Icons.FontAwesome5, icon: 'cloud-sun', component: DrawerScreen, },
    { route: 'Chat', label: 'الرسائل', type: Icons.AntDesign, icon: 'wechat', component: DrawerScreen, },
    { route: 'AdminM', label: 'إدارة المستخدمين', type: Icons.MaterialIcons, icon: 'admin-panel-settings', component: AdminM, },
    { route: 'AdminMC', label: 'إدارة الأماكن', type: Icons.MaterialIcons, icon: 'local-library', component: AdminMC, },
    { route: 'Settings', label: 'إدارة الحساب', type: Icons.Feather, icon: 'settings', component: AccountManagement, },
  ];
  return (
    <Drawer.Navigator
      initialRouteName="Home" // the initial route name
      screenOptions={{
        drawerStyle: styles.drawerStyles,
        drawerType: 'front',
        swipeEdgeWidth: Platform.OS === 'android' && 180,
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerAdmin {...props} />}
    >
      {ScreensArrayAdmin.map((_, i) => (
        <Drawer.Screen key={i} name={_.route} component={_.component}
          options={{
            item: _,
          }}
        />
      ))}

    </Drawer.Navigator>
  )
}

export default DrawerNavAdmin

const styles = StyleSheet.create({
  drawerStyles: {
    width: 260,
    backgroundColor: 'transparent',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
})