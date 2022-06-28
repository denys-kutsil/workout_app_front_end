import styled from "styled-components";

export const MainContainer = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    padding: 0 16px;
  }
`;

export const PauseButtonContainer = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s ease transform;
  }
`;

export const FooterContainer = styled.div`
  border-top: 8px solid #eeeeee;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 5px 0;
  background: white;
`;

export const CircularProgressbarContainer = styled.div`
  width: 128px;
  height: 128px;
`;

export const SwitchExerciseButton = styled.button`
  visibility: ${(props: { visible: boolean }) =>
    props.visible ? "visible" : `hidden`};
  width: 80px;
  height: 50px;
  border: 2px solid #aa00ff;
  border-radius: 8px;
  background: transparent;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s ease transform;
  }
`;

export const ImagePreview = styled.div`
  background-image: ${(props: { image: string }) => `url(${props.image})`};
  width: 100%;
  height: 500px;
  border-radius: 8px;
  background-size: cover;
  margin-top: 32px;
  @media (max-width: 500px) {
    height: 300px;
  }
`;

export const PauseContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(33, 33, 33, 0.6);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: SF-Pro-Display;
    color: white;
    font-weight: 600;
    font-size: 24px;
  }
  h2 {
    font-family: SF-Pro-Text;
    font-weight: normal;
    font-size: 16px;
    color: white;
    margin: 8px 0 32px 0;
  }
`;

export const LeaveButton = styled.button`
  border: 2px solid #eeeeee;
  background: transparent;
  color: #eeeeee;
  border-radius: 8px;
  width: 250px;
  height: 48px;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s ease transform;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  padding: 42px 0 32px 0;
`;
