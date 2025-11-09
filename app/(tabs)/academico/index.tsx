import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";

import FormacaoBox from "@/components/formacaoBox";
import TextTitle from "@/components/textTitle";

import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";
import globalStyles from "../../_globalStyles";

export default function Academico() {
  return (
    <View style={globalStyles.bodyContainer}>
      <ScrollView style={globalStyles.contentContainer}>
        <TextTitle 
          title="Acadêmico"
          colors={[Colors.westar, Colors.mauve, Colors.eastBay]}
        />
        <View style={styles.contentContainer}>
          <Image
            source={require('../../../assets/images/pico_books.gif')}
            contentFit="cover"
            transition={1000}
            style={{ width: 150, height: 150, alignSelf: 'center' }}
          />
          <Text style={globalStyles.p}>Aqui dedico um espaço para minhas formações anteriores e atuais, certificações e outros cursos.</Text>
          <View style={styles.textContainer}>
            <Text style={[globalStyles.h2, {color: Colors.mauve}]}>Formações</Text>
            <Text style={globalStyles.p}>Minhas formações acadêmicas</Text>
          </View>
          <View className="formacao_list__container" style={styles.textContainer}>
            <FormacaoBox
              name="Sistemas para Internet (Tecnólogo)"
              institution="Universidade Católica de Pernambuco • Recife, Pernambuco"
              period="Fev, 2023 - momento"
            />
            <FormacaoBox
              name="Desenvolvimento de Sistemas (Técnico)"
              institution="ETE Porto Digital • Recife, Pernambuco"
              period="Jan, 2021 - Dec, 2023"
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