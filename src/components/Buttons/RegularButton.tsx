import React, { FunctionComponent, ReactNode } from "react";
import {
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { colors } from "../color";
import RegularText from "../Texts/RegularText";

//type
interface ButtonProps {
  btnStyle?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void | undefined;
  textStyle?: StyleProp<TextStyle>;
  children: ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <TouchableOpacity
      style={[styles.buttonView, props.btnStyle]}
      onPress={props.onPress}
    >
      <RegularText textStyles={props.textStyle}>{props.children}</RegularText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonView: {
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 20,
  },
});
export default RegularButton;
