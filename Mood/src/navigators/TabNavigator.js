import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddMoodScreen from '../screens/AddMoodScreen';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const navigation = useNavigation();
  const currentUser = auth.currentUser;
  const handleProfileNavigation = () => {
    if (currentUser) {
        navigation.navigate('ProfileLogin', { userId: currentUser.uid });
    } else {
        navigation.navigate('Profile');
    }
};
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Add') iconName = 'add-circle';
            else if (route.name === 'Profile') iconName = 'person-circle';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            height: 70, // Adjust this value as needed
            paddingBottom: 10,
            paddingTop: 10,
            backgroundColor: '#FFF5F2',
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddMoodScreen} />
        <Tab.Screen name="Profile" component={handleProfileNavigation} />

      </Tab.Navigator>

  );
}
