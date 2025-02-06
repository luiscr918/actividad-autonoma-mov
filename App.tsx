import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNvigator';

const App=()=> {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
export default App;

