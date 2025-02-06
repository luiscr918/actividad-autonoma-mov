import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'
import { styles } from '../themes/styles';

interface Props{
    placehorderText:string;
    keyboardType?:KeyboardTypeOptions;
    handleChange:(name:string,value:string)=>void;
    name:string
}

export const InputComponent = ({placehorderText,keyboardType='default',handleChange,name}:Props) => {
    return (
        <TextInput
            style={styles.textInputs}
            placeholder={placehorderText}
            placeholderTextColor={'white'}
            keyboardType={keyboardType}
            onChangeText={(value)=>handleChange(name,value)}
        />
    )
}
