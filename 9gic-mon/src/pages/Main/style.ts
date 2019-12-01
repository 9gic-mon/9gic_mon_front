import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GrayHorizontalLine = styled.div`
  width: 100%;
  border-top: solid 1px #707070;
  margin-top: 20px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 103px;
`;

export const TitleLine = styled.div`
  width: 300px;
  border-top: 3px solid #ffaace;
  margin-top: 10px;
`;

export const ResultList = styled.div`
  width: 896px;
  min-height: 120px;
  border-radius: 10px;
  border: solid 1px #707070;
  background-color: #ffffff;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const SearchResultTitle = styled.div`
  font-family: NanumSquare;
  font-size: 18px;
  color: #707070;
  margin-top: 18px;
  margin-left: 30px;
`;

export const SearchResultAmount = styled.div`
  font-family: NanumSquare;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 10px;
`;

export const SearchResultTopContainer = styled.div`
  display: flex;
  align-items: center;
`;
