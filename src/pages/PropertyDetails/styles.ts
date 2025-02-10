import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const BackButtonContainer = styled.View`
  position: absolute;
  top: 48px;
  left: 16px;
  z-index: 1;
`;

export const BackButton = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: rgba(255, 255, 255, 0.95);
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.15;
  shadow-radius: 4px;
  elevation: 4;
`;

export const CarouselImage = styled.Image`
  width: ${screenWidth}px;
  height: ${screenWidth}px;
`;

export const ContentContainer = styled.View`
  padding: 24px 24px 100px 24px;
  background-color: #fff;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #EBEBEB;
  margin: 24px 0;
`;

export const Location = styled.Text`
  font-size: 16px;
  color: #717171;
  margin-top: 4px;
  font-weight: 400;
`;

export const FeatureContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
`;

export const FeatureItem = styled.View`
  align-items: center;
  flex: 1;
  padding: 8px 4px;
`;

export const FeatureText = styled.Text`
  font-size: 14px;
  color: #717171;
  margin-top: 6px;
  font-weight: 500;
`;

// Modal Styles - Improved for Airbnb look
export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ModalContent = styled.View`
  background-color: white;
  width: 90%;
  border-radius: 16px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  padding-bottom: 6px;
  margin-bottom: 40px;
`;

export const Input = styled.TextInput`
  background-color: #F7F7F7;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  border-width: 1px;
  border-color: #EBEBEB;
  margin: 16px 0;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #FF385C;
  padding: 15px;
  border-radius: 12px;
  align-items: center;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #EBEBEB;
`;

export const ModalCloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #F7F7F7;
  justify-content: center;
  align-items: center;
`;

export const ModalHeaderTitle = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #222222;
`;

export const ModalScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    padding: 24,
  }
})`
  flex: 1;
`;

export const ModalTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 16px;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #484848;
`;

export const PaginationContainer = styled.View`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 6px 12px;
  border-radius: 16px;
`;

export const PaginationText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 8px;
  line-height: 32px;
`;

// New components for better modal experience
export const ModalActionButton = styled.TouchableOpacity`
  background-color: #FF385C;
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  margin-top: 16px;
`;

export const ModalActionButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const ModalSection = styled.View`
  margin-bottom: 24px;
`;

export const ModalSectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 12px;
`;