import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

const GoInfo = (props) => {
    return (
        <View style={{ padding: 16, paddingBottom: 0 }}>
            <View style={{ height: 25, width: 65 }}>
                <Image source={props.icon} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c', marginTop: 15 }}>Complete Your Profile</Text>
            <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 16 }}>
                <Image source={props.img} />
                <View style={{ marginLeft: 16, flex: 1 }} >
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4a4a4a' }}>Connect with facebook</Text>
                    <Text style={{ fontSize: 15, color: '#4a4a4a', width: '75%' }}>Login faster without verification code</Text>
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#61a756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 4 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>CONNECT</Text>
            </TouchableOpacity>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#e8e9ed', marginTop: 16 }}></View>
        </View>
    )
}

export default GoInfo;







