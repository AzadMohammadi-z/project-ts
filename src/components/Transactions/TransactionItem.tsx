import React, { FunctionComponent } from 'react';
import { TransactionProps } from './types';
import { StyleSheet, View, Text } from 'react-native';

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
    return (
        <View>
            <Text>Transaction item</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TransactionItem;
