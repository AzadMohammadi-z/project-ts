import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../components/color';
import { StatusBar } from 'expo-status-bar';
import CardSection from '../components/Cards/CardSection';
import logo from '../../assets/logo/logo.png';
import TransactionSection from '../components/Transactions/TransactionSection';

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

    const transactionData = [
        {
            id: 1,
            amount: '-$86.00',
            date: 'فروردین 14 ',
            title: 'تاکسی',
            subtitle: 'خودرو پراید',
            art: {
                background: colors.primary,
                icon: 'car',
            },
        },
        {
            id: 2,
            amount: '-$86.00',
            date: 'فروردین 14 ',
            title: 'تاکسی',
            subtitle: 'خودرو پراید',
            art: {
                background: colors.primary,
                icon: 'car',
            },
        },
        {
            id: 3,
            amount: '-$86.00',
            date: 'فروردین 14 ',
            title: 'تاکسی',
            subtitle: 'خودرو پراید',
            art: {
                background: colors.primary,
                icon: 'car',
            },
        },
    ];
    return (
        <View style={styles.homeContainer}>
            <StatusBar style="dark" />
            <CardSection data={cardsData} />
            <TransactionSection data={transactionData} />
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
