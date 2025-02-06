import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface Props{
        title:string;
        handleDivision:()=>number;
}

export const ButtonComponent = ({title,handleDivision}:Props) => {
  return (
    <TouchableOpacity
    onPress={handleDivision}
    >
    <Text>{title}</Text>
  </TouchableOpacity>
  )
}
