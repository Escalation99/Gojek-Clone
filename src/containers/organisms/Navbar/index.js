import React, { Component } from 'react'
import { View } from 'react-native'
import NavigationItems from '../../../components/molecules/NavigationItems'
import { withNavigation } from 'react-navigation'


class Navbar extends Component {
    render() {
        return (
            <View style={{ height: 54, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white' }}>
                <NavigationItems onPress={() => this.props.navigation.navigate('Home')} title="Home" icon={require('../../../assets/icon/account-active.png')} active />
                <NavigationItems onPress={() => this.props.navigation.navigate('Orders')} title="Orders" icon={require('../../../assets/icon/order.png')} />
                <NavigationItems onPress={() => this.props.navigation.navigate('')} title="Help" icon={require('../../../assets/icon/help.png')} />
                <NavigationItems onPress={() => this.props.navigation.navigate('')} title="Inbox" icon={require('../../../assets/icon/inbox.png')} />
                <NavigationItems onPress={() => this.props.navigation.navigate('')} title="Accounts" icon={require('../../../assets/icon/account.png')} />
            </View>
        )
    }

}

export default withNavigation(Navbar);
















