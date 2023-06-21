import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Linking, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import  PopularJobCard  from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const PopularJobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState();
  const { data, isLoading, error } = useFetch(
         'search', {
           what:" React developer"
          
         });

         handleClick = (url) => {
          Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
            }
          });
        };


  
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> 
            Popular jobs
        </Text>
        <TouchableOpacity>
          <Text>
            Show all 
          </Text>  
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ): error ? (
            <Text>Something went wrong</Text>
        )
        : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
               <PopularJobCard
                 item={item}
                 handleCardPress={handleClick}
                />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;