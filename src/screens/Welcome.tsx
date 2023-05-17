import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import { colors } from '../components/color';
import RegularButton from '../components/Buttons/RegularButton';

//type
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
type Props = StackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.container}>
                <View style={styles.topScreen}>
                    <Image
                        style={styles.topImage}
                        source={require('../../assets/bags/bg.jpg')}
                    />
                </View>
                <View style={styles.bottomSection}>
                    <BigText
                        textStyles={{
                            width: '100%',
                            marginBottom: 25,
                        }}
                    >
                        کیف پول انلاین
                    </BigText>
                    <SmallText textStyles={{ width: '100%', marginBottom: 25 }}>
                        کیف پول مناسب نگهداری ارز و دارایی وانتقال سریع ارز به
                        هر نوع کیف پول دیگری
                    </SmallText>
                    <RegularButton onPress={() => navigation.navigate('Home')}>
                        شروع کنید
                    </RegularButton>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'space-between',
    },
    topScreen: {
        flex: 1,
        width: '100%',
        maxHeight: '50%',
    },
    topImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    bottomSection: {
        flex: 1,
        width: '100%',
        padding: 25,
        justifyContent: 'flex-end',
    },
});

export default Welcome;
