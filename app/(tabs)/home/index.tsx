import { Text, View } from "react-native";

import { Image } from "expo-image";
import { globalStyles } from "../../_globalStyles";
import { homeStyles } from "./_homeStyles";

export default function Home() {
  return (
    <View
      style={globalStyles.container}
    >
      <View>
        <Image 
          source={require('../../../assets/images/pico_pc_home.gif')}
          contentFit="cover"
          transition={1000}
          style={{ width: 200, height: 200 }}
        ></Image>
      </View>
      <View style={homeStyles.BoxTextName}>
        <Text style={homeStyles.textName}>Carlos <Text style={homeStyles.textLastname}>Pinheiro</Text></Text>
        <Text style={globalStyles.text}>Desenvolvedor Full-Stack</Text>
      </View>
    </View>
  )
}