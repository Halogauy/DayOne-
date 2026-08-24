import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* ส่วนครึ่งบนที่เป็นโค้งทรงหยดน้ำสีเขียวปานกลาง */}
      <View style={styles.topCurvedSection}>
        {/* วงกลมโลโก้ */}
        <View style={styles.logoCircle}>
          {/* สามารถเปลี่ยนเป็น <Image source={require('../assets/logo.png')} style={styles.logoImage} /> ได้ */}
          <Text style={styles.logoTitle}>Day One</Text>
          <Text style={styles.logoSubText}>CONSULT • SUPPORT • QUIT TOGETHER</Text>
        </View>

        {/* ข้อความต้อนรับด้านล่างโลโก้ */}
        <Text style={styles.welcomeText}>
          เริ่มต้นวันแรกสู่ชีวิต{"\n"}ที่ดีกว่าเดิม!
        </Text>
      </View>

      {/* ปุ่มด้านล่างบนพื้นหลังสีเขียวอ่อนมาก */}
      <View style={styles.bottomSection}>
        <TouchableOpacity 
          style={styles.pillButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>เริ่มต้นใช้งาน</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.pillButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCEB', // สีเขียวอ่อนมากตามแบบ
  },
  topCurvedSection: {
    backgroundColor: '#C5D6A4', // สีเขียวปานกลาง
    borderBottomLeftRadius: 160,
    borderBottomRightRadius: 160,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    height: '68%',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#FFFFFF',
    borderWidth: 6,
    borderColor: '#A4B882',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  logoTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#2C402E',
  },
  logoSubText: {
    fontSize: 7,
    color: '#2C402E',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5C6D46',
    textAlign: 'center',
    marginTop: 35,
    lineHeight: 32,
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    paddingBottom: 20,
  },
  pillButton: {
    width: '75%',
    height: 52,
    backgroundColor: '#A8BD86', // สีเขียวปุ่ม
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#3D4D28', // ขอบเข้ม
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});