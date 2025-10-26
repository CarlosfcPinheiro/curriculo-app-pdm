import { Text, View } from "react-native";

import { globalStyles } from "../../globalStyles";
import { homeStyles } from "./homeStyles";

export default function Home() {
  return (
    <View
      style={globalStyles.container}
    >
      <View>
        <Text style={homeStyles.textName}>Carlos <Text style={homeStyles.textLastname}>Pinheiro</Text></Text>
        <Text>Desenvolvedor Full-Stack</Text>
      </View>
      <Text style={globalStyles.text}>Seja bem-vindo ao meu portfólio feito em React Native + Expo!</Text>
    </View> 
  )
}