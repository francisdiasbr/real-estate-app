import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as S from './styles';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const Input: React.FC<InputProps> = ({ value, onChangeText }) => {
  return (
    <S.InputContainer>
      <Ionicons name="search" size={20} color="#000" style={{ marginRight: 8 }} />
      <S.Input
        placeholder="Inicie sua busca"
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#000"
      />
    </S.InputContainer>
  );
};
