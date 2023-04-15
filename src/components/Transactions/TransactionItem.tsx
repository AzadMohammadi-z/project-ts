import React, { FunctionComponent } from 'react';
import { TransactionProps } from './types';
import { StyleSheet, View, Text } from 'react-native';
import TransactionAvi from './TransactionAvi';
import RegularText from '../Texts/RegularText';
import { colors } from '../color';
import SmallText from '../Texts/SmallText';

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
    return (
        <View style={styles.transactionRow}>
            <View style={styles.leftView}>
                <TransactionAvi
                    background={props.art.background}
                    icon={props.art.icon}
                />
                <View style={{ marginRight: 10 }}>
                    <RegularText
                        textStyles={{
                            color: colors.secondary,
                            textAlign: 'right',
                            marginBottom: 5,
                        }}
                    >
                        {props.title}
                    </RegularText>
                    <SmallText
                        textStyles={{
                            textAlign: 'right',
                            color: colors.graydark,
                        }}
                    >
                        {props.subtitle}
                    </SmallText>
                </View>
            </View>

            <View style={styles.rightView}>
                <RegularText
                    textStyles={{
                        color: colors.secondary,
                        textAlign: 'left',
                        marginBottom: 5,
                    }}
                >
                    {props.amount}
                </RegularText>
                <SmallText
                    textStyles={{
                        textAlign: 'left',
                        color: colors.graydark,
                    }}
                >
                    {props.date}
                </SmallText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    transactionRow: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 25,
    },
    leftView: {
        flex: 2,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        height: '100%',
    },
    rightView: {
        flex: 1,
    },
});

export default TransactionItem;
