import React from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const GopayFeature = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ alignItems: 'center' }}>
                <Image source={props.img} />
                <Text style={{ color: 'white', marginTop: 15, fontWeight: 'bold', fontSize: 13 }}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GopayFeature;