import React from 'react'
import { View, Image, TextInput, TouchableOpacity } from 'react-native'

const SearchFeature = (props) => {
    return (
        <View style={{ marginHorizontal: 16, flexDirection: 'row', paddingTop: 15 }}>
            <View style={{ position: 'relative', flex: 1 }}>
                <TextInput style={{ borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }} placeholder="What do you want to eat?" />
                <Image source={require('../../../assets/icon/search.png')} style={{ position: 'absolute', top: 5, left: 12 }} />
            </View>
            <TouchableOpacity style={{ justifyContent: 'center' }}>
                <Image source={require('../../../assets/icon/promo.png')} style={{ width: 35, alignItems: 'center', justifyContent: 'center' }} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchFeature;