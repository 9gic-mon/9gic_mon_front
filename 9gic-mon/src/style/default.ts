import styled from "styled-components";

export const Input = styled.input`
  width: 400px;
  height: 55px;
  border-radius: 5px;
  border: solid 1px #ffaace;
  font-size: 20px;
  color: #707070;
`;

export const applyBtn = styled.button<{ isActivation: boolean }>`
  border-radius: 5px;
  background-color: ${props => (props.isActivation ? "#fca8cb" : "#dedede")};
  color: #ffffff;
`;

export const KeepSafeLineContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const KeepSafeLineContent = styled.div`
  width: 1000px;
  display: inline-block;
  padding: 4%;
`;

export const horizontalLine = styled.hr`
  width: 100%;
`;
