import styled from "styled-components";

import { applyBtn } from "../../../style/default";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 16%;
`;

export const ReplaceImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 4%;
`;

export const Text = styled.p`
  font-size: 30px;
  text-align: center;
  color: #707070;
`;

export const ButtonGoToMainPage = styled(applyBtn)`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: #ffaace;
  margin-top: 16%;
  font-size: 18px;
  text-align: center;
`;
