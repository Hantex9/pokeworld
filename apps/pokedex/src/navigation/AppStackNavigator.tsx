import { Stack } from 'expo-router';

import { CustomHeaderLeft } from '../components/common/CustomHeaderLeft';

export const AppStackNavigator = () => (
  <Stack
    screenOptions={{
      headerLeft: CustomHeaderLeft,
    }}
  >
    <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
    <Stack.Screen
      name="details"
      options={{
        title: '',
        headerShown: true,
        headerBackground: () => <></>,
      }}
    />
    <Stack.Screen name="+not-found" />
  </Stack>
);
