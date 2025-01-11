import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
`;

export const SearchSection = styled.View`
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  padding: 16px;
`;

export const ResultsSection = styled.View`
  flex: 1;
  margin-top: 8px;
  padding: 16px;
`;

export const PropertyCard = styled.View`
  padding: 16px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 8px;
  elevation: 2;
`;

export const SummaryCard = styled.View`
  background-color: #fff;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-radius: 3.84px;
`;

export const SummaryText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #333;
  margin-bottom: 8px;
`;

export const ExpandButton = styled.View`
  padding: 8px 0;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #FF385C;
  padding: 10px 20px;
  border-radius: 6px;
  align-items: center;
`;

export const SearchButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;