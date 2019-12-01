import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 860px;
  border-radius: 10px;
  border: solid 1px #ffaace;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const SearchOptionContainer = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
  margin: 1% 0;
`;

export const SelectBoxSchool = styled.select`
  width: 32%;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #707070;
  font-size: 15px;
  align-items: center;
  background-color: white;
`;

export const SelectBoxGrade = styled(SelectBoxSchool)`
  width: 16%;
`;

export const SelectBoxMajor = styled(SelectBoxSchool)`
  width: 24%;
`;

export const SelectBoxRegion = styled(SelectBoxSchool)`
  width: 16%;
`;

export const SearchInput = styled.input`
  width: 75.5%;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  border: solid 1px #ffaace;
  background-color: #ffffff;
  padding: 0 2%;
`;

export const ButtonSearch = styled.button`
  width: 16%;
  height: 40px;
  border-radius: 5px;
  background-color: #ffaace;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: NanumSquare;
  font-size: 20px;
  color: #ffffff;
`;
