import { StyleSheet } from "react-native";
import { black } from "./colors";

export const TextStyle = StyleSheet.create({
    semiBold: {
        color: black,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 28,
        lineHeight: 42,
    },
    medium: {
        fontFamily: 'Poppins-Medium',
        color: black,
        fontSize: 16,
        lineHeight: 24,
    },
    regular: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    }
});