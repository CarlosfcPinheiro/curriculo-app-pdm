import { Text, View } from "react-native";
import { globalStyles } from "../../_globalStyles";

export default function Sobre() {
  return (
    <View style={globalStyles.container}>
      <View>
        <Text style={globalStyles.text}># Hello, world!</Text>
        <View>
          <Text>Meu nome é Carlos Pinheiro, e sou um desenvolvedor Full-Stack. Estou sempre em busca de me conectar com as pessoas e de aprender novas tecnologias, Além disso, também tenho muito apreço pela ciência ligada à computação.</Text>
          <Text>Me mantenho presente em comunidades de tecnologia, e um gosto especial por open-source. Esse portfólio é destinado para que eu possa apresentar um pouco sobre mim e como estou posicionado no mercado atualmente, de forma acadêmica e profissional.</Text>
        </View>
      </View>
    </View>
  );
}