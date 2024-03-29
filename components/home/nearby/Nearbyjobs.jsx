import { View, Text, TouchableOpacity, ActivityIndicator , Linking} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants';
import  NearbyJobCard  from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const NearbyJobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch(
         'search', {
           what:"React developer"
          // num_pages: 1
         });

         handleClick = (url) => {
          Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
            }
          });
        };
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> 
            Nearby jobs
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
         data?.map((job) => (
          <NearbyJobCard 
            job={job}
            handleNavigate={handleClick}

          //  key={`nearby-job-${job?.id}`} 
          //  handleNavigation={() => router.push('/job-details/${job.id}')}
          />
         )) 
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;