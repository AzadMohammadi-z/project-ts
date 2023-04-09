import React, { FunctionComponent } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    ImageStyle,
} from 'react-native';

interface ProfileProps {
    img: ImageSourcePropType;
    imageStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
    return (
        <TouchableOpacity style={[styles.styledView, props.imgContainerStyle]}>
            <Image
                style={[styles.styledImage, props.imageStyle]}
                source={props.img}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    styledView: {
        flexDirection: 'column',
        height: 45,
        width: 45,
        borderRadius: 15,
    },
    styledImage: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
});

export default Profile;
