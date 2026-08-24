import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileTab')}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={24} color="#556B2F" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vape Quit</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="notifications-outline" size={24} color="#2C402E" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* ข้อความหัวข้อ */}
        <Text style={styles.subTitle}>คุณเลิกบุหรี่ไฟฟ้าไปแล้ว</Text>

        {/* วงกลมแสดงจำนวนวัน */}
        <View style={styles.daysCircleContainer}>
          <View style={styles.daysCircle}>
            <Text style={styles.daysNumber}>20 วัน</Text>
          </View>
        </View>

        {/* แสดงเงินที่ประหยัดได้ */}
        <Text style={styles.moneySavedText}>
          ประหยัดเงินไปแล้ว <Text style={styles.boldText}>1,200</Text> บาท
        </Text>

        {/* ปุ่มแอ็กชันด้านล่าง */}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>บันทึกความประพฤติ</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Trick')}
          >
            <View style={styles.btnContent}>
              <Text style={{ fontSize: 18, marginRight: 6 }}>💡</Text>
              <Text style={styles.actionButtonText}>ทริคประจำวัน</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCEB', // สีเขียวอ่อนมากตามแบบ
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#A8BD86',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1C2819',
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#A8BD86',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#2C402E',
  },
  content: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C402E',
    marginBottom: 30,
  },
  daysCircleContainer: {
    marginVertical: 10,
  },
  daysCircle: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#F7FCEB',
    borderWidth: 14,
    borderColor: '#A8BD86',
    justifyContent: 'center',
    alignItems: 'center',
  },
  daysNumber: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1C2819',
  },
  moneySavedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C2819',
    marginTop: 35,
    marginBottom: 25,
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  actionContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  actionButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#E2ECC8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C402E',
  },
});