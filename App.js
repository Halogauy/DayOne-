import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import หน้าจอต่าง ๆ
import StartScreen from './Screens/StartScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/Consult';
import NotificationsScreen from './Screens/NotificationsScreen';
import ProfileScreen from './Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

// ----- ส่วนของ Bottom Tab (หน้าหลังจาก Login แล้ว) -----
function MainTabs() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';                    // 🏠 บ้าน
            } else if (route.name === 'Search') {
              iconName = 'chatbubbles-outline';     // 💬 แชท
            } else if (route.name === 'Notifications') {
              iconName = 'document-text-outline';   // 📄 บันทึก
            } else if (route.name === 'Profile') {
              iconName = 'person-circle-outline';   // 👤 โปรไฟล์
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2C402E',   // สีไอคอน/ตัวอักษรเมื่อเลือก (เขียวเข้ม)
          tabBarInactiveTintColor: '#5C6D46', // สีไอคอน/ตัวอักษรเมื่อไม่ได้เลือก
          tabBarStyle: {
            backgroundColor: '#C5D6A4',       // พื้นหลังแท็บบาร์สีเขียว
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 6,
            paddingTop: 6,
          },
          tabBarShowLabel: false,             // ซ่อนตัวอักษร แสดงแค่ไอคอน เหมือนภาพ
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ----- App หลัก: สลับหน้าด้วย State (ไม่ใช้ Stack Navigator) -----
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Start');

  const navigation = {
    navigate: (screenName) => setCurrentScreen(screenName),
  };

  switch (currentScreen) {
    case 'Start':
      return <StartScreen navigation={navigation} />;
    case 'Login':
      return <LoginScreen navigation={navigation} />;
    case 'ForgotPassword':
      return <LoginScreen navigation={navigation} />;
    case 'Main':
      return <MainTabs />;
    default:
      return <StartScreen navigation={navigation} />;
  }
}
