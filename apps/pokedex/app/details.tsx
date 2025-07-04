import { View, Text } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Details of the selected pokémon</Text>
    </View>
  );
};

export default DetailsScreen;
