import { StyleSheet, Text, View } from "react-native";

import { Image } from "expo-image";

import { Colors } from "@/constants/theme";
import globalStyles from "../../_globalStyles";

export default function Home() {
  return (
    <View
      style={[styles.container, globalStyles.bodyContainer]}
    >
      <View>
        <Image 
          source={require('../../../assets/images/pico_pc_home.gif')}
          contentFit="cover"
          transition={1000}
          style={{ width: 200, height: 200 }}
        ></Image>
      </View>
      <View style={styles.BoxTextName}>
        <Text style={styles.textName}>Carlos <Text style={styles.textLastname}>Pinheiro</Text></Text>
        <Text style={[globalStyles.p, { fontStyle: 'italic' }]}>Desenvolvedor Full-Stack</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
        color: Colors.eastBay,
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
});