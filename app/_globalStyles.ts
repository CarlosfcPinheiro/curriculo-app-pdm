import { StyleSheet } from "react-native";

import { Colors } from "../constants/theme";

const globalStyles = StyleSheet.create({
    text: {
        color: Colors.secondaryText,
        fontSize: 16
    },
    textContainer: {
        color: Colors.secondaryText,
        fontSize: 16
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    contentContainer: {
        flex: 1,
        padding: 16,
        paddingTop: 42
    }
});

export default globalStyles;