import styled from "styled-components";

import {
  KeepSafeLineContainer,
  KeepSafeLineContent,
  horizontalLine
} from "../../style/default";

export const ContentWrapper = styled(KeepSafeLineContainer)`
  width: 100%;
  height: calc(100vh - 68px);
  position: relative;
  background-color: #929292;
  overflow-y: auto;
  align-items: center;
  padding: 400px 0;
`;

export const ContentContainer = styled(KeepSafeLineContent)`
  position: relative;
  background-color: #fff;
  overflow-y: auto;
  /* padding: 120px 96px; */
  box-shadow: 20px 20px 15px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 600px;
  > h1 {
    font-size: 28px;
    font-weight: bold;
    color: #000;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const ClosingDate = styled.span`
  font-size: 18px;
  color: #939393;
  margin-bottom: 20px;
`;

export const HrLine = styled(horizontalLine)`
  border-top: 3px solid #ffaace;
  margin: 40px 0;
`;

export const TextInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  border-radius: 20px;
  border: solid 1px #707070;
  background-color: #ffffff;
  resize: none;
  padding: 20px;
  font-size: 18px;
  margin: 20px 0;
`;

export const CompanyIntro = styled.div`
  width: 100%;

  > div {
    display: flex;
    margin: 20px 0;

    > img {
      width: 100px;
      height: 100px;
      display: inline-block;
      margin-right: 4%;
    }

    > div {
      > h2 {
        font-size: 28px;
        font-weight: bold;
        color: #000000;
        /* font-family: "Verdana"; */
      }

      > p {
        font-size: 20px;
        text-align: left;
        color: #939393;
      }
    }
  }

  > h3 {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    color: #000000;
  }
`;

export const EmpolymentInfo = styled(KeepSafeLineContent)`
  width: 96%;

  > h3 {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    color: #000000;
  }

  > div {
    display: inline-block;
    width: 96%;

    > h4 {
      font-size: 20px;
      font-weight: normal;
      margin-top: 24px;
      margin-left: 16px;
    }
  }
`;
