import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Linking } from 'react-native'
//import { redirect } from "react-router-dom";
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';
import { useRouter, redirect } from 'expo-router';

const jobTypes = ["Full-time", "Part-time", "Contractor"]
const [activeJobType, setActiveJobType] = useState("Full-time")


const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.userName}>Welcome to Jobzurch</Text>
      <Text style={styles.welcomeMessage}>Zurch for your perfect job !</Text>
      </View>
      <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
               style={styles.searchInput}
               value={searchTerm}
               onChangeText={(text) => setSearchTerm(text)}
               placeholder='Zurch for your perfect job?'
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
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
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                //  handleClick(item.redirect_url)
                console.log("clciked")  
                setActiveJobType(item);

                 // redirect(item.redirect_url)
                 // router.push(`${item.redirect_url}`)
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{ columnGap: SIZES.small}}
            horizontal
          />

        </View>
    </View>
  )
}

export default Welcome