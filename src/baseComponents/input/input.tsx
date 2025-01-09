import React from 'react';

import * as S from './styles';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const Input: React.FC<InputProps> = ({ value, onChangeText }) => {
  return (
    <S.Input 
      placeholder="Pesquise aqui o seu imóvel dos sonhos" 
      value={value} 
      onChangeText={onChangeText} 
    />
  );
};
