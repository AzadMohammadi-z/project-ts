import React, { FunctionComponent } from 'react';
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import RegularText from '../Texts/RegularText';
import { colors } from '../color';
import SmallText from '../Texts/SmallText';

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyle?: StyleProp<TextStyle>;
    subTextStyle?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (
        <View style={styles.styledView}>
            <RegularText
                textStyles={[
                    {
                        color: colors.secondary,
                        fontSize: 22,
                    },
                    props.mainTextStyle,
                ]}
            >
                {props.mainText}
            </RegularText>
            <SmallText
                textStyles={[
                    {
                        color: colors.graydark,
                    },
                    props.subTextStyle,
                ]}
            >
                {props.subText}
            </SmallText>
        </View>
    );
};

const styles = StyleSheet.create({
    styledView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

export default Greeting;
