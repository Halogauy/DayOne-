import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TrickScreen({ navigation }) {
  const tricks = [
    {
      id: 1,
      title: 'ทริควันนี้: "กฎ 5 นาที"',
      detail: 'อยากสูบใช่ไหม? อั้นไว้ 5 นาที ไปดื่มน้ำเย็นเฉียบให้ชื่นใจ แล้วความอยากจะลดลงเอง',
    },
    {
      id: 2,
      title: 'ทริควันนี้: "หายใจไล่นิโคติน"',
      detail: 'หายใจเข้าลึกๆ กลั้นไว้ 4 วิ ผ่อนออกช้าๆ ทำ 3 รอบ สมองโล่งแทนการพึ่งบุหรี่แน่นอน',
    },
    {
      id: 3,
      title: 'ทริควันนี้: "หาไรทำแก้เขิน"',
      detail: 'ที่จริงแกแค่ติดพฤติกรรมมือว่างลองควงปากกา บีบลูกบอล หรือเคี้ยวหมากฝรั่งดู สู้เขา!',
    },
    {
      id: 4,
      title: 'ทริควันนี้: "ดูเงินในบัญชีดิ"',
      detail: 'เลิกมาได้ตั้ง 20 วัน ประหยัดไป 1,200 บาทแล้วนะ จะยอมกลับไปเสียเงินฟรีหรอ?',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ทริคประจำวัน</Text>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {tricks.map((item) => (
          <View key={item.id} style={styles.trickCard}>
            <View style={styles.titleRow}>
              <Text style={{ fontSize: 18, marginRight: 6 }}>💡</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
            <Text style={styles.cardDetail}>{item.detail}</Text>
          </View>
        ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#A8BD86',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  backBtn: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 15,
    gap: 12,
  },
  trickCard: {
    backgroundColor: '#B4C693',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#000',
    padding: 15,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  cardDetail: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    lineHeight: 20,
  },
});