import React, { FunctionComponent } from 'react';
import { SendMoneyProps } from './types';
import { StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { Text } from 'react-native';
import { ScreenWidth } from '../shared';
import { colors } from '../color';
import Profile from '../Header/Profile';
import SmallText from '../Texts/SmallText';
import RegularText from '../Texts/RegularText';

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
    return (
        <TouchableHighlight
            underlayColor={colors.secondary}
            style={[
                styles.sendMoneyItemContainer,
                { backgroundColor: props.background },
            ]}
            onPress={() => alert('send money')}
        >
            <>
                <Profile img={props.img} />
                <SmallText
                    textStyles={{
                        textAlign: 'right',
                        color: colors.white,
                        fontSize: 12,
                    }}
                >
                    {props.name}
                </SmallText>
                <RegularText
                    textStyles={{
                        color: colors.white,
                        textAlign: 'right',
                        fontSize: 12,
                    }}
                >
                    {props.amount}
                </RegularText>
            </>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    sendMoneyItemContainer: {
        height: 90,
        width: ScreenWidth * 0.27,
        padding: 10,
        borderRadius: 15,
        justifyContent: 'space-around',
        marginRight: 10,
        marginBottom: 10,
    },
});

export default SendMoneyItem;
