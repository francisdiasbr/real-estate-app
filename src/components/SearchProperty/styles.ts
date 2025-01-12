import styled from 'styled-components/native';

import { Input } from '../../baseComponents/input/styles';


export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 4px;
`;

export const MessageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  padding: 4px;
  min-height: 48px;
`;

export const SearchSection = styled.View`
  padding: 16px;
  background-color: #fff;
`;

export const SendButton = styled.TouchableOpacity`
  background-color: #FF385C;
  padding: 8px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-left: 8px;
`;

export const RecordingTime = styled.Text`
  font-size: 12px;
  color: #FF385C;
  margin-top: 4px;
`;

  export const StyledInput = styled(Input)`
  flex: 1;
  font-size: 16px;
  padding: 4px;
  max-height: 120px;
  margin-right: 16px;
`; 

export const VoiceButton = styled.TouchableOpacity`
  padding: 8px;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

export const RecordingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-right: 18px;
  width: 90px;
  margin-left: 30px;
`;