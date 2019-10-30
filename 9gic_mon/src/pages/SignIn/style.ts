import styled from "styled-components";

import * as D from "../../style/default";
import BackgroundImg from "../../assets/Background.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImg});
`;

export const LoginModal = styled.div`
  width: 600px;
  height: 500px;
  background-color: white;
  z-index: 1;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-bottom: 17px;
`;

export const Underline = styled.div`
  width: 450px;
  border-top: 3px solid #ffaace;
  margin-bottom: 68px;
`;

export const LoginInput = styled(D.Input)`
  width: 344px;
  padding: 0 28px;
  margin-bottom: 30px;
`;

export const LoginBtn = styled(D.applyBtn)`
  width: 300px;
  height: 55px;
  color: black;
  margin: 10px 0 40px 0;
`;

export const helpContent = styled.span`
  font-size: 15px;
  color: #707070;
`;

export const SignUpText = styled.Link`
  margin-left: 40px;
  font-size: 15px;
  color: #fca8cb;
  cursor: pointer;
`;
