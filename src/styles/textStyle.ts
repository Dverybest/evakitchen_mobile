import { StyleSheet } from "react-native";
import { normalize } from "../utils/pxToDpConvert";
import { black } from "./colors";

export const TextStyle = StyleSheet.create({
    semiBold: {
        color: black,
        fontFamily: 'Poppins-SemiBold',
        fontSize: normalize(28),
        lineHeight: normalize(42),
    },
    medium: {
        fontFamily: 'Poppins-Medium',
        color: black,
        fontSize: normalize(16),
        lineHeight: normalize(24),
    },
    regular: {
        fontSize: normalize(14),
        color: black,
        fontFamily: 'Poppins-Regular'
    }
});