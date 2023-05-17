import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import RegularButton from '../Buttons/RegularButton';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../color';

//navigation
import { useNavigation } from '@react-navigation/native';
import { Props as BalanceProps } from '../../screens/Home';

const ButtonSection: FunctionComponent = () => {
    const navigation = useNavigation<BalanceProps['navigation']>();
    return (
        <TouchableOpacity style={styles.buttonSectionBackground}>
            <RegularButton
                btnStyle={{ width: '50%' }}
                onPress={() => navigation.goBack()}
            >
                بازگشت <Ionicons size={17} name="card" color={colors.white} />
            </RegularButton>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonSectionBackground: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
});

export default ButtonSection;
