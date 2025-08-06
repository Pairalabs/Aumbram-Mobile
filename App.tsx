import { StatusBar, Text, useColorScheme, View } from 'react-native';
import "./global.css";

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}


export default App;
