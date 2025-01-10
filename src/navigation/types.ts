import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Defina os types dos parâmetros das rotas
export type RootStackParamList = {
  Home: undefined;
  PropertyDetails: { propertyId: string };
};

// Defina o type da prop route
export type PropertyDetailsScreenRouteProp = RouteProp<RootStackParamList, 'PropertyDetails'>;

// Defina o type da prop navigation
export type PropertyDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PropertyDetails'>;
