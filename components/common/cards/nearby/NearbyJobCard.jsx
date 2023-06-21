import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./nearbyjobcard.style";
//import { checkImageURL } from "../../../../utils";
import { icons } from "../../../../constants";

const NearbyJobCard = ({ job, handleNavigate}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(job.redirect_url)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={icons.j310}
          
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.jobType}>
            {job?.company.display_name} 
          </Text>
          <Text style={styles.location}> {job.location.display_name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


export default NearbyJobCard