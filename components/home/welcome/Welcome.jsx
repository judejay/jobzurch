import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';
import { useRouter } from 'expo-router';

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.userName}>Hello Jude</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job Jude</Text>
      </View>
      <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
               style={styles.searchInput}
               value=""
               onChange={() => {}}
               placeholder='Search for your perfect job?'
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Image 
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <FlatList
            data={jobTypes}
            rend
          />

        </View>
    </View>
  )
}

export default Welcome