import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen_A"
        drawerPosition="left"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor="#00000090"
        drawerStyle={{backgroundColor: '#e6e6e6', width: 250}}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            title: 'Screen A',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            title: 'Screen B',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
          initialParams={{ItemName: 'Item from Drawer', ItemId: 1}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

{
  /* <Tab.Navigator
  screenOptions={({route}) => ({
    tabBarIcon: ({focused, size, color}) => {
      let iconName;
      if (route.name === 'ScreenA') {
        iconName = 'autoprefixer';
        size = focused ? 25 : 20;
      } else if (route.name === 'ScreenB') {
        iconName = 'btc';
        size = focused ? 25 : 20;
      }
      return <FontAwesome5 name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: '#000',
    inactiveTineColor: '#299',
    activeBackgroundColor: '#fff',
    inactiveBackgroundColor: '#999',
    showLabel: true,
    labelStyle: {fontSize: 14},
    showIcon: true,
  }}
  activeColor="#f0edf6"
  inactiveColor="#3e2465"
  barStyle={{backgroundColor: '#694fad'}}>
  <Tab.Screen
    name="ScreenA"
    component={ScreenA}
    options={{tabBarBridge: 3}}
  />
  <Tab.Screen name="ScreenB" component={ScreenB} />
</Tab.Navigator>  */
}
