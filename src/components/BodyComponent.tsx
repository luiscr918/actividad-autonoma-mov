import React, { ReactNode } from 'react'
import { useWindowDimensions, View, ViewStyle } from 'react-native';
import { styles } from '../themes/styles';

interface Props {
    children: ReactNode;
    pantalla?: string;
}

export const BodyComponent = ({ children, pantalla }: Props) => {
    const { height } = useWindowDimensions();
    // Estilos específicos según la pantalla
    const estilosDinamicos: ViewStyle = {
        ...(pantalla === 'screenDiv' && { justifyContent: 'flex-start' })
    };
    return (
        <View
            style={{
                ...styles.body,
                ...estilosDinamicos,
                height: height * 0.90
            }}>
            {children}
        </View>
    )
}
