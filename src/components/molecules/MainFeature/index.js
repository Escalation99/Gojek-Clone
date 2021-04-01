import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

const MainFeature = (props) => {
    return (
        <TouchableOpacity style={{ alignItems: 'center', width: '25%', alignItems: 'center' }}>
            <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={props.img} />
            </View>
            <Text style={{ marginTop: 6, fontSize: 11, fontWeight: 'bold' }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default MainFeature;