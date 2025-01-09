import React, { useState } from 'react';
import { Text, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';

import { Input } from '../../baseComponents/input/input';
import { 
  searchProperties, 
  selectAllProperties,
  selectSearchStatus,
  selectSearchError 
} from '../../features/searchProperties/searchPropertiesSlice';
import { SearchResult } from '../../features/searchProperties/types';
import * as S from './styles';
import { PropertyCard } from '../../components/PropertyCard/index';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const results = useSelector(selectAllProperties);
  const status = useSelector(selectSearchStatus);
  const error = useSelector(selectSearchError);
  
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
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>🏡Pesquise aqui o seu imóvel dos sonhos</Text>
          <Text>Ex: Casa ou apartamento de até 3 dormitórios no bairro Baixo Chiado. Estou disposto a pagar até 1200€/mês</Text>
          <Input 
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Button 
            title="Pesquisar" 
            onPress={handleSearch}
          />
        </S.SearchSection>
        <S.ResultsSection>
          {status === 'loading' && <Text>Carregando...</Text>}
          {error && <Text>Erro: {error}</Text>}
          {status === 'succeeded' && results.length > 0 && (
            <FlatList
              data={results}
              renderItem={renderProperty}
              keyExtractor={item => item.id}
            />
          )}
        </S.ResultsSection>
      </S.Container>
    </S.SafeArea>
  );
}

export default HomeScreen;