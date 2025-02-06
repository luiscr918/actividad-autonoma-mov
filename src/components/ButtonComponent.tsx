import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../themes/styles';

interface Props{
        title:string;
        handleDivision:()=>number;
}

export const ButtonComponent = ({title,handleDivision}:Props) => {
  return (
    <TouchableOpacity
    onPress={handleDivision}
    style={styles.button}
    >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
  )
}
