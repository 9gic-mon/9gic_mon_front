import styled from "styled-components";
import * as D from "../../../style/default";

interface Alert {
  isSame: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4%;
  margin-left: 5%;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-top: 4%;
`;

export const InputBoxContainer = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
`;

export const LeftContainer = styled.div`
  width: 200px;
  margin-right: 35%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const LeftBar = styled.div`
  height: 30px;
  border-left: solid 2px #ffaace;
`;

export const InputBoxTitle = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #707070;
  margin-left: 11.5px;
`;

export const TextInputBox = styled(D.Input)`
  width: 420px;
  height: 48px;
  padding: 0 2%;
`;

export const AlertText = styled.span<Alert>`
  font-size: 15px;
  color: #8e2828;
  margin-left: calc(35% + 200px);
  margin-top: 1%;
  ${props => props.isSame && "visibility: hidden;"}
`;

export const TellInputContainer = styled.div`
  width: 453px;
  display: flex;
  justify-content: space-between;
`;

export const TellInputBox = styled(TextInputBox)`
  width: 80px;
  text-align: center;
`;
