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

export const EmptyStateContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const EmptyStateIcon = styled.Text`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const EmptyStateTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  text-align: center;
`;

export const EmptyStateText = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
  line-height: 24px;
`;