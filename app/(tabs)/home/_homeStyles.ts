import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/theme";

export const homeStyles = StyleSheet.create({
    BoxTextName: {
        paddingBottom: 20,
        borderColor: "#ffffff",
        textAlign: "center",
        alignItems: "center"
    },
    textName: {
        color: "#ffffff",
        fontSize: 48,
        fontWeight: "bold"
    },
    textLastname: {
        color: Colors.purple,
    }
});