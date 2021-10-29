import styled from "styled-components";

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100vh;
	text-align: center;
  @media (max-width: 600px) {
    width: 90%;
  }
	h1 {
		margin: 20px 0 16px 0;
    font-weight: 600;
    font-size: 40px;
	}
	h2 {
    font-family: SF-Pro-Text;
    font-weight: normal;
    font-size: 20px;
    opacity: 0.6;
		margin-bottom: 32px;
  }
`;

export const DurationContainer = styled.div`
  font-weight: 600;
  font-size: 40px;
	margin-bottom: 35px;
`;

export const TimeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 10px;
`;

export const TimeContainerWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;