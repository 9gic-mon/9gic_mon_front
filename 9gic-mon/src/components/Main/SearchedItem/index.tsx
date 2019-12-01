import * as React from "react";

import * as S from "./style";
import { SearchedListItem } from "../../../lib/api/response";

interface Props {
  info: SearchedListItem;
}

const SearchedItem: React.FC<Props> = ({ info }) => (
  <>
    <S.GrayHorizontalLine />
    <S.ItemContainer>
      <S.CorporationIcon src={info.coUserPostImageUrl} alt="logo" />
      <S.SearchResultTextContainer>
        <S.CorporationTitleContainer>
          <S.CorporationName>{info.coUserPostCopname}</S.CorporationName>
          <S.GrayVerticalLine />
          <S.CorporationProperty>{info.region}</S.CorporationProperty>
        </S.CorporationTitleContainer>
        <S.CorporationInfoContainer>
          <S.CorporationComents>{info.simpleIntro}</S.CorporationComents>
        </S.CorporationInfoContainer>
        <S.CorporationInfoContainer>
          <S.CorporationProperty>
            대덕소프트웨어마이스터고등학교
          </S.CorporationProperty>
          <S.GrayVerticalLine />
          <S.CorporationProperty>{info.grade}학년</S.CorporationProperty>
          <S.GrayVerticalLine />
          <S.CorporationProperty>{info.subject}</S.CorporationProperty>
        </S.CorporationInfoContainer>
        <S.NoticeContainer>
          <S.PinkVerticalLine />
          <S.Notice href="http://localhost:3000/notice" target="_blank">
            {info.title}
          </S.Notice>
        </S.NoticeContainer>
      </S.SearchResultTextContainer>
    </S.ItemContainer>
  </>
);

export default SearchedItem;
