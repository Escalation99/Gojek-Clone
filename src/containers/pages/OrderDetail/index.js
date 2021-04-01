import React from 'react'
import { Text, View } from 'react-native'
import Navbar from '../../organisms/Navbar';


const OrderDetail = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Order Detail Page</Text>
            </View>
            <Navbar />
        </View>


    )
}

export default OrderDetail;