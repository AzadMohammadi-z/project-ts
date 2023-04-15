import React, { FunctionComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TransactionAviProps } from './types';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../color';

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
    return (
        <View
            style={[styles.styledView, { backgroundColor: props.background }]}
        >
            <Ionicons name={props.icon} size={25} color={colors.white} />
        </View>
    );
};

const styles = StyleSheet.create({
    styledView: {
        height: 45,
        width: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TransactionAvi;
