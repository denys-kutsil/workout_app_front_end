import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ArrowIconWrapper = styled.div`
  margin-bottom: 24px;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: 0.5s ease transform;
  }
  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;

export const TitleContainer = styled.div`
  font-size: 16px;
  font-weight: 600;
  font-family: SF-Pro-Text;
  margin-bottom: 20px;
`;

export const CategoryItemContainer = styled.div`
  padding: 10px 0 24px 0;
  border-top: 1px solid #eeeeee;
`;

export const WorkoutItemData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 15px;
`;

export const CategoriesContainer = styled.div`
  margin-top: 24px;
  padding-bottom: 86px;
  @media (max-width: 600px) {
    padding: 0 16px 86px 16px;
  } ;
`;

export const WorkoutItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  h1 {
    font-size: 18px;
  }
  h2 {
    font-size: 14px;
    font-family: SF-Pro-Text;
    margin-top: 5px;
  }
  img {
    height: 64px;
    width: 64px;
    border-radius: 12px;
  }
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 30px;
  width: 50%;
  @media (max-width: 600px) {
    width: calc(100% - 32px);
    left: 50%;
    transform: translate(-50%, 0);
  }
  &:hover {
    cursor: pointer;
    transition: 0.5s ease transform;
  }
`;

export const DataContainer = styled.div`
  padding: 20px 0;
  h2 {
    font-size: 14px;
    font-family: SF-Pro-Text;
  }
  h1 {
    margin: 5px 0;
    font-weight: 600;
    font-size: 24px;
  }
  h3 {
    font-weight: normal;
    font-size: 14px;
    font-family: SF-Pro-Text;
  }
  @media (max-width: 600px) {
    padding: 20px 16px;
  }
`;

export const ImagePreview = styled.img`
  object-fit: contain;
`;
