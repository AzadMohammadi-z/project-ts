import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AmountProps } from './types';
import SmallText from '../Texts/SmallText';
import { colors } from '../color';
import RegularText from '../Texts/RegularText';

const AmountSection: FunctionComponent<AmountProps> = (props) => {
    return (
        <View style={styles.amountSectionBackground}>
            <SmallText
                textStyles={{ color: colors.secondary, marginBottom: 15 }}
            >
                قیمت کل
            </SmallText>
            <RegularText textStyles={{ color: colors.secondary, fontSize: 28 }}>
                {' '}
                $ {props.balance}
            </RegularText>
        </View>
    );
};

const styles = StyleSheet.create({
    amountSectionBackground: {
        flex: 1,
        width: '100%',
        paddingTop: 5,
        alignItems: 'center',
    },
});

export default AmountSection;
