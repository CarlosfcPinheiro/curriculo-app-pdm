import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import TextTitle from "@/components/textTitle";

import ExperienciaBox from "@/components/experienciaBox";
import { Colors } from "@/constants/theme";
import globalStyles from "../../_globalStyles";

export default function Profissional() {
  return (
    <View style={globalStyles.bodyContainer}>
      <ScrollView style={globalStyles.contentContainer}>
        <TextTitle title="Profissional" colors={[Colors.cameo, Colors.westar, Colors.ebonyClay]}/>
        <View style={styles.contentContainer}>
          <Image
            source={require('../../../assets/images/pico_mail.gif')}
            contentFit="cover"
            transition={1000}
            style={{ width: 200, height: 200, alignSelf: 'center' }}
          />
          <Text style={globalStyles.p}>Aqui dedico um espaço para apresentar minhas experiências profissionais do mercado de tecnologia.</Text>
          <View style={styles.textContainer}>
            <Text style={[globalStyles.h2, {color: Colors.cameo}]}>Experiências Profissionais</Text>
            <Text style={globalStyles.p}>Minhas experiências profissionais</Text>
          </View>
          <View className="formacao_list__container" style={styles.textContainer}>
            <ExperienciaBox
              name="Avanade Brasil | Full-Stack Developer"
              region="Recife, Pernambuco"
              period="Jan, 2025 - moment"
            />
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
    flexDirection: 'column' as const,
    gap: 20
  },
  textContainer: {
    gap: 10,
    alignItems: 'flex-start' as const
  }
});