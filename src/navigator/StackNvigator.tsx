import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { Division } from '../pages/Division';
import { PRIMARY_COLOR } from '../themes/colorsByMe/const';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle:{
        backgroundColor:PRIMARY_COLOR
      }
    }}>
      <Stack.Screen name="Home"
        options={{ headerShown: false }}
        component={Home} />
      <Stack.Screen name="CalculadoraDiv"
        options={{ headerShown: false }}
        component={Division} />
    </Stack.Navigator>
  );
}