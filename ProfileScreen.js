import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
  const menuList = [
    { title: 'บัญชี & ความปลอดภัย', routeName: 'Account' },
    { title: 'ที่อยู่', routeName: '' },
    { title: 'นโยบายของ Day One', routeName: '' },
    { title: 'ศูนย์ช่วยเหลือ', routeName: '' },
    { title: 'การแจ้งเตือน', routeName: '' },
  ];

  return (
    <View style={styles.container}>
      {/* Header Bar สีเขียวเข้มด้านบนสุด */}
      <View style={styles.topHeaderBar} />

      <ScrollView contentContainerStyle={styles.content}>
        {/* ส่วนข้อมูลโปรไฟล์ */}
        <View style={styles.profileSection}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={56} color="#4A5A38" />
          </View>
          <Text style={styles.profileTitle}>PROFILE</Text>
          <Text style={styles.profileName}>นาย สมรู้ มือปืน</Text>
        </View>

        {/* รายการเมนู */}
        <View style={styles.menuContainer}>
          {menuList.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                index === menuList.length - 1 && styles.lastMenuItem,
              ]}
              onPress={() => item.routeName && navigation.navigate(item.routeName)}
            >
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* ปุ่ม Log out ด้านล่าง */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Start')}
        >
          <Ionicons name="exit-outline" size={24} color="#000" style={{ marginRight: 8 }} />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCEB',
  },
  topHeaderBar: {
    height: 35,
    backgroundColor: '#A8BD86',
  },
  content: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarCircle: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: '#D0DBB3',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#A8BD86',
    marginBottom: 8,
  },
  profileTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
  menuContainer: {
    backgroundColor: '#D5E2B5',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#000',
    overflow: 'hidden',
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1.5,
    borderColor: '#000',
    backgroundColor: '#D5E2B5',
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  logoutContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D5E2B5',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});