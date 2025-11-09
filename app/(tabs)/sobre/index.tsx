import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import TextTitle from "@/components/textTitle";

import { Colors } from "@/constants/theme";
import globalStyles from "../../_globalStyles";

export default function Sobre() {
  return (
    <View style={globalStyles.bodyContainer}>
      <ScrollView style={globalStyles.contentContainer}>
        <TextTitle title="Sobre" colors={[Colors.eastBay, Colors.froly, Colors.thatch]} />
        <View style={styles.textContainer}>
          <Text style={globalStyles.p}>Essa página é destinada para me apresentar e falar um pouco sobre o app e suas funcionalidades</Text>
          <Text style={[globalStyles.h2, {color: Colors.froly, marginBottom: 10}]}>Um pouco de mim :)</Text>
        </View>
        <View style={styles.contentContainer}>
          <Image 
            source={require('../../../assets/images/me.jpeg')}
            contentFit="cover"
            transition={1000}
            style={{ width: 300, height: 300, borderRadius: 5, filter: 'grayscale(0.6)' }}
          />
          <View style={styles.textContainer}>
            <Text style={globalStyles.p}>Meu nome é Carlos Pinheiro, e sou um <Text style={styles.bold}>desenvolvedor Full-Stack</Text>. Estou sempre em busca de me conectar com as pessoas e de aprender novas tecnologias, Além disso, também tenho muito apreço pela ciência ligada à computação.</Text>
            <Text style={globalStyles.p}>Me mantenho presente em comunidades de tecnologia, e um gosto especial por <Text style={styles.bold}>open-source</Text>. Esse portfólio é destinado para que eu possa apresentar um pouco sobre mim e como estou posicionado no mercado atualmente, de forma acadêmica e profissional.</Text>
          </View>
          <View className="sobre_app__container" style={styles.textContainer}>
            <Text style={[globalStyles.h2, {color: Colors.froly}]}>Sobre o app</Text>
            <Text style={globalStyles.p}>Esse app de currículo foi desenvolvido utilizando <Text style={styles.bold}>React Native</Text> com o framework <Text style={styles.bold}>Expo</Text>, implementando os conceitos de navegação com tabs, uso de libs de ícones, e uma implementação adicional de <Text style={styles.bold}>máscaras</Text>, que possibilitou uma experiência mais confortável e agradável ao design dos textos no app.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    flexDirection: 'column' as const,
    gap: 20,
    marginBottom: 60
  },
  textContainer: {
    gap: 10
  },
  bold: {
    color: Colors.primaryText
  }
});