import { View, Text } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Details of the selected pokémon</Text>
    </View>
  );
}
