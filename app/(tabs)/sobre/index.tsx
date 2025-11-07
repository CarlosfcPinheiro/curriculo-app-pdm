import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import TextTitle from "@/components/textTitle";

import { Colors } from "@/constants/theme";
import globalStyles from "../../_globalStyles";

export default function Sobre() {
  return (
    <View style={globalStyles.bodyContainer}>
      <ScrollView style={globalStyles.contentContainer}>
        <TextTitle title="# Sobre Mim" colors={[Colors.eastBay, Colors.froly, Colors.thatch]} />
          <Image 
            source={require('../../../assets/images/pico_mail.gif')}
            contentFit="cover"
            transition={1000}
            style={{ width: 200, height: 200 }}
          ></Image>
        <View>
          <Text style={globalStyles.text}>Meu nome é Carlos Pinheiro, e sou um desenvolvedor Full-Stack. Estou sempre em busca de me conectar com as pessoas e de aprender novas tecnologias, Além disso, também tenho muito apreço pela ciência ligada à computação.</Text>
          <Text style={globalStyles.text}>Me mantenho presente em comunidades de tecnologia, e um gosto especial por open-source. Esse portfólio é destinado para que eu possa apresentar um pouco sobre mim e como estou posicionado no mercado atualmente, de forma acadêmica e profissional.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

});