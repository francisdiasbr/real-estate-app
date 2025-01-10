import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, Modal, View, Dimensions, StatusBar } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { 
  fetchProperty,
  selectCurrentProperty,
  selectPropertyStatus,
  selectPropertyError 
} from '../../features/property/propertySlice';
import * as S from './styles';
import { mockPropertyImages } from '../../mocks/mockImages';
import { Ionicons } from '@expo/vector-icons';

type RouteParams = {
  PropertyDetails: {
    propertyId: string;
  };
};

export default function PropertyDetails() {
  const route = useRoute<RouteProp<RouteParams, 'PropertyDetails'>>();
  const dispatch = useDispatch<AppDispatch>();
  const property = useSelector(selectCurrentProperty);
  const status = useSelector(selectPropertyStatus);
  const error = useSelector(selectPropertyError);
  const navigation = useNavigation();
  const [showAdModal, setShowAdModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProperty(route.params.propertyId));
  }, [dispatch, route.params.propertyId]);

  const getFirstFiveLines = (text: string) => {
    return text.split('\n').slice(0, 5).join('\n');
  };

  if (status === 'loading') {
    return <ActivityIndicator size="large" color="#d7d7d7" />;
  }

  if (error) {
    return <Text>Erro ao carregar: {error}</Text>;
  }

  if (!property) {
    return <Text>Nenhuma propriedade encontrada</Text>;
  }

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <S.Container contentContainerStyle={{ paddingHorizontal: 0 }}>
        <S.ImageContainer>
          <S.PropertyImage
            source={{ uri: mockPropertyImages[property.id as keyof typeof mockPropertyImages][0] }}
            resizeMode="cover"
          />
          <S.BackButtonContainer>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <S.BackButton>
                <Ionicons name="chevron-back-outline" size={20} color="#222222" />
              </S.BackButton>
            </TouchableOpacity>
          </S.BackButtonContainer>
        </S.ImageContainer>
        <S.ContentContainer>
          <S.Title>{property.dados.title}</S.Title>
          <S.Location>
            {`${property.dados.location.neighborhood}, ${property.dados.location.city} - ${property.dados.location.state}`}
          </S.Location>

          <S.Divider />

          <S.FeatureContainer>
            <S.FeatureItem>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {property.dados.features.bedrooms}
              </Text>
              <S.FeatureText>Quartos</S.FeatureText>
              <Text style={{ fontSize: 18 }}>🛏️</Text>
            </S.FeatureItem>

            <S.FeatureItem>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {property.dados.features.suites}
              </Text>
              <S.FeatureText>Suítes</S.FeatureText>
              <Text style={{ fontSize: 18 }}>🛁</Text>
            </S.FeatureItem>

            <S.FeatureItem>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {property.dados.features.bathrooms}
              </Text>
              <S.FeatureText>Banheiros</S.FeatureText>
              <Text style={{ fontSize: 18 }}>🚽</Text>
            </S.FeatureItem>

            <S.FeatureItem>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {property.dados.features.area}m²
              </Text>
              <S.FeatureText>Área</S.FeatureText>
              <Text style={{ fontSize: 18 }}>📏</Text>
            </S.FeatureItem>

            <S.FeatureItem>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {property.dados.features.parking_spots}
              </Text>
              <S.FeatureText>Vagas</S.FeatureText>
              <Text style={{ fontSize: 18 }}>🚗</Text>
            </S.FeatureItem>
          </S.FeatureContainer>

          <S.Divider />

          <Text style={{ fontSize: 16, marginBottom: 8, fontWeight: 'bold' }}>
            Descrição
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 24, color: '#666' }}>
            {property.dados.description}
          </Text>
          <S.Divider />
          <Text style={{ fontSize: 16, marginBottom: 8, fontWeight: 'bold' }}>
            Comodidades
          </Text>
          {property.dados.amenities.map((amenity, index) => (
            <Text key={index} style={{ fontSize: 16, color: '#666' }}>
              • {amenity}
            </Text>
          ))}
          <S.Divider />
          <Text style={{ fontSize: 16, lineHeight: 24, color: '#666' }}>
            {getFirstFiveLines(property.anuncio)}
          </Text>
          <TouchableOpacity onPress={() => setShowAdModal(true)}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 8, color: '#333' }}>
              Mostrar mais
            </Text>
          </TouchableOpacity>
        </S.ContentContainer>

        <S.PriceContainer>
          {property.dados.business_type.includes('sale') && (
            <S.Price>Venda: R$ {property.dados.prices.sale_price?.toLocaleString()}</S.Price>
          )}
          {property.dados.business_type.includes('rent') && (
            <>
              <S.Price>Aluguel: R$ {property.dados.prices.rent_price?.toLocaleString()}/mês</S.Price>
              <Text style={{ fontSize: 14, color: '#666' }}>
                Condomínio: R$ {property.dados.prices.condo_fee?.toLocaleString()}/mês
              </Text>
              <Text style={{ fontSize: 14, color: '#666' }}>
                IPTU: R$ {property.dados.prices.property_tax?.toLocaleString()}/ano
              </Text>
            </>
          )}
        </S.PriceContainer>

        <Modal
          visible={showAdModal}
          transparent
          animationType="slide"
          onRequestClose={() => setShowAdModal(false)}
        >
          <S.ModalOverlay>
            <S.ModalContent>
              <S.ModalHeader>
                <S.ModalCloseButton onPress={() => setShowAdModal(false)}>
                  <Text style={{ fontSize: 24 }}>✕</Text>
                </S.ModalCloseButton>
              </S.ModalHeader>
              <S.ModalScrollView>
                <S.ModalTitle>Sobre este imóvel</S.ModalTitle>
                <S.ModalText>{property.anuncio}</S.ModalText>
              </S.ModalScrollView>
            </S.ModalContent>
          </S.ModalOverlay>
        </Modal>
      </S.Container>
    </>
  );
}

