import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TransactionSectionProps } from './types';
import RegularText from '../Texts/RegularText';
import { colors } from '../color';
import SmallText from '../Texts/SmallText';
import { Ionicons } from '@expo/vector-icons';
import TransactionItem from './TransactionItem';

const TransactionSection: FunctionComponent<TransactionSectionProps> = (
    props
) => {
    return (
        <View style={styles.transactionSectionBackground}>
            <View style={[styles.transactionRow, { marginBottom: 25 }]}>
                <RegularText
                    textStyles={{ fontSize: 19, color: colors.secondary }}
                >
                    تراکنش
                </RegularText>
                <SmallText textStyles={{ color: colors.secondary }}>
                    اخیر
                    <Ionicons
                        name="caret-down"
                        size={13}
                        color={colors.graydark}
                    />
                </SmallText>
            </View>
            <FlatList
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
                }}
                keyExtractor={({ id }: any) => id.toString()}
                renderItem={({ item }: any) => <TransactionItem {...item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    transactionSectionBackground: {
        flex: 2,
        width: '100%',
        paddingHorizontal: 25,
        paddingTop: 5,
    },
    transactionRow: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    transactionList: {
        width: '100%',
    },
});

export default TransactionSection;
