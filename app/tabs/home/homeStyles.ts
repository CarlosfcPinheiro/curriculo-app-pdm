import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const homeStyles = StyleSheet.create({
    BoxTextName: {
        padding: 10,
        borderColor: "#ffffff",
    },
    textName: {
        color: "#ffffff",
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 20,
    },
    textLastname: {
        color: Colors.purple,
    }
});