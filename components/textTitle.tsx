import { Text, View } from "react-native";

import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

interface TextTitleProps {
    title: string;
    colors: [string, string, string];
}

export default function TextTitle({title, colors}: TextTitleProps) {
    return (
        <MaskedView
            style={styles.container}
            maskElement={
                <View style={styles.maskContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            }
        >
            <LinearGradient
                colors={colors}
                start={{ x: 0, y: 0}}
                end={{ x: 1, y: 0}}
                style={styles.gradient}
            >
                <Text style={[styles.title, { opacity: 0 }]}>{title}</Text>
            </LinearGradient>
        </MaskedView>
    )
}

const styles = {
    title: {
        fontSize: 28,
        fontWeight: 'bold' as const,
        marginBottom: 8,
        textAlign: 'center' as const
    },
    gradient: {
        flex: 1,
        justifyContent: 'center' as const
    },
    container: {
        flexDirection: 'row' as const,
        height: 40
    },
    maskContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center' as const
    }
}