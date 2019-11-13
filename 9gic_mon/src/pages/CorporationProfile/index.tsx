import * as React from 'react';

import * as S from './style';
import * as H from '../../components/HeaderAfterLogin/index';

const CorporationProfile : React.FC = () =>
<>
    <S.Container>
        <H.default />
        <S.BackgroundImage />
        <S.CorporationIcon />
        <S.EditButton>수정하기</S.EditButton>
        <S.CorporationName>에이블리코퍼레이션</S.CorporationName>
        <S.OneLineCorporationExplanation>NO.1 패션/뷰티 쇼핑앱 에이블리 입니다.</S.OneLineCorporationExplanation>
        <S.HorizontalBar />
        <S.ContentContainer>
            <S.ContentTitle>기술 스택</S.ContentTitle>
            {/* <S.TechStack>SLACK</S.TechStack> */}
        </S.ContentContainer>
        <S.HorizontalBar />
        <S.ContentContainer>
            <S.ContentTitle>채용 공고</S.ContentTitle>
            <S.EmploymentNotice>TEST</S.EmploymentNotice>
        </S.ContentContainer>
        <S.HorizontalBar />
        <S.ContentContainer>
            <S.ContentTitle>기업 소개</S.ContentTitle>
            <S.CorporationExplanation>웰컴 투 어서와 대마고에 이런 ㅆ</S.CorporationExplanation>
        </S.ContentContainer>
        <S.HorizontalBar />
        <S.ContentContainer>
            <S.ContentTitle>기업 정보</S.ContentTitle>
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
            </S.CorporationInfoContainer><S.CorporationInfoContainer>
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
        </S.ContentContainer>
    </S.Container>
</>
export default CorporationProfile;