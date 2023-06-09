import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Specifics } from '../specifics/Specifics'
import styles from './tabs.style';
import { SIZES } from '../../../constants';
import { JobAbout } from '../..';


const  displayTabContent = () => {
  switch (activeTab) {
    case "Qualifications":
      return <Specifics title={"Qualifications"} points={data[0].job_highlights?.Qualifications ?? "N/A"}/>
    case "About":
      return <JobAbout 
        info={data[0].job_description ?? "No data provided"}
      />
    case "Responsibilities":
      return <Specifics title={"Responsibilities"} points={data[0].job_highlights?.Responsibilities ?? "N/A"}/>
      default:
      break;
  }
}

const TabButton = ({name, activeTab, onHandleSearchType}) => (
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
    >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
)

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={tabs}
        renderItem={({item})=> (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}

          />
        ) }
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2}}
      />
      {displayTabContent()}
    </View>
  )
}

export default Tabs;