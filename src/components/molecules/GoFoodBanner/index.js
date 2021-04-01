import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

const GoFoodBanner = (props) => {
    return (
        <View style={{ paddingTop: 16, paddingHorizontal: 16, marginBottom: 20 }}>
            <View style={{ position: 'relative' }}>
                <Image source={props.img} style={{ width: '100%', height: 170, borderRadius: 6 }} />
                <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
                <View style={{ height: 25, width: 65, position: 'absolute', top: 16, left: 16 }}>
                    <Image source={props.watermark} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
                <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16 }}>
                    <View style={{}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', marginBottom: 8 }}>Free GO-FOOD voucher</Text>
                        <Text style={{ fontWeight: '400', fontSize: 12, color: 'white' }}>Quick, before they run out!</Text>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 12 }}>
                        <TouchableOpacity style={{ backgroundColor: '#61a756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'stretch', borderRadius: 4 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>GET VOUCHER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#e8e9ed', marginTop: 16 }}></View>
        </View>
    )
}

export default GoFoodBanner;












