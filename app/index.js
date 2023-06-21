import { useState } from 'react';
import { View, ScrollView, SafeAreaView} from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, Colors, icons, images, SIZES } from '../constants';
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../components';


const Home = () => {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options= {{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.jrad} dimension="100%" />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style= {{ flex: 1, padding: SIZES.medium}}>
                    <Welcome 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() =>{
                        if(searchTerm) {
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                    />
                    <PopularJobs />
                    <NearbyJobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
