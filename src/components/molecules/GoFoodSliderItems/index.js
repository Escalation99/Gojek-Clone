import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

const GoFoodSliderItems = (props) => {
    return (
        <TouchableOpacity style={{ marginRight: 16 }}>
            <View style={{ width: 150, height: 150, borderRadius: 10, marginTop: 12 }}>
                <Image source={props.restoImg} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }} />
            </View>
            <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>{props.restoName}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoFoodSliderItems;