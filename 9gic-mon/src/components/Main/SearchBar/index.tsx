import * as React from "react";

import * as S from "./style";
import { SearchCreteria } from "../../../lib/api/payload";

interface Props {
  get: (newList: any) => any;
  creteria: SearchCreteria;
  setCreteria: (creteria: SearchCreteria) => void;
}

const SearchBar: React.FC<Props> = ({ get }) => (
  <S.SearchContainer>
    <S.SearchOptionContainer>
      <S.SelectBoxSchool>
        <option selected>대덕소프트웨어마이스터고등학교</option>
      </S.SelectBoxSchool>
      <S.SelectBoxGrade>
        <option selected>학년무관</option>
        <option>1학년</option>
        <option>2학년</option>
        <option>3학년</option>
      </S.SelectBoxGrade>
      <S.SelectBoxMajor>
        <option selected>학과무관</option>
        <option>SW개발과</option>
        <option>임베디드SW개발과</option>
        <option>정보보안과</option>
      </S.SelectBoxMajor>
      <S.SelectBoxRegion>
        <option selected>지역무관</option>
        <option>서울</option>
        <option>경기</option>
        <option>대전</option>
      </S.SelectBoxRegion>
    </S.SearchOptionContainer>
    <S.SearchOptionContainer>
      <S.SearchInput type="text" placeholder="기업명을 입력하세요" />
      <S.ButtonSearch onClick={get}>검색</S.ButtonSearch>
    </S.SearchOptionContainer>
  </S.SearchContainer>
);

export default SearchBar;
