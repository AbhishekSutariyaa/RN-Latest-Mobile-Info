import * as React from 'react';
import {Button, View, TouchableOpacity, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import MobileCategory from './MobileCategory';
import Cart from './Cart';
import CategoryDetail from './CategoryDetail';
import DeviceDetail from './DeviceDetail';
import {COLORS} from '../Theme';

const Stack = createStackNavigator();

const CategoryRoute = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={MobileCategory}
        options={{
          headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
          headerLeft: () => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}
              onPress={() => props.navigation.openDrawer()}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../assets/menu.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
      <Stack.Screen name="DeviceDetail" component={DeviceDetail} />
    </Stack.Navigator>
  );
};

const CartRoute = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title:"Favorite",
          headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
          headerLeft: () => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}
              onPress={() => props.navigation.openDrawer()}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../assets/menu.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="DeviceDetail" component={DeviceDetail} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <Drawer.Navigator initialRouteName="MobileCategory">
      <Drawer.Screen name="MobileCategory" component={CategoryRoute} />
      <Drawer.Screen name="Favorite" component={CartRoute} />
    </Drawer.Navigator>
  );
}
