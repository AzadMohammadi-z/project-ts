import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BalanceCardProps } from './types';
import SmallText from '../Texts/SmallText';
import { colors } from '../color';
import BalanceCard from './BalanceCard';

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
    return (
        <View style={styles.balanceCardSectionBackground}>
            <BalanceCard {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    balanceCardSectionBackground: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
    },
});

export default BalanceCardSection;
