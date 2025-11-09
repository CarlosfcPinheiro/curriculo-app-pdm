import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';
import globalStyles from '../app/_globalStyles';

interface FormacaoBoxProps {
    name: string,
    institution: string,
    period: string,
}

export default function FormacaoBox({name, institution, period}: FormacaoBoxProps) {
    return (
        <View className='formacao_box__container' style={styles.formacaoBoxContainer}>
            <View className='name_institution__container' style={styles.nameInstitutionContainer}>
                <Text style={[globalStyles.h3, {color: Colors.primaryText}]}>{name}</Text>
                <Text style={globalStyles.p}>{institution}</Text>
            </View>
            <Text style={globalStyles.p}>{period}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nameInstitutionContainer: {
        marginBottom: 16,
    },
    formacaoBoxContainer: {
        flex: 1,
        padding: 14,
        borderRadius: 1,
        borderWidth: 0.5,
        borderColor: Colors.secondaryText,
    }
});