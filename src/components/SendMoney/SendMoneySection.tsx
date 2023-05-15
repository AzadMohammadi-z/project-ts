import React, { FunctionComponent, useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { SendMoneySectionProps } from './types';
import BottomSheet from '@gorhom/bottom-sheet';
import RegularText from '../Texts/RegularText';
import { colors } from '../color';
import { TouchableOpacity } from 'react-native';
import SmallText from '../Texts/SmallText';
import SendMoneyItem from './SendMoneyItem';
import { Text } from 'react-native';

const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => [85, 240], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.sendMoneySectionBackground}>
                    <View style={styles.sendMoneyRow}>
                        <RegularText
                            textStyles={{
                                fontSize: 19,
                                color: colors.secondary,
                            }}
                        >
                            ارسال پول به
                        </RegularText>
                        <TouchableOpacity onPress={() => alert('kk')}>
                            <SmallText
                                textStyles={{
                                    fontWeight: 'bold',
                                    color: colors.tertiary,
                                }}
                            >
                                +اضافه
                            </SmallText>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={styles.sendMoneyList}
                        data={props.data}
                        contentContainerStyle={{
                            alignItems: 'flex-start',
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={({ id }: any) => id.toString()}
                        renderItem={({ item }: any) => (
                            <SendMoneyItem {...item} />
                        )}
                    />
                </View>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sendMoneySectionBackground: {
        width: '100%',
        backgroundColor: colors.white,
    },
    sendMoneyRow: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 25,
    },
    sendMoneyList: {
        width: '100%',
        minHeight: '80%',
        paddingTop: 40,
        paddingHorizontal: 25,
    },
});

export default SendMoneySection;
