import styled from "styled-components";

import * as D from "../../style/default";
import BackgroundImg from "../../assets/signin/Background.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: auto 100vh;
`;

export const LoginModal = styled.div`
  width: 600px;
  height: 500px;
  background-color: white;
  z-index: 2;
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
  margin: 10px 0 40px 0;
  font-size: 20px;
  text-align: center;
`;

export const helpContent = styled.span`
  font-size: 15px;
  color: #707070;
`;

export const SignUpText = styled.button`
  margin-left: 40px;
  font-size: 15px;
  color: #fca8cb;
  cursor: pointer;
`;

export const leftText = styled.p`
  font-size: 80px;
  color: white;
  transform: rotate(90deg);
  position: absolute;
  z-index: 1;
  left: -130px;
  top: 200px;
`;

export const rightText = styled.p`
  font-size: 80px;
  color: #fca8cb;
  transform: rotate(270deg);
  position: absolute;
  z-index: 1;
  bottom: 250px;
  right: -180px;
`;

export const underText = styled.p`
  font-size: 35px;
  color: white;
  position: absolute;
  left: 56px;
  bottom: 35px;
`;
