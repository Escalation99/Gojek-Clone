import React,{Component} from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'
import Navbar from '../../organisms/Navbar';
import { RNCamera } from 'react-native-camera';


const IconWithText = (props) => {
    return (
        <View>
            <View style={{ width: 60, height: 60, backgroundColor: 'green', borderRadius: 60 }} />
            <Text style={{ maxWidth: 70, textAlign: 'center', marginTop: 10 }}>{props.title}</Text>
        </View>
    )
}

const IconAction = () => {
    return (
        <View style={{width:35, height:35, backgroundColor:'white',borderRadius:35,alignItems:'center'}}>
            <Text></Text>
        </View>
    )
}
class ScanQRCode extends Component {
    state={
        barcodes:"More Options"
    }
    render(){
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'grey' }}>
                    <RNCamera ref={ref => {this.camera = ref;}}
                        style=
                            {{ 
                            width:'100%',
                            height:'100%',
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                            }}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                            }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                            }}
                        onBarCodeRead={( barcodes ) => {
                            console.log(barcodes);
                            this.setState({
                                barcodes:barcodes.data,
                            })
                            }}
                        />
                <View style={{flexDirection:'row',paddingHorizontal:16,marginTop: 16,justifyContent:'space-between',position:'absolute',left:0,top:0,width:'100%'}}>
                    <IconAction />
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:80}}>
                        <IconAction />
                        <IconAction />
                    </View>
                </View>
            </View>
            <View style={{ height: 200, backgroundColor: 'white', paddingHorizontal: 16 }}>
                <View style={{ alignItems: 'center', marginTop: 8, marginBottom: 18 }}>
                    <View style={{ width: 40, height: 3, backgroundColor: '#e0e0e0', marginVertical: 1 }} />
                    <View style={{ width: 40, height: 3, backgroundColor: '#e0e0e0', marginVertical: 1 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{`${this.state.barcodes}`}</Text>
                    <Text style={{ fontSize: 14, color: 'green', fontWeight: 'bold' }}>SHORTCUT</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 14, width: '100%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: 160, justifyContent: 'space-between', paddingRight: 12 }}>
                        <IconWithText title="Phone Number" />
                        <IconWithText title="Gopay Code" />
                    </View>
                    <View style={{ width: 1, height: 60, backgroundColor: 'grey' }} />
                    <View style={{ flex: 1, paddingLeft: 12 }}>
                        <Text>Your recent Gopay receivers will show here. No admin fees!</Text>
                    </View>
                </View>
            </View>
        </View>


    )
    }

}




export default ScanQRCode;