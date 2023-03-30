import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { colors } from '../components/color';

const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.container}>
                <View style={styles.topScreen}>
                    <Image
                        style={styles.topImage}
                        source={require('../assets/bags/bg.jpg')}
                    />
                </View>
                <View style={styles.bottomSection}></View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'space-between',
    },
    topScreen: {
        flex: 1,
        width: '100%',
        maxHeight: '50%',
    },
    topImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    bottomSection: {
        flex: 1,
        width: '100%',
        padding: 25,
    },
});

export default Welcome;
