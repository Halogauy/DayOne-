import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>บัญชี & ความปลอดภัย</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* ตารางข้อมูลบัญชีผู้ใช้ */}
        <View style={styles.tableBox}>
          {/* หัวข้อตาราง */}
          <View style={[styles.tableRow, styles.tableHeaderRow]}>
            <Text style={styles.tableHeaderText}>บัญชีผู้ใช้</Text>
          </View>

          {/* แถวที่ 1: ชื่อผู้ใช้ */}
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>ชื่อผู้ใช้</Text>
            <Text style={styles.valueCell}>นายสมรู้ มือปืน</Text>
          </View>

          {/* แถวที่ 2: อีเมล */}
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>อีเมล</Text>
            <Text style={styles.valueCell}>s*********@gmail.com</Text>
          </View>

          {/* แถวที่ 3: โทรศัพท์ */}
          <View style={styles.tableRow}>
            <Text style={styles.labelCell}>โทรศัพท์</Text>
            <Text style={styles.valueCell}>*******004</Text>
          </View>

          {/* แถวที่ 4: เปลี่ยนรหัสผ่าน */}
          <TouchableOpacity style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.labelCell}>เปลี่ยนรหัสผ่าน</Text>
            <Text style={styles.valueCell}></Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#A8BD86',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  backBtn: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    padding: 15,
  },
  tableBox: {
    backgroundColor: '#D5E2B5',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#000',
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderBottomWidth: 1.5,
    borderColor: '#000',
    backgroundColor: '#D5E2B5',
  },
  tableHeaderRow: {
    backgroundColor: '#C5D6A4',
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  labelCell: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  valueCell: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});