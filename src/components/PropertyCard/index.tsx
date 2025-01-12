import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SearchResult } from '../../features/searchProperties/types';
import { RootStackParamList } from '../../navigation/types';
import { mockPropertyImages } from '../../mocks/mockImages';
import * as S from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type BusinessType = 'aluguel' | 'venda' | 'venda_aluguel';

interface PropertyCardProps {
  property: SearchResult;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const navigation = useNavigation<NavigationProp>();

  if (!property?.dados) {
    return null;
  }

  const handlePress = () => {
    if (property.id) {
      navigation.navigate('PropertyDetails', { propertyId: property.id });
    }
  };

  const formatPrice = () => {
    if (!property.dados.prices) return 'Preço sob consulta';
    
    const price = property.dados.business_type === 'aluguel' 
      ? property.dados.prices.rent_price 
      : property.dados.prices.sale_price;
    return price ? `R$ ${price.toLocaleString('pt-BR')}` : 'Preço sob consulta';
  };

  const getBusinessTypeLabel = () => {
    switch (property.dados.business_type as BusinessType) {
      case 'aluguel': return 'ALUGUEL';
      case 'venda': return 'VENDA';
      case 'venda_aluguel': return 'VENDA/ALUGUEL';
      default: return '';
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <S.Container>
        <S.PropertyImage
          source={{ uri: mockPropertyImages[property.id]?.[0] || '' }}
          resizeMode="cover"
        />
        <S.BusinessTypeChip type={property.dados.business_type}>
          <S.ChipText>{getBusinessTypeLabel()}</S.ChipText>
        </S.BusinessTypeChip>
        
        <S.Title>{property.dados.title}</S.Title>
        <S.Price>{formatPrice()}</S.Price>
        
        <S.FeaturesContainer>
          <S.FeatureItem>
            <MaterialCommunityIcons name="bed" size={16} color="#757575" />
            <S.FeatureText>{property.dados.features?.bedrooms || 0}</S.FeatureText>
          </S.FeatureItem>

          <S.FeatureItem>
            <MaterialCommunityIcons name="shower" size={16} color="#757575" />
            <S.FeatureText>{property.dados.features?.suites || 0}</S.FeatureText>
          </S.FeatureItem>

          <S.FeatureItem>
            <MaterialCommunityIcons name="toilet" size={16} color="#757575" />
            <S.FeatureText>{property.dados.features?.bathrooms || 0}</S.FeatureText>
          </S.FeatureItem>

          <S.FeatureItem>
            <MaterialCommunityIcons name="car" size={16} color="#757575" />
            <S.FeatureText>{property.dados.features?.parking_spots || 0}</S.FeatureText>
          </S.FeatureItem>

          <S.FeatureItem>
            <MaterialCommunityIcons name="set-square" size={16} color="#757575" />
            <S.FeatureText>{property.dados.features?.area || 0}m²</S.FeatureText>
          </S.FeatureItem>
        </S.FeaturesContainer>
      </S.Container>
    </TouchableOpacity>
  );
};
