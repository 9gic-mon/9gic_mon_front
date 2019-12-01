import styled from "styled-components";

import { KeepSafeLineContent } from "../../style/default";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileContent = styled(KeepSafeLineContent)`
  flex-direction: column;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ffaace;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const CorporationIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: greenyellow;
  position: absolute;
  z-index: 1;
  bottom: -50px;
`;

export const HorizontalBar = styled.div`
  width: 100%;
  border-top: 1px solid #ffaace;
  margin-top: 55px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: 55px;
`;

export const ContentTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const TechInput = styled.input`
  border: 1px solid #707070;
  border-radius: 5px;
  width: 120px;
  height: 24px;
  padding: 0 6px;
  font-size: 12px;
`;

export const AddAdText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #707070;
`;

export const PlusImg = styled.img`
  width: 16px;
  margin-left: 10px;
`;
