import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../components/color';
import { StatusBar } from 'expo-status-bar';
import CardSection from '../components/Cards/CardSection';
import logo from '../../assets/logo/logo.png';
import Avi from '../../assets/avi/persion.png';
import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';

//type
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
export type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home: FunctionComponent<Props> = ({ navigation }) => {
    const cardsData = [
        {
            id: 1,
            accountNo: '38457577444',
            balance: 20000.15,
            alias: 'خودرو ها',
            logo: logo,
        },
        {
            id: 2,
            accountNo: '38457577444',
            balance: 20000.15,
            alias: 'خودرو ها',
            logo: logo,
        },
        {
            id: 3,
            accountNo: '38457577444',
            balance: 20000.15,
            alians: 'خودرو ها',
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

    const sendMoneyData = [
        {
            id: 1,
            amount: '2450.50',
            name: 'علی احمدی',
            background: colors.tertiary,
            img: Avi,
        },
        {
            id: 2,
            amount: '4450.50',
            name: 'احمد محمدی',
            background: colors.primary,
            img: Avi,
        },
        {
            id: 3,
            amount: '6250.50',
            name: 'سارا محمدی',
            background: colors.accent,
            img: Avi,
        },
    ];
    return (
        <View style={styles.homeContainer}>
            <StatusBar style="dark" />
            <CardSection data={cardsData} />
            <TransactionSection data={transactionData} />
            <SendMoneySection data={sendMoneyData} />
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
