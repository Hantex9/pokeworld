import { useRouter } from 'expo-router';
import { Button, View, Text } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home with list of all pokémon</Text>
      <Button title="Go to details" onPress={() => router.push('/details')} />
    </View>
  );
}
