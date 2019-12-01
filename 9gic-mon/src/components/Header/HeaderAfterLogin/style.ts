import styled from "styled-components";

import {
  KeepSafeLineContainer,
  KeepSafeLineContent
} from "../../../style/default";

interface ModalActivation {
  isActivation: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 6.6vh;
  /* height: 60px; */
  background: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.36);
  position: absolute;
  z-index: 2;
`;

export const TopContainer = styled(KeepSafeLineContainer)`
  flex: 4;
  background: white;
  display: flex;
  align-items: center;
`;

export const TopContentContainer = styled(KeepSafeLineContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  > span {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const BottomContainer = styled.div`
  width: 100vw;
  flex: 1;
  background: white;
`;

export const LogoImage = styled.img`
  width: 60px;
`;

export const ProfileButton = styled.span`
  font-size: 14px;
`;

export const BottomBar = styled.div`
  width: 100%;
  border-top: 3px solid #ffaace;
`;

export const DownBtn = styled.img`
  width: 10px;
  margin-left: 12px;
`;

export const ModalContainer = styled(KeepSafeLineContainer)<ModalActivation>`
  position: absolute;
  top: 6.6vh;
  width: 1000px;
  justify-content: flex-end;
  ${props => !props.isActivation && "visibility: hidden"}
`;

export const Modal = styled.ul`
  display: inline-flex;
  width: 7%;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: solid 1px #cecece;

  > li {
    font-size: 12px;
    margin: 10px 0;
    cursor: pointer;

    > link {
      color: black;
    }
  }
`;
