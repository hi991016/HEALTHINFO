import React from 'react'
import { RefreshControl, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';

// the hook
import { useTranslation } from 'react-i18next';

const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
}

const data = [
        {
            id: '1',
            title: 'Heart rate',
            info: '143',
            unit: 'bpm',
            icon: require('../assets/heart.png'),
        },
        {
            id: '2',
            title: 'Calories',
            info: '450',
            unit: 'kcal',
            icon: require('../assets/calo.png'),
        },
        {
            id: '3',
            title: 'Steps',
            info: '3105',
            unit: 'steps',
            icon: require('../assets/steps.png'),
        },
        {
            id: '4',
            title: 'Distance',
            info: '4',
            unit: 'km',
            icon: require('../assets/distance.png'),
        },
]

const MenuItem = () => {
    const { t, i18n } = useTranslation();

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
  
      wait(1500).then(() => setRefreshing(false));
    }, []);
    const renderItem = ({item}) => {
        return (
            <Animatable.View animation='zoomIn' style={styles.item}>
                <View style={styles.itemBg}>
                    <Image style={styles.icon} source={item.icon} resizeMode='contain' />
                    <View>
                        <Text style={styles.info}>{item.info}</Text>
                        <Text style={styles.unit}>{item.unit}</Text>
                    </View>
                    <Text style={styles.title}>{t(item.title)}</Text>
                </View>
            </Animatable.View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                key={2}
                numColumns={2}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatlist}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }   
            />
        </SafeAreaView>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        flex: 1,
        padding: 10,
        paddingBottom: 5,
    },
    itemBg: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'rgba(211, 211, 211, .5)',
        borderRadius: 25,
        minHeight: 200,
        overflow: "hidden",
        padding: 25,
    },
    icon: {
        width: 30,
        height: 30,
    },
    info: {
        marginTop: 25,
        fontSize: 27,
        fontWeight: '700',
    },
    unit: {
        marginTop: -5,
        color: '#CACACA',
        fontSize: 17
    },
    title: {
        marginTop: 30,
        fontSize: 14,
        fontWeight: '700'
    },
    flatlist: {
        marginTop: 5,
        marginHorizontal: 12,
    }
})
