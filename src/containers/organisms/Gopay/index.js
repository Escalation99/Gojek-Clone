import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import GopayFeature from '../../../components/molecules/GopayFeature'
import { withNavigation } from 'react-navigation'


class Gopay extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 17, marginTop: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2c5fb8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
                    <Image source={require('../../../assets/icon/gopay.png')} />
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Rp.100.000</Text>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#2f65bd', paddingTop: 19, paddingBottom: 14, justifyContent: "space-around", alignContent: 'center', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
                    <GopayFeature onPress={() => this.props.navigation.navigate('ScanQRCode')} title="Pay" img={require('../../../assets/icon/pay.png')} />
                    <GopayFeature title="Nearby" img={require('../../../assets/icon/nearby.png')} />
                    <GopayFeature title="Top Up" img={require('../../../assets/icon/topup.png')} />
                    <GopayFeature title="More" img={require('../../../assets/icon/more.png')} />
                </View>
            </View>
        )
    }

}

export default withNavigation(Gopay);
















