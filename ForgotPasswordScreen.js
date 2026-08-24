import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPasswordScreen({ navigation }) {
  const [method, setMethod] = useState('email'); // 'email' หรือ 'phone'
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ลืมรหัสผ่าน</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* โลโก้ Day One แบบวงกลม */}
        <View style={styles.logoCircleContainer}>
          <View style={styles.logoCircle}>
            <Ionicons name="person-circle-outline" size={70} color="#6B8E23" />
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#6B8E23" style={styles.chatIconOverlay} />
            <Text style={styles.logoTextTitle}>Day One</Text>
            <Text style={styles.logoTextSub}>CONSULT • SUPPORT • QUIT TOGETHER</Text>
          </View>
        </View>

        {/* คำอธิบาย */}
        <Text style={styles.descriptionText}>
          กรุณากรอกอีเมลหรือเบอร์โทรศัพท์{"\n"}ที่ใช้ลงทะเบียน เพื่อรับรหัสยืนยัน
        </Text>

        {/* ปุ่มเลือกรูปแบบการยืนยัน (อีเมล / เบอร์โทร) */}
        <View style={styles.toggleRow}>
          <TouchableOpacity
            style={[styles.toggleBtn, method === 'email' && styles.toggleBtnActive]}
            onPress={() => setMethod('email')}
          >
            <Ionicons name="mail" size={20} color="#000" style={{ marginRight: 6 }} />
            <Text style={styles.toggleBtnText}>อีเมล</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toggleBtn, method === 'phone' && styles.toggleBtnActive]}
            onPress={() => setMethod('phone')}
          >
            <Ionicons name="call-outline" size={20} color="#000" style={{ marginRight: 6 }} />
            <Text style={styles.toggleBtnText}>อีเมล</Text>
          </TouchableOpacity>
        </View>

        {/* ช่องกรอกข้อมูล */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={20} color="#000" style={styles.inputIcon} />
          <TextInput
            style={styles.textInput}
            placeholder={method === 'email' ? 'อีเมล' : 'เบอร์โทรศัพท์'}
            placeholderTextColor="#666"
            value={inputValue}
            onChangeText={setInputValue}
          />
        </View>

        {/* ปุ่มยืนยัน */}
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>ยืนยัน</Text>
        </TouchableOpacity>

        {/* เส้นคั่น หรือ */}
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>หรือ</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* ปุ่มกลับไปหน้าเข้าสู่ระบบ */}
        <TouchableOpacity
          style={styles.backToLoginBtn}
          onPress={() => navigation.navigate('Start')}
        >
          <Text style={styles.backToLoginText}>กลับไปหน้าเข้าสู่ระบบ</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCEB',
  },
  header: {
    backgroundColor: '#A8BD86',
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  logoCircleContainer: {
    marginVertical: 10,
  },
  logoCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: '#A8BD86',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  chatIconOverlay: {
    position: 'absolute',
    top: 50,
    right: 55,
  },
  logoTextTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C402E',
    marginTop: -5,
  },
  logoTextSub: {
    fontSize: 7,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 2,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: 22,
    marginVertical: 15,
  },
  toggleRow: {
    flexDirection: 'row',
    backgroundColor: '#E2ECC8',
    borderRadius: 25,
    padding: 4,
    width: '100%',
    marginBottom: 15,
  },
  toggleBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 20,
  },
  toggleBtnActive: {
    backgroundColor: '#A8BD86',
  },
  toggleBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#000',
    width: '100%',
    paddingHorizontal: 15,
    height: 48,
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  submitBtn: {
    backgroundColor: '#A8BD86',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#000',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 15,
  },
  dividerLine: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#888',
  },
  dividerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 10,
  },
  backToLoginBtn: {
    backgroundColor: '#A8BD86',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#000',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backToLoginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});