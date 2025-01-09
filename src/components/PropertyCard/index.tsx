import React from 'react';
import { Text } from 'react-native';
import { SearchResult } from '../../features/searchProperties/types';
import * as S from './styles';

interface PropertyCardProps {
  property: SearchResult;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => (
  <S.Container>
    <Text style={{ fontWeight: 'bold' }}>{property.dados.title}</Text>
    <Text>{property.anuncio}</Text>
    <Text style={{ marginTop: 8 }}>
      💰 {property.dados.business_type === 'rent' ? 'Aluguel' : 'Venda'}: 
      R$ {property.dados.prices.rent_price || property.dados.prices.sale_price}
    </Text>
  </S.Container>
);
