import React from 'react'
import { Text, Button, View } from 'react-native'
import Navbar from '../../organisms/Navbar';

const Orders = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Orders Page</Text>
                <Button title="View Detail" onPress={() => props.navigation.navigate('OrderDetail')} />
            </View>
            <Navbar />
        </View>
    )
}

export default Orders;