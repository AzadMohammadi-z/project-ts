import React, { FunctionComponent } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CardSectionProps } from './types';
import CardItem from './CardItem';

const CardSection: FunctionComponent<CardSectionProps> = (props) => {
    return (
        <FlatList
            data={props.data}
            style={styles.cardList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 25,
                alignItems: 'center',
            }}
            keyExtractor={({ id }: any) => id.toString()}
            renderItem={({ item }: any) => <CardItem {...item} />}
        />
    );
};

const styles = StyleSheet.create({
    cardList: {
        flex: 1,
        width: '100%',
        paddingLeft: 25,
        paddingBottom: 15,
    },
});

export default CardSection;
