import React from 'react'
import { StyleSheet, StatusBar, View, SafeAreaView, Image } from 'react-native'
// lib
import tw from 'twrnc';
// comp
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                />
                <NavOptions />
            </View>
        </SafeAreaView >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    // Always Below The Status Bar
    container: {
        marginTop: StatusBar.currentHeight
    },
})
