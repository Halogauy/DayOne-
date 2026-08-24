import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import หน้าจอจากโฟลเดอร์ frontend
import StartScreen from './frontend/StartScreen';
import LoginScreen from './frontend/LoginScreen';
import ForgotPasswordScreen from './frontend/ForgotPasswordScreen';
import HomeScreen from './frontend/HomeScreen';
import TrickScreen from './frontend/TrickScreen';
import ConsultScreen from './frontend/ConsultScreen';
import ChatScreen from './frontend/ChatScreen';
import CommunityScreen from './frontend/CommunityScreen';
import ProfileScreen from './frontend/ProfileScreen';
import AccountScreen from './frontend/AccountScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// เมนูด้านล่าง (Bottom Tab Navigation)
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#7CB342', // สีเขียวหลักของ Day One
        tabBarInactiveTintColor: '#888888',
        tabBarStyle: { height: 60, paddingBottom: 8, backgroundColor: '#E8F5E9' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'ConsultTab') iconName = focused ? 'medical' : 'medical-outline';
          else if (route.name === 'CommunityTab') iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          else if (route.name === 'ProfileTab') iconName = focused ? 'person' : 'person-outline';
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'หน้าแรก' }} />
      <Tab.Screen name="ConsultTab" component={ConsultScreen} options={{ title: 'ปรึกษา' }} />
      <Tab.Screen name="CommunityTab" component={CommunityScreen} options={{ title: 'ชุมชน' }} />
      <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ title: 'โปรไฟล์' }} />
    </Tab.Navigator>
  );
}

// ระบบจัดการเปลี่ยนหน้าทั้งหมดในแอป (Stack Navigation)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        {/* กลุ่มหน้ายืนยันตัวตน */}
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        
        {/* กลุ่มหน้าหลัก (ที่มี Bottom Tabด้านล่าง) */}
        <Stack.Screen name="Main" component={MainTabNavigator} />

        {/* หน้าจออื่น ๆ ที่เรียกจากในแอป */}
        <Stack.Screen name="Trick" component={TrickScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}