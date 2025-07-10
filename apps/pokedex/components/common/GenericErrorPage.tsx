import { H4, Pictogram, Pictograms, VStack } from '@pokeworld/ui';

type GenericErrorPageProps = {
  text: string;
  pictogram: Pictograms;
};

export const GenericErrorPage = ({ text, pictogram }: GenericErrorPageProps) => {
  return (
    <VStack
      space={16}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Pictogram name={pictogram} />
      <H4 style={{ textAlign: 'center' }}>{text}</H4>
    </VStack>
  );
};
