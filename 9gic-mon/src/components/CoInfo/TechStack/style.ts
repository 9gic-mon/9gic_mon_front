import styled from "styled-components";

export const TechContainer = styled.div`
  width: 100%;
  padding: 0 5%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const TechItem = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #707070;
  padding: 10px;
  border-radius: 5px;
  border: solid 1px #ffaace;
  display: inline-flex;
  margin-right: 36px;
  margin-top: 12px;
  position: relative;
  align-items: center;
  background-color: white;
  transition: 0.2s;

  &:hover {
    background-color: #ffaace;
    color: white;
    cursor: pointer;
  }
`;
