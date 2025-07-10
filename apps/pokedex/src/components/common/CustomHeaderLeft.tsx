import { useTheme } from '@pokeworld/ui';
import { HeaderBackButton } from '@react-navigation/elements';
import { useRouter } from 'expo-router';

export const CustomHeaderLeft = () => {
  const router = useRouter();
  const theme = useTheme();

  return <HeaderBackButton tintColor={theme['textBody-default']} onPress={() => router.back()} />;
};
