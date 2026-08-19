import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [nationalId, setNationalId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // เข้าสู่ระบบชั่วคราวแล้วข้ามไปหน้า Main
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      {/* แถบสีเขียวท็อปบาร์ด้านบนสุด */}
      <View style={styles.topHeaderBar} />

      {/* ส่วนแสดงโลโก้ตรงกลาง */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoTitle}>Day One</Text>
          <Text style={styles.logoSubText}>CONSULT • SUPPORT • QUIT TOGETHER</Text>
        </View>
      </View>

      {/* ฟอร์มกรอกข้อมูล */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="เลขบัตรประชาชน"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={nationalId}
          onChangeText={setNationalId}
        />

        <TextInput
          style={styles.input}
          placeholder="รหัสผ่าน"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* ปุ่มกดคู่ด้านล่าง */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.actionButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.buttonText}>ลืมรหัสผ่าน</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCEB', // สีเขียวอ่อนมากตามแบบ
  },
  topHeaderBar: {
    height: 25,
    backgroundColor: '#A8BD86',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logoCircle: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#FFFFFF',
    borderWidth: 8,
    borderColor: '#A8BD86',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  logoTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2C402E',
  },
  logoSubText: {
    fontSize: 8,
    color: '#2C402E',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  formContainer: {
    paddingHorizontal: 30,
    marginTop: 50,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#3D4D28',
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  actionButton: {
    width: '48%',
    height: 48,
    backgroundColor: '#A8BD86',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#3D4D28',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#2C402E',
    fontWeight: '600',
  },
});