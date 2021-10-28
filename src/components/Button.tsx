import styled from "styled-components";

const PrimaryButton = styled.div`
  background: #AA00FF;
  box-shadow: 0px 16px 32px rgba(170, 0, 255, 0.24);
  border-radius: 8px;
  height: 56px;
  text-align: center;
  line-height: 56px;
  font-weight: 600;
  font-size: 16px;
  color: white;
	cursor: pointer;
	width: 100%;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s ease transform;
  };
`;

export default PrimaryButton
