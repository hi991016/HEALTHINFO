import React from 'react'
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const StopCompetition = ({navigation}) => {
    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.container}>
                <ImageBackground 
                    style={styles.imageLadding}
                    resizeMode="cover" 
                    source={{uri: 'https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80'}}
                    imageStyle={{ backgroundColor:'#000', opacity: 0.8 }} 
                >
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}  
                    >
                        <View style={styles.headerContainer}>
                            <Text style={styles.title}>About your</Text>
                            <Text style={styles.title}>Body</Text>
                        </View>
                        <View style={styles.avatarContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{marginRight: 20}}>
                                    <Image 
                                    source={require('../assets/avatar.jpg')} 
                                    style={{ width: 52, height: 52, borderRadius: 120 }} 
                                    />
                                </View>
                                <View>
                                    <Text style={{ textTransform: 'uppercase', color: '#d6d6d6', fontSize: 24, fontWeight: '700' }}>Fox Fennec</Text>
                                </View>
                            </View>    
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30}}>
                            <View style={styles.customBox1}>
                                <Text style={{fontSize: 15, color: '#fff', fontWeight: '700'}}>RUNNING</Text>
                            </View>
                            <View style={styles.customBox2}>
                                <Text style={{fontSize: 15, color: '#fff', fontWeight: '700'}}>16/10/2021</Text>
                            </View>
                        </View>
                        <View style={styles.aboutBody}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                                <AntDesign name='clockcircle' color='#fff' size={25} style={{marginRight: 20}} />
                                <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>8 Minutes</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                                <Ionicons name='water' color='#fff' size={25} style={{marginRight: 20}} />
                                <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>500 Kcal</Text>
                            </View>
                        </View>
                        <View style={styles.aboutBody2}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                                <MaterialCommunityIcons name='foot-print' color='#fff' size={25} style={{marginRight: 20}} />
                                <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>525 Steps</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                                <MaterialCommunityIcons name='map-marker-distance' color='#fff' size={25} style={{marginRight: 20}} />
                                <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>8.32 Km</Text>
                            </View>
                        </View>
                        <View>
                        <View style={{marginTop: 30}}>
                            <Image 
                            source={require('../assets/crown.png')} 
                            style={styles.iconCrown} 
                            />
                            <View style={styles.topOne}>
                                <Text style={styles.sort}>1st</Text>
                                <Image 
                                    source={require('../assets/avatar.jpg')} 
                                    style={styles.imgRank} 
                                />
                                <Text style={styles.info}>8.32 km</Text>
                            </View>
                        </View>
                        <View style={{marginTop: 10}}>
                            <View style={styles.topOne}>
                                <Text style={styles.sort}>2nd</Text>
                                <Image 
                                    source={require('../assets/avatar.jpg')} 
                                    style={styles.imgRank} 
                                    />
                                <Text style={styles.infoTopTwo}>4.14 km</Text>
                            </View>
                        </View>
                        </View>
                        <View>
                            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate('HomeDrawer')}>
                                <Text style={{fontSize: 18, color: '#000', fontWeight: '700'}}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        </>
    )
}

export default StopCompetition

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    imageLadding: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "flex-start",
        resizeMode: "cover",
    },
    headerContainer: {
        paddingTop: 70,
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    title: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "700",
    },
    customBox1: {
        padding: 12,
        backgroundColor: '#6f6f6f',
        borderRadius: 12,
        marginTop: 30,
        marginRight: 15
    },
    customBox2: {
        padding: 12,
        backgroundColor: '#6f6f6f',
        borderRadius: 12,
        marginTop: 30,
    },
    avatarContainer:{
        paddingHorizontal: 30,
        marginTop: 20
    },
    aboutBody: {
        marginTop: 40,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    aboutBody2: {
        marginTop: 10,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 55,
        marginHorizontal: 30,
        marginTop: 60,
        alignSelf: 'center',
    },
    topOne: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 30,

    }, 
    sort: {
        flex: 0.3,
        fontSize: 17, 
        color: '#fff', 
        fontWeight: '700',
        backgroundColor: '#282828',
        padding: 8,
        borderRadius: 12,
        textAlign: 'center',
    },
    info: {
        flex: 0.7,
        backgroundColor: '#44caac',
        fontSize: 17, 
        color: '#fff', 
        fontWeight: '700',
        padding: 8,
        borderRadius: 12,
        paddingLeft: 40,
    },
    imgRank: {
        width: 45, 
        height: 45, 
        borderRadius: 120,
        position: 'absolute',
        left: 80,
        zIndex: 100,
    },
    infoTopTwo: {
        flex: 0.5,
        backgroundColor: '#0087b1',
        fontSize: 18, 
        color: '#fff', 
        fontWeight: '700',
        padding: 8,
        borderRadius: 12,
        paddingLeft: 40,
        position: 'relative',
        right: 55
    },
    iconCrown: {
        width: 38, 
        height: 38,
        position: 'absolute',
        top: -25,
        left: 15,
        zIndex: 1,
        transform: [{ rotate: "-25deg" }]
    }
})
