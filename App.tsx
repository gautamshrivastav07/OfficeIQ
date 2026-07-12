import { NavigationContainer } from '@react-navigation/native';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import AppNavigator from './src/navigation/AppNavigator';

function App() {
  return (
    <KeyboardProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </KeyboardProvider>
  );
}

export default App;
