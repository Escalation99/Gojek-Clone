import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import 'react-native-gesture-handler';
import GoFoodBanner from '../../../components/molecules/GoFoodBanner';
import GoInfo from '../../../components/molecules/GoInfo';
import GoNews from '../../../components/molecules/GoNews';
import SearchFeature from '../../../components/molecules/SearchFeature';
import GoFoodSlider from '../../../containers/organisms/GoFoodSlider';
import Gopay from '../../../containers/organisms/Gopay';
import HomeMainFeatures from '../../../containers/organisms/HomeMainFeatures';
import Navbar from '../../../containers/organisms/Navbar';


class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                    <SearchFeature />
                    <Gopay />
                    <HomeMainFeatures />
                    <View style={{ height: 17, backgroundColor: '#f2f2f4', marginTop: 20 }} />
                    <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')} />
                    <GoInfo icon={require('../../../assets/logo/gojek.png')} img={require('../../../assets/dummy/facebook-connect.png')} />
                    <GoFoodBanner img={require('../../../assets/dummy/food-banner.jpg')} watermark={require('../../../assets/logo/white.png')} />
                    <GoFoodSlider />
                </ScrollView>
                <Navbar />
            </View >
        )
    }
}

export default Home;