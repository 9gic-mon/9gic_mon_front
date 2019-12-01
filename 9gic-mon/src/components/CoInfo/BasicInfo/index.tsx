import * as React from "react";

import * as S from "./style";

const BasicInfo: React.FC = () => (
  <>
    <S.CorporationInfoContainer>
      <S.LeftContainer>
        <S.LeftBar />
        <S.InfoTitle>설립일</S.InfoTitle>
      </S.LeftContainer>
      <S.InfoDetail>2015-09-07 / 4년차</S.InfoDetail>
    </S.CorporationInfoContainer>
    <S.CorporationInfoContainer>
      <S.LeftContainer>
        <S.LeftBar />
        <S.InfoTitle>구성원</S.InfoTitle>
      </S.LeftContainer>
      <S.InfoDetail>51-200명</S.InfoDetail>
    </S.CorporationInfoContainer>
    <S.CorporationInfoContainer>
      <S.LeftContainer>
        <S.LeftBar />
        <S.InfoTitle>투자 유치</S.InfoTitle>
      </S.LeftContainer>
      <S.InfoDetail>누적 70억 원 이상4년차</S.InfoDetail>
    </S.CorporationInfoContainer>
    <S.CorporationInfoContainer>
      <S.LeftContainer>
        <S.LeftBar />
        <S.InfoTitle>홈페이지</S.InfoTitle>
      </S.LeftContainer>
      <S.InfoDetail>http://a-bly.com/shop/main/index.php</S.InfoDetail>
    </S.CorporationInfoContainer>
    <S.CorporationInfoContainer>
      <S.LeftContainer>
        <S.LeftBar />
        <S.InfoTitle>이메일</S.InfoTitle>
      </S.LeftContainer>
      <S.InfoDetail>hr@a-bly.com</S.InfoDetail>
    </S.CorporationInfoContainer>
    <S.CorporationInfoContainer>
      <S.LeftContainer>
        <S.LeftBar />
        <S.InfoTitle>전화번호</S.InfoTitle>
      </S.LeftContainer>
      <S.InfoDetail>070-4779-8264</S.InfoDetail>
    </S.CorporationInfoContainer>
    <S.CorporationInfoContainer>
      <S.LeftContainer>
        <S.LeftBar />
        <S.InfoTitle>병역 대체</S.InfoTitle>
      </S.LeftContainer>
      <S.InfoDetail>가능</S.InfoDetail>
    </S.CorporationInfoContainer>
    <S.CorporationInfoContainer>
      <S.LeftContainer>
        <S.LeftBar />
        <S.InfoTitle>사무실</S.InfoTitle>
      </S.LeftContainer>
      <S.InfoDetail>서울특별시 강남구 역삼동</S.InfoDetail>
    </S.CorporationInfoContainer>
  </>
);

export default BasicInfo;
