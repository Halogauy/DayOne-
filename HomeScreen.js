
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <MaterialCommunityIcons
            name="account"
            size={24}
            color="#F1F1F1"
          />
        </View>

        <Text style={styles.headerTitle}>
          Vape Quit
        </Text>

        <View style={styles.bellCircle}>
          <MaterialCommunityIcons
            name="bell"
            size={22}
            color="#5C6788"
          />
        </View>
      </View>

      {/* เนื้อหา */}
      <View style={styles.content}>

        <Text style={styles.subtitle}>
          คุณเลิกบุหรี่ไฟฟ้าไปแล้ว
        </Text>

        {/* วงกลม */}
        <View style={styles.dayCircle}>
          <Text style={styles.dayText}>
            20 วัน
          </Text>
        </View>

        <Text style={styles.savingText}>
          ประหยัดเงินไปแล้ว 1,200 บาท
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            บันทึกความประพฤติ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            💡 เทคนิคประจำวัน
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCEF',
  },

  /* Header เต็มจอ */
  header: {
    height: 58,
    width: '100%',
    backgroundColor: '#C5D6A4',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 16,
  },

  avatarCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,

    backgroundColor: '#5C6788',

    justifyContent: 'center',
    alignItems: 'center',
  },

  bellCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,

    backgroundColor: '#F7FCEF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1C1C1C',
  },

  content: {
    flex: 1,
    alignItems: 'center',

    paddingTop: 24,
    paddingHorizontal: 20,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',

    marginBottom: 30,
  },

  dayCircle: {
    width: 170,
    height: 170,
    borderRadius: 85,

    borderWidth: 8,
    borderColor: '#9EAF86',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 28,
  },

  dayText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#222',
  },

  savingText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#222',

    marginBottom: 22,
  },

  button: {
    width: '100%',
    height: 48,

    backgroundColor: '#E8F0D8',

    borderWidth: 1,
    borderColor: '#C9D6B3',

    borderRadius: 24,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 12,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
