import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ConsultScreen({ navigation }) {
  const [activeFilter, setActiveFilter] = useState('ทั้งหมด');

  const doctorList = [
    {
      id: 1,
      name: 'หมอพญ. สมปอน',
      specialty: 'หมอเฉพาะทางปอด',
    },
    {
      id: 2,
      name: 'หมอพญ. สมหมาย',
      specialty: 'หมอเฉพาะทางจิตแพทย์',
    },
    {
      id: 3,
      name: 'หมอพญ. สมหมาย',
      specialty: 'หมอโรคระบบทางเดิน\nหายใจและปอด',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CONSULT</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* ช่องค้นหา */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#666" style={{ marginRight: 8 }} />
          <TextInput 
            placeholder="ค้นหาผู้เชี่ยวชาญ..." 
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>

        {/* แถบตัวกรอง (Filter Chips) */}
        <View style={styles.filterRow}>
          <TouchableOpacity 
            style={[styles.filterChip, activeFilter === 'เลิกบุหรี่' && styles.activeChip]}
            onPress={() => setActiveFilter('เลิกบุหรี่')}
          >
            <Text style={styles.filterText}>เลิกบุหรี่</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.filterChip, activeFilter === 'นักจิตวิทยา' && styles.activeChip]}
            onPress={() => setActiveFilter('นักจิตวิทยา')}
          >
            <Text style={styles.filterText}>นักจิตวิทยา</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        {/* รายชื่อแพทย์ */}
        {doctorList.map((doctor) => (
          <View key={doctor.id} style={styles.doctorCard}>
            <View style={styles.doctorInfoRow}>
              <View style={styles.doctorAvatar}>
                <Ionicons name="person" size={36} color="#4A5A38" />
              </View>
              <View style={styles.doctorTextDetails}>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
              </View>
            </View>

            {/* ปุ่มกดใต้การ์ดหมอ */}
            <View style={styles.cardActionRow}>
              <TouchableOpacity 
                style={styles.cardBtn}
                onPress={() => navigation.navigate('Chat', { doctorName: doctor.name })}
              >
                <Ionicons name="chatbox-ellipses-outline" size={16} color="#000" style={{ marginRight: 4 }} />
                <Text style={styles.cardBtnText}>ส่งข้อความ</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardBtn}>
                <Ionicons name="calendar-outline" size={16} color="#000" style={{ marginRight: 4 }} />
                <Text style={styles.cardBtnText}>นัดหมาย</Text>
              </TouchableOpacity>
            </View>
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
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3D4D28',
    paddingHorizontal: 12,
    height: 42,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  filterRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  filterChip: {
    backgroundColor: '#E2ECC8',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
  },
  activeChip: {
    backgroundColor: '#C5D6A4',
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1C2819',
  },
  divider: {
    height: 2,
    backgroundColor: '#000',
    marginVertical: 8,
  },
  doctorCard: {
    backgroundColor: '#E2ECC8',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4A5A38',
    padding: 12,
    marginBottom: 12,
  },
  doctorInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  doctorAvatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#D0DBB3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  doctorTextDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C2819',
  },
  doctorSpecialty: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1C2819',
    marginTop: 2,
    lineHeight: 18,
  },
  cardActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  cardBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  cardBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
});