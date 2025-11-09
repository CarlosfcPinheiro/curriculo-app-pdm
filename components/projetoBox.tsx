import { StyleSheet, Text, View } from "react-native";

import globalStyles from "@/app/_globalStyles";
import { Link } from "expo-router";

import { Colors } from "@/constants/theme";

interface ProjetoBoxProps {
    name: string,
    description: string,
    link: string,
    stacks?: string[]
}

export default function ProjetoBox({name, description, link, stacks}: ProjetoBoxProps){
    return (
        <View className="projeto_box__container" style={styles.projetoBoxContainer}>
            <View className="name_description__container" style={styles.nameDescriptionContainer}>
                <Link href={link as any} target="_blank">
                    <Text style={[globalStyles.h3, {textDecorationLine: 'underline', color: Colors.primaryText}]}>{name}</Text>
                </Link>
                <Text style={globalStyles.p}>{description}</Text>
            </View>
                <View className="stacks_list__container" style={styles.stacksListContainer}>
                    {stacks?.map((stack, index) => (
                        <Text key={index} style={[globalStyles.p, styles.stack]}>{stack}</Text>
                    ))}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nameDescriptionContainer: {
        marginBottom: 16,
    },
    projetoBoxContainer: {
        width: '100%',
        padding: 14,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: Colors.secondaryText,
    },
    stacksListContainer: {
        display: 'flex',
        flexDirection: 'row' as const,
        gap: 8,
    },
    stack: {
        padding: 4,
        backgroundColor: Colors.contrast,
        borderRadius: 4
    }
});