import { StyleSheet } from "react-native";

import { Colors } from "./utils/colors";

export const globalStyles = StyleSheet.create({
    text: {
        color: Colors.secondaryText,
        fontSize: 16
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
    }
});