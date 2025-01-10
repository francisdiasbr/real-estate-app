import styled from 'styled-components/native';


export const BackButtonContainer = styled.View`
  position: absolute;
  top: 60px;
  left: 24px;
  z-index: 1;
`;

export const BackButton = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  elevation: 3;
`;

export const ContentContainer = styled.View`
  padding: 24px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 0;
  margin: 0;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #DDDDDD;
  margin: 16px 0;
`;

export const ImageContainer = styled.View`
  width: 100%;
  flex: 1;
  height: 400px;
  background-color: black;
  position: relative;
  padding: 0;
  margin: 0;
`;

export const Location = styled.Text`
  font-size: 16px;
  color: #717171;
`;


export const FeatureContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FeatureItem = styled.View`
  align-items: center;
  flex: 1;
`;

export const FeatureText = styled.Text`
  font-size: 14px;
  color: #717171;
  margin-top: 4px;
`;

export const Header = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

export const ModalContent = styled.View`
  background-color: #fff;
  height: 90%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const ModalCloseButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const ModalHeaderTitle = styled.Text`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-right: 28px;
`;

export const ModalScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 24
  }
})`
  flex: 1;
`;

export const ModalTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 16px;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #666;
  padding: 0 16px;
`;

export const PaginationContainer = styled.View`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4px 12px;
  border-radius: 16px;
`;

export const PaginationText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

export const PriceContainer = styled.View`
  padding: 16px 24px;
  border-top-width: 1px;
  border-top-color: #DDDDDD;
  background-color: #fff;
`;

export const Price = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: #222222;
`;

export const PropertyImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 8px;
  line-height: 32px;
`;