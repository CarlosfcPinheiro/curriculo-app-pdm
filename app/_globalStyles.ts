import { StyleSheet } from "react-native";

import { Colors } from "../constants/theme";

const globalStyles = StyleSheet.create({
    h3: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "left" as const,
    },
    h2: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "left" as const,
    },
    p: {
        color: Colors.secondaryText,
        fontSize: 16,
        textAlign: "left" as const,
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
    },
});

export default globalStyles;