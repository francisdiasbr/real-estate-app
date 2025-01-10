import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SearchResult } from '../../features/searchProperties/types';
import { RootStackParamList } from '../../navigation/types';
import { mockPropertyImages } from '../../mocks/mockImages';
import * as S from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface PropertyCardProps {
  property: SearchResult;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    if (property.id) {
      navigation.navigate('PropertyDetails', { propertyId: property.id });
    }
  };

  const formatPrice = () => {
    const price = property.dados.business_type === 'rent' 
      ? property.dados.prices.rent_price 
      : property.dados.prices.sale_price;
    return `R$ ${price?.toLocaleString('pt-BR')}`;
  };

  const getBusinessTypeLabel = () => {
    switch (property.dados.business_type) {
      case 'rent': return 'ALUGUEL';
      case 'sale': return 'VENDA';
      case 'sale_rent': return 'VENDA/ALUGUEL';
      default: return '';
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <S.Container>
        <S.PropertyImage
          source={{ uri: mockPropertyImages[property.id][0] }}
          resizeMode="cover"
        />
        <S.BusinessTypeChip type={property.dados.business_type}>
          <S.ChipText>{getBusinessTypeLabel()}</S.ChipText>
        </S.BusinessTypeChip>
        
        <S.Title>{property.dados.title}</S.Title>
        <S.Price>{formatPrice()}</S.Price>
        <S.AreaContainer>
          <MaterialCommunityIcons name="set-square" size={14} color="#757575" />
          <S.Area>{property.dados.features.area}m²</S.Area>
        </S.AreaContainer>
      </S.Container>
    </TouchableOpacity>
  );
};
