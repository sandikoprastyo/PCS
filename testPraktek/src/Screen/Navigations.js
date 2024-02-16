import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import Notif from './Notif';
import Attendance from './Attendance';
import Checkouts from './Checkouts';
import Form from './Form';
import Setting from './Setting';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={Attendance}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Checkouts"
        component={Checkouts}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Form"
        component={Form}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="view-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigations() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notif"
          component={Notif}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

export default Navigations;
