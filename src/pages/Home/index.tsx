import React, { useState } from 'react';
import { Text, Button, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';

import { Input } from '../../baseComponents/input/input';
import { 
  searchProperties, 
  selectAllProperties,
  selectSearchStatus,
  selectSearchError,
  selectSearchSummary
} from '../../features/searchProperties/searchPropertiesSlice';
import { SearchResult } from '../../features/searchProperties/types';
import * as S from './styles';
import { PropertyCard } from '../../components/PropertyCard/index';

const SummaryCard = ({ summary }: { summary: string }) => {
  const [expanded, setExpanded] = useState(false);
  
  const firstParagraph = summary.split('\n\n')[0];
  
  return (
    <S.SummaryCard>
      <S.SummaryText>
        {expanded ? summary : firstParagraph}
      </S.SummaryText>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <S.ExpandButton>
          <Text style={{ color: '#FF385C' }}>
            {expanded ? 'Ver menos' : 'Ver mais'}
          </Text>
        </S.ExpandButton>
      </TouchableOpacity>
    </S.SummaryCard>
  );
};

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const results = useSelector(selectAllProperties);
  const status = useSelector(selectSearchStatus);
  const error = useSelector(selectSearchError);
  const summary = useSelector(selectSearchSummary);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      dispatch(searchProperties({
        query: searchQuery,
        limit: 10
      }));
    }
  };

  const renderProperty = ({ item }: { item: SearchResult }) => (
    <PropertyCard property={item} />
  );

  return (
    <S.SafeArea>
      <S.Container>
        <S.SearchSection>
          <Input 
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <S.Button onPress={handleSearch}>
            <S.SearchButtonText>Pesquisar</S.SearchButtonText>
          </S.Button>
        </S.SearchSection>
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