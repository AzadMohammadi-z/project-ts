import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";
import { TextProps } from "./types";
import { colors } from "../color";

const BigText: FunctionComponent<TextProps> = (props) => {
  return (
    <Text style={[styles.styledText, props.textStyles]}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  styledText: {
    fontSize: 37,
    color: colors.white,
    textAlign: "right",
    fontFamily: "Lato-Bold",
  },
});
export default BigText;
