import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../components/color';
import { StatusBar } from 'expo-status-bar';

//type
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
import AmountSection from '../components/Balance/AmountSection';
import BalanceCardSection from '../components/Balance/BalanceCardSection';
import ButtonSection from '../components/Balance/ButtonSection';
type Props = StackScreenProps<RootStackParamList, 'Balance'>;

const Balance: FunctionComponent<Props> = ({ route }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <AmountSection balance={route?.params?.balance} />
            <BalanceCardSection {...route.params} />
            <ButtonSection />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.graylight,
        width: '100%',
        padding: 25,
    },
});

export default Balance;
