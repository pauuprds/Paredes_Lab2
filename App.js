import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import myPhoto from './myPhoto.jpg';

export default function App() {
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.header}>STUDENT PROFILE</Text>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>Paula Paredes</Text>
        <Text style={styles.infoText}>Age: 20</Text>
        <Text style={styles.infoText}>Course/Year/Section: BSCS / 3rd Year / 3-3</Text>
      </View>

        <Image source={myPhoto} style={styles.profileImage} />
      </View>
      <View style={styles.separator} />

      {/* About Me */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>
          3rd-year CS student, striving to finish this semester. Hoping to get a paid internship and graduate with a healthy relationship and good career opportunities. pls pls pls
        </Text>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <Text style={styles.sectionContent}>• President's Lister (2023-2024) </Text>
        <Text style={styles.sectionContent}>• President's Lister (2024-2025)</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {['Figma', 'Canva',  'Python', 'HTML/CSS', 'Java'].map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d9e0a4',
  },

  header: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 10,
    color: '#19350c', // deep olive brown for contrast
  },

  /* ✅ Profile Section Layout */
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4F5A3B', // dark olive green
  },

  infoText: {
    fontSize: 16,
    color: '#3B3B3B', // neutral earthy gray
    marginTop: 5,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4F5A3B',
    marginLeft: 30,
  },

  separator: {
    borderBottomColor: '#B0A999', 
    borderBottomWidth: 1,
    marginVertical: 15,
  },

  section: {
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4F5A3B',
    marginBottom: 5,
  },

  sectionContent: {
    fontSize: 16,
    color: '#3B3B3B',
    lineHeight: 22,
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  skillBadge: {
    backgroundColor: '#6B8E23', // muted olive green
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 5,
  },

  skillText: {
    color: '#F5F0E6',
    fontSize: 14,
  },
});

