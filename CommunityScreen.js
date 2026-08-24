import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CommunityScreen() {
  const [activeTab, setActiveTab] = useState('ทั้งหมด');

  const posts = [
    {
      id: 1,
      user: 'Bill',
      content: 'ทุกคนเลิกได้ที่วันแล้วครับ',
      isUser: false,
    },
    {
      id: 2,
      user: 'Cat_2',
      content: 'ได้ประมาณ 40 วันแล้วครับ\nประหยัดเงินไป 2400 บาท',
      isUser: false,
    },
    {
      id: 3,
      user: 'Superman',
      content: 'ได้ประมาณ 40 วันแล้วครับ\nประหยัดเงินไป 2400 บาท',
      isUser: false,
    },
    {
      id: 4,
      user: 'Me',
      content: 'ผมพึ่งเลิกวันแรกครับ',
      isUser: true,
    },
    {
      id: 5,
      user: 'P9d',
      content: 'สู้ๆครับเป็นกำลังใจให้',
      isUser: false,
    },
    {
      id: 6,
      user: 'Me',
      content: 'ขอบคุณครับ',
      isUser: true,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>COMMUNITY</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* แถบ Tab ปุ่มเลือกหมวดหมู่ */}
        <View style={styles.tabRow}>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'ทั้งหมด' && styles.activeTab]}
            onPress={() => setActiveTab('ทั้งหมด')}
          >
            <Text style={styles.tabText}>ทั้งหมด</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'ขอกำลังใจ' && styles.activeTab]}
            onPress={() => setActiveTab('ขอกำลังใจ')}
          >
            <Text style={styles.tabText}>ขอกำลังใจ</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'แชร์ทริค' && styles.activeTab]}
            onPress={() => setActiveTab('แชร์ทริค')}
          >
            <Text style={styles.tabText}>แชร์ทริค</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        {/* รายการโพสต์ */}
        {posts.map((item) => {
          if (item.isUser) {
            // โพสต์ของฝั่งผู้ใช้ (กล่องสีเขียวเข้ม ชิดขวา)
            return (
              <View key={item.id} style={styles.userPostWrapper}>
                <View style={styles.userPostCard}>
                  <Text style={styles.postText}>{item.content}</Text>
                </View>
              </View>
            );
          }

          // โพสต์ของคนอื่น (กล่องสีเขียวอ่อน ชิดซ้าย พร้อมโปรไฟล์)
          return (
            <View key={item.id} style={styles.otherPostCard}>
              <View style={styles.userInfoRow}>
                <View style={styles.avatarCircle}>
                  <Ionicons name="person" size={24} color="#4A5A38" />
                </View>
                <Text style={styles.userNameText}>{item.user}</Text>
              </View>

              <Text style={styles.postText}>{item.content}</Text>

              <TouchableOpacity style={styles.heartIcon}>
                <Ionicons name="heart" size={16} color="#FF6B6B" />
              </TouchableOpacity>
            </View>
          );
        })}
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
    color: '#1C2819',
    letterSpacing: 1,
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  tabButton: {
    backgroundColor: '#D0DBB3',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 3,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#A8BD86',
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  divider: {
    height: 3,
    backgroundColor: '#000',
    marginBottom: 15,
  },
  otherPostCard: {
    backgroundColor: '#E2ECC8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4A5A38',
    padding: 12,
    marginBottom: 12,
    position: 'relative',
    maxWidth: '80%',
    alignSelf: 'flex-start',
    width: '100%',
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  avatarCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#D0DBB3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  userNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  postText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    lineHeight: 22,
  },
  heartIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  userPostWrapper: {
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  userPostCard: {
    backgroundColor: '#C5D6A4',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4A5A38',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
});