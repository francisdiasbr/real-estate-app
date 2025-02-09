import React, { useState } from 'react';
import { Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { SearchProperty } from '../../components/SearchProperty';
import { 
  selectAllProperties,
  selectSearchStatus,
  selectSearchError,
  selectSearchSummary
} from '../../features/searchProperties/searchPropertiesSlice';
import { SearchResult } from '../../features/searchProperties/types';
import * as S from './styles';
import { PropertyCard } from '../../components/PropertyCard/index';
import SummaryCard from '../../components/SummaryCard';

const HomeScreen = () => {
  const results = useSelector(selectAllProperties);
  const status = useSelector(selectSearchStatus);
  const error = useSelector(selectSearchError);
  const summary = useSelector(selectSearchSummary);

  const [searchQuery, setSearchQuery] = useState('');

  const renderProperty = ({ item }: { item: SearchResult }) => (
    <PropertyCard property={item} />
  );

  const renderEmptyState = () => {
    // Estado inicial - nunca fez busca
    if (status === 'idle') {
      return (
        <S.EmptyStateContainer>
          <S.EmptyStateIcon>🏠</S.EmptyStateIcon>
          <S.EmptyStateTitle>
            Encontre seu imóvel ideal!
          </S.EmptyStateTitle>
          <S.EmptyStateText>
            Digite no campo acima o que você procura.{'\n'}
            Por exemplo: "apartamento com 2 quartos em Pinheiros"
          </S.EmptyStateText>
        </S.EmptyStateContainer>
      );
    }

    // Busca realizada mas sem resultados
    if (status === 'succeeded' && results.length === 0) {
      return (
        <S.EmptyStateContainer>
          <S.EmptyStateIcon>🔍</S.EmptyStateIcon>
          <S.EmptyStateTitle>
            Nenhum imóvel encontrado
          </S.EmptyStateTitle>
          <S.EmptyStateText>
            Não encontramos propriedades com esses critérios.{'\n'}
            Tente modificar sua busca ou usar termos mais gerais.
          </S.EmptyStateText>
        </S.EmptyStateContainer>
      );
    }
  };

  return (
    <S.SafeArea>
      <S.Container>
        <SearchProperty 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <S.ResultsSection>
          {status === 'loading' && <ActivityIndicator />}
          {error && <Text>Erro: {error}</Text>}
          {status === 'succeeded' && results.length > 0 ? (
            <FlatList
              data={results}
              renderItem={renderProperty}
              keyExtractor={item => item.id}
              ListHeaderComponent={() => summary ? <SummaryCard summary={summary} /> : null}
            />
          ) : renderEmptyState()}
        </S.ResultsSection>
      </S.Container>
    </S.SafeArea>
  );
}

export default HomeScreen;