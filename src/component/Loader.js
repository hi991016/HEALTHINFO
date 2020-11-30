import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

const Loader = ({navigation}) => {
    setTimeout(() => {
        navigation.replace('OnboardingScreen')
    }, 2000);
    return (
        <>
        <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
        <View style={styles.container}>
            <Animatable.View style={{alignItems:'center',justifyContent:'center',flex:1}}
                animation='bounceIn'>
                <LottieView style={{width:200}} source={require('../../anim/2469-dino-dance.json')} autoPlay loop />
            </Animatable.View>
        </View>    
        </>
    )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
