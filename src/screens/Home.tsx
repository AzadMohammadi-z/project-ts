import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../components/color';
import { StatusBar } from 'expo-status-bar';
import CardSection from '../components/Cards/CardSection';
import logo from '../../assets/logo/logo.png';

const Home: FunctionComponent = () => {
    const cardsData = [
        {
            id: 1,
            accountNo: '38457577444',
            balance: 20000.15,
            alias: 'Work Debit',
            logo: logo,
        },
        {
            id: 2,
            accountNo: '38457577444',
            balance: 20000.15,
            alias: 'Work Debit',
            logo: logo,
        },
        {
            id: 3,
            accountNo: '38457577444',
            balance: 20000.15,
            alians: 'Work Debit',
            logo: logo,
        },
    ];
    return (
        <View style={styles.homeContainer}>
            <StatusBar style="dark" />
            <CardSection data={cardsData} />
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
