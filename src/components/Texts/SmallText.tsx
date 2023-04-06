import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";
import { TextProps } from "./types";
import { colors } from "../color";

const SmallText: FunctionComponent<TextProps> = (props) => {
  return (
    <Text style={[styles.styledText, props.textStyles]}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  styledText: {
    fontSize: 13,
    color: colors.gray,
    textAlign: "right",
    fontFamily: "Lato-Regular",
  },
});
export default SmallText;
