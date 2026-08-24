import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatScreen({ route, navigation }) {
  const doctorName = route?.params?.doctorName || 'หมอพญ.สมหมาย';
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Header Bar ด้านบนสุด */}
      <TouchableOpacity style={styles.backHeader} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={20} color="#000" />
        <Text style={styles.backHeaderText}>ย้อนกลับ</Text>
      </TouchableOpacity>

      {/* แถบข้อมูลหมอ + ปุ่มโทร */}
      <View style={styles.doctorHeaderRow}>
        <View style={styles.doctorInfoLeft}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={32} color="#4A5A38" />
          </View>
          <View>
            <Text style={styles.doctorNameText}>{doctorName}</Text>
            <Text style={styles.onlineStatus}>(ออนไลน์)</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.callButton}>
          <Ionicons name="call-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* รายการแชท */}
      <ScrollView contentContainerStyle={styles.chatContent}>
        {/* ข้อความฝั่งหมอ */}
        <View style={styles.doctorMsgContainer}>
          <View style={styles.doctorMsgHeader}>
            <View style={styles.smallAvatar}>
              <Ionicons name="person" size={16} color="#4A5A38" />
            </View>
            <Text style={styles.doctorMsgName}>{doctorName}</Text>
          </View>
          <Text style={styles.doctorMsgSub}>(ออนไลน์)</Text>
          
          <View style={styles.doctorBubble}>
            <Text style={styles.doctorBubbleText}>
              สวัสดีค่ะ{"\n"}วันนี้มีความรู้สึกอย่างไรบ้างคะ
            </Text>
          </View>
        </View>

        {/* ข้อความฝั่งผู้ใช้ (ขวา) */}
        <View style={styles.userMsgContainer}>
          <View style={styles.userBubble}>
            <Text style={styles.userBubbleText}>รู้สึกเครียด อยากสูบมากครับ</Text>
          </View>
        </View>
      </ScrollView>

      {/* แถบพิมพ์ข้อความด้านล่าง */}
      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="image-outline" size={24} color="#000" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="ส่งข้อความ"
          placeholderTextColor="#555"
          value={inputText}
          onChangeText={setInputText}
        />

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="mic-outline" size={24} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="send" size={22} color="#000" />
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
  backHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A8BD86',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  backHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 6,
  },
  doctorHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#F7FCEB',
  },
  doctorInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D0DBB3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  doctorNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  onlineStatus: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  callButton: {
    padding: 6,
  },
  divider: {
    height: 3,
    backgroundColor: '#000',
  },
  chatContent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  doctorMsgContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  doctorMsgHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallAvatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#D0DBB3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  doctorMsgName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  doctorMsgSub: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 32,
    marginTop: -2,
    marginBottom: 6,
  },
  doctorBubble: {
    backgroundColor: '#E2ECC8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4A5A38',
    paddingHorizontal: 14,
    paddingVertical: 10,
    maxWidth: '80%',
  },
  doctorBubbleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    lineHeight: 22,
  },
  userMsgContainer: {
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  userBubble: {
    backgroundColor: '#C5D6A4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4A5A38',
    paddingHorizontal: 14,
    paddingVertical: 10,
    maxWidth: '80%',
  },
  userBubbleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A8BD86',
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 6,
  },
  input: {
    flex: 1,
    height: 38,
    backgroundColor: '#D0DBB3',
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  iconBtn: {
    padding: 4,
  },
});