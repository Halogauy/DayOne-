import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Consult() {

  const [search, setSearch] = useState('');

  const doctors = [
    {
      id: 1,
      name: 'นพ.กิตติพงษ์',
      specialty: 'แพทย์ผู้เชี่ยวชาญด้านการเลิกบุหรี่',
      hospital: 'โรงพยาบาลชั้นนำ',
      experience: 'ประสบการณ์ 12 ปี',
      online: true,
      icon: 'doctor',
    },
    {
      id: 2,
      name: 'พญ.ณัฐชา',
      specialty: 'ผู้เชี่ยวชาญด้านสุขภาพและพฤติกรรม',
      hospital: 'ศูนย์ให้คำปรึกษาสุขภาพ',
      experience: 'ประสบการณ์ 9 ปี',
      online: true,
      icon: 'doctor',
    },
    {
      id: 3,
      name: 'นพ.ธนกร',
      specialty: 'แพทย์เวชศาสตร์ป้องกัน',
      hospital: 'คลินิกเลิกบุหรี่',
      experience: 'ประสบการณ์ 15 ปี',
      online: false,
      icon: 'doctor',
    },
  ];

  const filteredDoctors = doctors.filter((doctor) =>
    `${doctor.name} ${doctor.specialty}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      {/* ================= HEADER ================= */}

      <View style={styles.header}>

        <View>
          <Text style={styles.headerTitle}>
            ปรึกษาผู้เชี่ยวชาญ
          </Text>

          <Text style={styles.headerSubtitle}>
            ขอคำแนะนำจากผู้เชี่ยวชาญด้านสุขภาพ
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <MaterialCommunityIcons
            name="doctor"
            size={27}
            color="#596B43"
          />
        </View>

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* ================= INTRO CARD ================= */}

        <View style={styles.introCard}>

          <View style={styles.introIcon}>

            <MaterialCommunityIcons
              name="message-text-outline"
              size={30}
              color="#596B43"
            />

          </View>

          <View style={styles.introText}>

            <Text style={styles.introTitle}>
              ต้องการคำปรึกษา?
            </Text>

            <Text style={styles.introDescription}>
              พูดคุยกับผู้เชี่ยวชาญเพื่อรับคำแนะนำ
              ที่เหมาะกับคุณ
            </Text>

          </View>

        </View>

        {/* ================= SEARCH ================= */}

        <View style={styles.searchBox}>

          <MaterialCommunityIcons
            name="magnify"
            size={22}
            color="#7B846D"
          />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="ค้นหาผู้เชี่ยวชาญ..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />

          {search.length > 0 && (

            <TouchableOpacity
              onPress={() => setSearch('')}
            >

              <MaterialCommunityIcons
                name="close-circle"
                size={19}
                color="#999"
              />

            </TouchableOpacity>

          )}

        </View>

        {/* ================= QUICK CATEGORY ================= */}

        <Text style={styles.sectionTitle}>
          เลือกหัวข้อที่ต้องการปรึกษา
        </Text>

        <View style={styles.categoryGrid}>

          <TouchableOpacity style={styles.categoryCard}>

            <View style={styles.categoryIcon}>

              <MaterialCommunityIcons
                name="smoking-off"
                size={24}
                color="#596B43"
              />

            </View>

            <Text style={styles.categoryTitle}>
              เลิกบุหรี่ไฟฟ้า
            </Text>

            <Text style={styles.categorySubtitle}>
              อาการอยากสูบและการเลิก
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>

            <View style={styles.categoryIcon}>

              <MaterialCommunityIcons
                name="brain"
                size={24}
                color="#596B43"
              />

            </View>

            <Text style={styles.categoryTitle}>
              สุขภาพจิต
            </Text>

            <Text style={styles.categorySubtitle}>
              ความเครียดและพฤติกรรม
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>

            <View style={styles.categoryIcon}>

              <MaterialCommunityIcons
                name="heart-pulse"
                size={24}
                color="#596B43"
              />

            </View>

            <Text style={styles.categoryTitle}>
              สุขภาพร่างกาย
            </Text>

            <Text style={styles.categorySubtitle}>
              ผลกระทบต่อร่างกาย
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>

            <View style={styles.categoryIcon}>

              <MaterialCommunityIcons
                name="help-circle-outline"
                size={24}
                color="#596B43"
              />

            </View>

            <Text style={styles.categoryTitle}>
              อื่น ๆ
            </Text>

            <Text style={styles.categorySubtitle}>
              เรื่องที่ต้องการคำแนะนำ
            </Text>

          </TouchableOpacity>

        </View>

        {/* ================= DOCTORS ================= */}

        <View style={styles.doctorHeader}>

          <Text style={styles.sectionTitle}>
            ผู้เชี่ยวชาญของเรา
          </Text>

          <Text style={styles.doctorCount}>
            {filteredDoctors.length} คน
          </Text>

        </View>

        {filteredDoctors.map((doctor) => (

          <View
            key={doctor.id}
            style={styles.doctorCard}
          >

            {/* DOCTOR INFO */}

            <View style={styles.doctorTop}>

              <View style={styles.doctorAvatar}>

                <MaterialCommunityIcons
                  name="doctor"
                  size={30}
                  color="#F7FCEF"
                />

                {doctor.online && (
                  <View style={styles.onlineDot} />
                )}

              </View>

              <View style={styles.doctorInfo}>

                <View style={styles.doctorNameRow}>

                  <Text style={styles.doctorName}>
                    {doctor.name}
                  </Text>

                  {doctor.online && (

                    <View style={styles.onlineBadge}>

                      <View style={styles.smallOnlineDot} />

                      <Text style={styles.onlineText}>
                        ออนไลน์
                      </Text>

                    </View>

                  )}

                </View>

                <Text style={styles.specialty}>
                  {doctor.specialty}
                </Text>

                <Text style={styles.hospital}>
                  {doctor.hospital}
                </Text>

              </View>

            </View>

            {/* EXPERIENCE */}

            <View style={styles.doctorDetails}>

              <View style={styles.detailItem}>

                <MaterialCommunityIcons
                  name="briefcase-outline"
                  size={17}
                  color="#7A8965"
                />

                <Text style={styles.detailText}>
                  {doctor.experience}
                </Text>

              </View>

              <View style={styles.detailItem}>

                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={17}
                  color="#7A8965"
                />

                <Text style={styles.detailText}>
                  ผู้เชี่ยวชาญ
                </Text>

              </View>

            </View>

            {/* BUTTON */}

            <TouchableOpacity
              style={[
                styles.consultButton,
                !doctor.online &&
                  styles.consultButtonOffline,
              ]}
            >

              <MaterialCommunityIcons
                name={
                  doctor.online
                    ? 'message-text-outline'
                    : 'calendar-clock'
                }
                size={18}
                color={
                  doctor.online
                    ? '#FFFFFF'
                    : '#596B43'
                }
              />

              <Text
                style={[
                  styles.consultButtonText,
                  !doctor.online &&
                    styles.consultButtonTextOffline,
                ]}
              >
                {doctor.online
                  ? 'เริ่มปรึกษา'
                  : 'นัดหมายล่วงหน้า'}
              </Text>

            </TouchableOpacity>

          </View>

        ))}

        {/* ================= SECURITY ================= */}

        <View style={styles.securityCard}>

          <MaterialCommunityIcons
            name="shield-lock-outline"
            size={25}
            color="#596B43"
          />

          <View style={styles.securityText}>

            <Text style={styles.securityTitle}>
              ข้อมูลของคุณปลอดภัย
            </Text>

            <Text style={styles.securityDescription}>
              การสนทนากับผู้เชี่ยวชาญเป็นความลับ
              และข้อมูลจะถูกใช้เพื่อการให้คำปรึกษาเท่านั้น
            </Text>

          </View>

        </View>

        <View style={styles.bottomSpace} />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7FCEF',
  },

  /* ================= HEADER ================= */

  header: {
    backgroundColor: '#AEC18D',

    paddingHorizontal: 18,
    paddingTop: 17,
    paddingBottom: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    fontSize: 21,
    fontWeight: '900',
    color: '#111',
  },

  headerSubtitle: {
    fontSize: 11,
    color: '#4F5B42',
    marginTop: 3,
  },

  headerIcon: {
    width: 45,
    height: 45,

    borderRadius: 23,

    backgroundColor: '#DCE7C6',

    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ================= CONTENT ================= */

  content: {
    paddingHorizontal: 12,
    paddingTop: 13,
  },

  /* ================= INTRO ================= */

  introCard: {
    backgroundColor: '#E6EFD6',

    borderRadius: 15,

    padding: 15,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 13,
  },

  introIcon: {
    width: 51,
    height: 51,

    borderRadius: 26,

    backgroundColor: '#F7FCEF',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 12,
  },

  introText: {
    flex: 1,
  },

  introTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#263120',
  },

  introDescription: {
    fontSize: 11,
    lineHeight: 17,

    color: '#59614E',

    marginTop: 3,
  },

  /* ================= SEARCH ================= */

  searchBox: {
    height: 46,

    backgroundColor: '#FFFFFF',

    borderRadius: 23,

    borderWidth: 1,
    borderColor: '#DCE2D2',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 15,

    marginBottom: 18,
  },

  searchInput: {
    flex: 1,

    height: 44,

    fontSize: 13,
    color: '#222',

    marginLeft: 8,
  },

  /* ================= SECTION ================= */

  sectionTitle: {
    fontSize: 16,

    fontWeight: '900',

    color: '#222',

    marginBottom: 10,
  },

  /* ================= CATEGORY ================= */

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',

    marginBottom: 19,
  },

  categoryCard: {
    width: '48.5%',

    backgroundColor: '#FFFFFF',

    borderRadius: 13,

    borderWidth: 1,
    borderColor: '#E0E5D6',

    padding: 12,

    marginBottom: 9,
  },

  categoryIcon: {
    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: '#E8F0DB',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 8,
  },

  categoryTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#333',
  },

  categorySubtitle: {
    fontSize: 9,
    color: '#888',

    marginTop: 3,

    lineHeight: 13,
  },

  /* ================= DOCTORS ================= */

  doctorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  doctorCount: {
    fontSize: 11,
    color: '#7A8965',

    marginBottom: 10,
  },

  doctorCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    borderWidth: 1,
    borderColor: '#E0E5D6',

    padding: 14,

    marginBottom: 10,
  },

  doctorTop: {
    flexDirection: 'row',
  },

  doctorAvatar: {
    width: 55,
    height: 55,

    borderRadius: 28,

    backgroundColor: '#7F9564',

    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },

  onlineDot: {
    position: 'absolute',

    right: 0,
    bottom: 1,

    width: 14,
    height: 14,

    borderRadius: 7,

    backgroundColor: '#45B96B',

    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  doctorInfo: {
    flex: 1,

    marginLeft: 11,
  },

  doctorNameRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 3,
  },

  doctorName: {
    fontSize: 14,
    fontWeight: '900',
    color: '#222',
  },

  onlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#E4F5E8',

    borderRadius: 10,

    paddingHorizontal: 6,
    paddingVertical: 3,

    marginLeft: 6,
  },

  smallOnlineDot: {
    width: 6,
    height: 6,

    borderRadius: 3,

    backgroundColor: '#45B96B',

    marginRight: 4,
  },

  onlineText: {
    fontSize: 8,
    fontWeight: '800',

    color: '#399052',
  },

  specialty: {
    fontSize: 10,

    color: '#555',

    lineHeight: 15,
  },

  hospital: {
    fontSize: 9,

    color: '#888',

    marginTop: 2,
  },

  /* ================= DETAILS ================= */

  doctorDetails: {
    flexDirection: 'row',

    marginTop: 12,
    marginBottom: 11,

    paddingTop: 10,

    borderTopWidth: 1,
    borderTopColor: '#EDF0E9',
  },

  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',

    marginRight: 18,
  },

  detailText: {
    fontSize: 9,

    color: '#777',

    marginLeft: 5,
  },

  /* ================= BUTTON ================= */

  consultButton: {
    height: 42,

    borderRadius: 21,

    backgroundColor: '#8DA66D',

    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },

  consultButtonOffline: {
    backgroundColor: '#E8EEDC',

    borderWidth: 1,
    borderColor: '#B8C7A2',
  },

  consultButtonText: {
    fontSize: 12,

    fontWeight: '900',

    color: '#FFFFFF',

    marginLeft: 6,
  },

  consultButtonTextOffline: {
    color: '#596B43',
  },

  /* ================= SECURITY ================= */

  securityCard: {
    backgroundColor: '#EDF3E5',

    borderRadius: 13,

    padding: 13,

    flexDirection: 'row',

    alignItems: 'flex-start',

    marginTop: 5,
  },

  securityText: {
    flex: 1,

    marginLeft: 9,
  },

  securityTitle: {
    fontSize: 12,

    fontWeight: '900',

    color: '#596B43',
  },

  securityDescription: {
    fontSize: 9,

    lineHeight: 14,

    color: '#727A68',

    marginTop: 3,
  },

  bottomSpace: {
    height: 25,
  },

});
