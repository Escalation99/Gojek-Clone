import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

const GoNews = ({ onPress }) => {
    return (
        <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
            <View style={{ position: 'relative' }}>
                <Image source={require('../../../assets/dummy/amien-rais.jpg')} style={{ width: '100%', height: 170, borderRadius: 6 }} />
                <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
                <View style={{ height: 25, width: 65, position: 'absolute', top: 16, left: 16 }}>
                    <Image source={require('../../../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
            </View>
            <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomColor: '#e8e9ed', borderBottomWidth: 1 }}>
                <Text style={{ color: '#1c1c1c', fontSize: 16, fontWeight: 'bold' }}>GO-NEWS</Text>
                <Text style={{ fontSize: 14, color: '#7a7a7a', fontWeight: 'normal', marginBottom: 11 }}>Artikel ada disini, silahkan ketik artikel sesuai dengan konten yang anda inginkan</Text>
                <TouchableOpacity style={{ backgroundColor: '#61a756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 4 }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }} onPress={onPress}>READ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GoNews;