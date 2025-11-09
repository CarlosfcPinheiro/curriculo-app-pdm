import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import ProjetoBox from "@/components/projetoBox";
import TextTitle from "@/components/textTitle";

import { Colors } from "@/constants/theme";
import globalStyles from "../../_globalStyles";

export default function Projetos() {
  return (
    <View style={globalStyles.bodyContainer}>
      <ScrollView style={globalStyles.contentContainer}>
        <TextTitle title="Projetos" colors={[Colors.sanJuan, Colors.norway, Colors.rum]} />
        <View style={styles.contentContainer}>
          <Image
            source={require('../../../assets/images/pico_cube.gif')}
            contentFit="cover"
            transition={1000}
            style={{ width: 150, height: 150, borderRadius: 5 }}
          />
          <Text style={globalStyles.p}>Explore e colabore com os projetos que fiz ou que ainda estão em desenvolvimento.</Text>
          <View style={styles.textContainer}>
            <Text style={[globalStyles.h2, {color: Colors.norway}]}>Projetos principais</Text>
            <Text style={globalStyles.p}>Confira os meus projetos princiapis, como tecnologias utilizadas, repositório, etc</Text>
          </View>
          <View className="projetos_list__container" style={[styles.textContainer, {marginBottom: 50}]}>
            <ProjetoBox 
              name="Pronto Recife API" 
              description="Prontuário eletrônico que busca integrar as diferentes demandas em postos de saúde, exames, laudos, consultas, médicos e pacientes."
              link="https://github.com/Pronto-Recife/Back-End-Pronto-Recife"
              stacks={["Java", "Spring", "MySQL", "Docker", "Redis"]} 
            />
            <ProjetoBox 
              name="Darcy" 
              description="Ferramenta de gerenciamento de métricas para integrar os planos de aulas de professores."
              link="https://github.com/Darcy-PI/API-Darcy"
              stacks={["Java", "Spring", "PostgreSQL", "NextJS"]} 
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
    alignItems: 'center' as const,
    flexDirection: 'column' as const,
    gap: 20,
    width: '100%'
  },
  textContainer: {
    gap: 10,
    width: '100%'
  }
});