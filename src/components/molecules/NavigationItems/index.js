import React from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavigationItems = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={props.onPress}>
                <Image style={{ width: 26, height: 26 }} source={props.icon} />
                <Text style={{ fontSize: 10, color: props.active ? "#43ab4a" : "#545454", marginTop: 4 }}>{props.title}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default NavigationItems;