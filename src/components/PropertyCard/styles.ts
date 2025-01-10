import styled from 'styled-components/native';

export const Area = styled.Text`
  color: #757575;
  font-size: 12px;
  align-self: flex-end;
`;

export const AreaContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  gap: 4px;
`;

export const BusinessTypeChip = styled.View<{ type: 'rent' | 'sale' | 'sale_rent' }>`
  background-color: #FF385C;
  padding: 1px 6px;
  border-radius: 10px;
  align-self: flex-start;
  margin-bottom: 12px;
`;

export const Container = styled.View`
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  margin: 8px;
  elevation: 2;
`;

export const ChipText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const PropertyImage = styled.Image`
  width: 100%;
  height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;