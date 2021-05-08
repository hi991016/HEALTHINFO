import React from 'react'
import { StatusBar, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
// the hook
import { useTranslation } from 'react-i18next';

const ProfileScreen = ({navigation}) => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.container}>
                <View style={styles.custom}>
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}                   
                    >
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>{t('profileScreen_title')}</Text>
                    </View>
                    <View style={styles.backgroundContainer}>
                        <View style={styles.profileImage}>
                            <Image source={require("../assets/avatar.jpg")} style={styles.avatar} />
                            <Text style={styles.name}>cáo fennec</Text>
                            <Text style={{fontSize: 14, color: '#00bcd4'}}>{t('profileScreen_male')}</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={{ alignItems: 'center', borderColor: '#EAEAEA', borderRightWidth: 2, }}>
                                <View style={{alignItems: 'center', right: 45}}>
                                    <Text style={{ fontSize: 20 }}>51 kg</Text>
                                    <Text style={styles.subtext}>{t('profileScreen_weight')}</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', left: 45 }}>
                                <Text style={{ fontSize: 20 }}>171 cm</Text>
                                <Text style={styles.subtext}>{t('profileScreen_height')}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.setting}>
                        <TouchableOpacity onPress={() => { navigation.navigate('EditProfile') }}>
                            <Text style={{ color: "#1f2233", fontSize: 19 }}>{t('profileScreen_edit')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('ChangePassword') }}>
                            <Text style={ { color: "#1f2233", fontSize: 19, marginTop: 18 }}>{t('profileScreen_password')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('LoginSplash') }}>
                            <Text style={ { color: "red", fontSize: 19, marginTop: 18 }}>{t('profileScreen_logout')}</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:'100%',
        backgroundColor:'#000',
    },
    custom: {
        backgroundColor: '#FFF',
        height:'100%',
        paddingBottom: 5,
        borderBottomLeftRadius: 44,
        borderBottomRightRadius: 44,
    },
    headerContainer: {
        paddingTop: 50,
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    },
    backgroundContainer: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 80,
        backgroundColor: '#fff',
        padding: 75,
        paddingBottom: 55,
        borderRadius: 2,
        marginHorizontal: 30,
        shadowColor: '#222',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 7,
    },
    avatar: {
        borderRadius: 100,
        width: 100,
        height: 100,
    },
    profileImage: {
        marginTop: -130,
        overflow: 'hidden',
        alignItems: 'center',
    },  
    info: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 35,
    },  
    name: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 12,
        textTransform: 'capitalize',
    },
    subtext: {
        fontSize: 14,
        color: '#aeb5bc',
    },
    setting: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: 50,
    },
})
