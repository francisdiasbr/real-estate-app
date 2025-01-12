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
          {status === 'succeeded' && results.length > 0 && (
            <FlatList
              data={results}
              renderItem={renderProperty}
              keyExtractor={item => item.id}
              ListHeaderComponent={() => summary ? <SummaryCard summary={summary} /> : null}
            />
          )}
        </S.ResultsSection>
      </S.Container>
    </S.SafeArea>
  );
}

export default HomeScreen;