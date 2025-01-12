import React from 'react';
import { TextInputProps } from 'react-native';
import * as S from './styles';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const Input: React.FC<InputProps> = ({ value, onChangeText, ...rest }) => {
  return (
    <S.Input
      value={value}
      onChangeText={onChangeText}
      placeholder="Descreva o imóvel que procura..."
      placeholderTextColor="#666"
      {...rest}
    />
  );
};
