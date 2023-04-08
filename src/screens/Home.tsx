import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../components/color';
import { StatusBar } from 'expo-status-bar';

const Home: FunctionComponent = () => {
    return (
        <View style={styles.homeContainer}>
            <StatusBar style="dark" />
        </View>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.graylight,
    },
});

export default Home;
