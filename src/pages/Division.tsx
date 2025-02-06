import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../themes/styles';


//definir la interfaz estructura del formulario
interface DivForm {
  number1: number;
  number2: number;
}

export const Division = () => {
  //hook useState para manejar el estado del formulario
  const [divForm, setDivForm] = useState<DivForm>({
    number1: NaN,
    number2: NaN
  });
  //Funcion para la captura y  cambio de los campos del form
  const handleChange = (name: string, value: string): void => {
    //modificar la data del divForm
    setDivForm({ ...divForm, [name]:Number(value)  });
  }
  //Funcion para Guardar los numeros dando click
  const [resultado, setResultado] = useState<number>(0)
  const handleDivision = () => {
    if (isNaN(divForm.number1) || isNaN(divForm.number2)) {
      Alert.alert('Error', 'Campos incompletos');
      return;
    } else if (divForm.number1 === 0 && divForm.number2 === 0) {
      Alert.alert('Error', 'Indeterminacion');
      return;
    }
    else if (divForm.number2 === 0) {
      Alert.alert('Error', 'No existe división para 0');
      return;
    } else {
      //verificar si se hizo el cambio correcto de valores del form
      console.log(divForm);
      setResultado((divForm.number1) / (divForm.number2));
    }


  }
  //funcion para realizar la division y devolver

  const { height } = useWindowDimensions();


  return (
    <SafeAreaView>
      <Text style={{
        ...styles.title,
        height: height * 0.15
      }}>Calculadora De División</Text>
      <BodyComponent pantalla='screenDiv'>
        <View style={styles.containerTextInput}>
          <InputComponent
            placehorderText='Ingrese el primer número'
            keyboardType='decimal-pad'
            handleChange={handleChange}
            name='number1'
          />

          <InputComponent
            placehorderText='Ingrese el segundo número'
            keyboardType='decimal-pad'
            handleChange={handleChange}
            name='number2'
          />
        </View>
        <ButtonComponent title='Dividir' handleDivision={handleDivision} />
        <Text style={styles.textResultado} >El resultado de su division es: <Text style={styles.resutlado} >{resultado.toFixed(2)}</Text> </Text>
      </BodyComponent>
    </SafeAreaView>
  )
}
