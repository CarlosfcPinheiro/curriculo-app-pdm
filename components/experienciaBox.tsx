import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';
import globalStyles from '../app/_globalStyles';

interface ExperienciaBoxProps {
    name: string,
    region: string,
    period: string,
}

export default function ExperienciaBox({name, region, period}: ExperienciaBoxProps) {
    return (
        <View className='experiencia_box__container' style={styles.experienciaBoxContainer}>
            <View className='name_institution__container' style={styles.nameRegionContainer}>
                <Text style={[globalStyles.h3, {color: Colors.primaryText}]}>{name}</Text>
                <Text style={globalStyles.p}>{region}</Text>
            </View>
            <Text style={globalStyles.p}>{period}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nameRegionContainer: {
        marginBottom: 16,
    },
    experienciaBoxContainer: {
        flex: 1,
        padding: 14,
        borderRadius: 1,
        borderWidth: 0.5,
        borderColor: Colors.secondaryText,
    }
});