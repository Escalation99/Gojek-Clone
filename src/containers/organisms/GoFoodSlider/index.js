import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import GoFoodSliderItems from '../../../components/molecules/GoFoodSliderItems'

class GoFoodSlider extends Component {
    render() {
        return (
            <View>
                <View style={{ height: 25, width: 65, marginHorizontal: 16 }}>
                    <Image source={this.props.icon} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16, marginLeft: 16 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#1c1c1c' }}>Nearby Restaurants</Text>
                    <TouchableOpacity style={{ marginRight: 16 }}>
                        <Text style={{ color: '#61a756', fontWeight: 'bold', fontSize: 14 }}>See All</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ flexDirection: 'row', paddingHorizontal: 16 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <GoFoodSliderItems restoImg={require('../../../assets/dummy/go-food-kfc.jpg')} restoName="KFC Aeon Mall" />
                    <GoFoodSliderItems restoImg={require('../../../assets/dummy/go-food-banka.jpg')} restoName="Martabak Banka" />
                    <GoFoodSliderItems restoImg={require('../../../assets/dummy/go-food-gm.jpg')} restoName="Bakmie GM" />
                    <GoFoodSliderItems restoImg={require('../../../assets/dummy/go-food-orins.jpg')} restoName="Ayam Orins" />
                    <GoFoodSliderItems restoImg={require('../../../assets/dummy/go-food-pak-boss.jpg')} restoName="Ayam Bakar Boss" />
                </ScrollView>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#e8e9ed', marginTop: 16, marginBottom: 20 }}></View>

            </View >
        )
    }

}

export default GoFoodSlider;
















