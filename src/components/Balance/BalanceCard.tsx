import React, { FunctionComponent } from 'react';
import {
    StyleSheet,
    ImageBackground,
    TouchableHighlight,
    View,
    Image,
    Text,
} from 'react-native';
import { BalanceCardProps } from './types';
import { colors } from '../color';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import card_bg from '../../../assets/bags/bg2.jpg';

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
    const handlePress = () => {};
    return (
        <ImageBackground source={card_bg} style={styles.cardBackgroung}>
            <View style={styles.touchableView}>
                <View style={styles.cardRow}>
                    <RegularText
                        textStyles={{ color: colors.white, marginTop: -10 }}
                    >
                        *****{props?.accountNo?.slice(6.1)}
                    </RegularText>
                </View>
                <View style={styles.cardRow}>
                    <View style={{ flex: 3 }}>
                        <SmallText
                            textStyles={{
                                marginBottom: 5,
                                color: colors.graylight,
                                fontSize: 18,
                            }}
                        >
                            قیمت کل :
                        </SmallText>
                        <RegularText textStyles={{ fontSize: 19 }}>
                            ${props.balance}
                        </RegularText>
                    </View>
                    <Image style={styles.logo} source={props.logo} />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    cardBackgroung: {
        height: '75%',
        width: '100%',
        resizeMode: 'cover',
        backgroundColor: colors.accent,
        borderRadius: 25,
        overflow: 'hidden',
    },
    touchableView: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
    },
    cardRow: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: -20,
    },
    logo: {
        flex: 1,
        width: '100%',
        height: '80%',
        resizeMode: 'contain',
    },
});

export default BalanceCard;
