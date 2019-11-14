import * as React from 'react';

import * as S from './style';
import * as H from '../../components/HeaderAfterLogin/index';

const MainPage : React.FC = () =>
<>
    <S.Container>
        <H.default />
        <S.Title>채용 정보 검색</S.Title>
        <S.TitleLine />
        <S.SearchContainer>
            <S.SearchOptionContainer>
                <S.SelectBoxSchool>대덕소프트웨어마이스터고등학교</S.SelectBoxSchool>
                <S.SelectBoxGrade>학년</S.SelectBoxGrade>
                <S.SelectBoxMajor>학과</S.SelectBoxMajor>
                <S.SelectBoxRegion>지역</S.SelectBoxRegion>
            </S.SearchOptionContainer>
            <S.SearchOptionContainer>
                <S.SearchBox>기업명을 입력하세요</S.SearchBox>
                <S.ButtonSearch>검색</S.ButtonSearch>
            </S.SearchOptionContainer>
        </S.SearchContainer>
        <S.ResultList>
            <S.SearchResultTopContainer>
                <S.SearchResultTitle>검색 결과</S.SearchResultTitle>
                <S.SearchResultAmount>123</S.SearchResultAmount>
            </S.SearchResultTopContainer>
            <S.GrayHorizontalLine />
            <S.SearchResultContainer>
                <S.SearchResultIconContainer>
                    <S.CorporationIcon />
                </S.SearchResultIconContainer>
                <S.SearchResultTextContainer>
                    <S.CorporationTitleContainer>
                        <S.CorporationName>에이블리코퍼레이션</S.CorporationName>
                        <S.GrayVerticalLine />
                        <S.CorporationProperty>서울</S.CorporationProperty>
                    </S.CorporationTitleContainer>
                    <S.CorporationInfoContainer>
                        <S.CorporationComents>NO.1 패션/뷰티 쇼핑앱 에이블리 입니다.</S.CorporationComents>
                    </S.CorporationInfoContainer>
                    <S.CorporationInfoContainer>
                        <S.CorporationProperty>대덕소프트웨어마이스터고등학교</S.CorporationProperty>
                        <S.GrayVerticalLine />
                        <S.CorporationProperty>학년무관</S.CorporationProperty>
                        <S.GrayVerticalLine />
                        <S.CorporationProperty>SW개발과</S.CorporationProperty>
                    </S.CorporationInfoContainer>
                    <S.NoticeContainer>
                        <S.PinkVerticalLine />
                        <S.Notice>[연 거래액 1000억, 쇼핑앱 에이블리] 웹 프론트엔드 개발자 (병역특례가능)</S.Notice>
                    </S.NoticeContainer>
                    <S.NoticeContainer>
                        <S.PinkVerticalLine />
                        <S.Notice>[연 거래액 1000억, 쇼핑앱 에이블리] 안드로이드 개발자 (병역특례가능)</S.Notice>
                    </S.NoticeContainer>
                    <S.NoticeContainer>
                        <S.PinkVerticalLine />
                        <S.Notice>[연 거래액 1000억, 쇼핑앱 에이블리] iOS 개발자 (병역특례가능)</S.Notice>
                    </S.NoticeContainer>
                    <S.NoticeContainer>
                        <S.PinkVerticalLine />
                        <S.Notice>[연 거래액 1000억, 쇼핑앱 에이블리] 백엔드 개발자 (병역특례가능)</S.Notice>
                    </S.NoticeContainer>
                </S.SearchResultTextContainer>
            </S.SearchResultContainer>
            <S.GrayHorizontalLine />
            <S.SearchResultContainer>
                <S.SearchResultIconContainer>
                    <S.CorporationIcon />
                </S.SearchResultIconContainer>
                <S.SearchResultTextContainer>
                    <S.CorporationTitleContainer>
                        <S.CorporationName>에이블리코퍼레이션</S.CorporationName>
                        <S.GrayVerticalLine />
                        <S.CorporationProperty>서울</S.CorporationProperty>
                    </S.CorporationTitleContainer>
                    <S.CorporationInfoContainer>
                        <S.CorporationComents>NO.1 패션/뷰티 쇼핑앱 에이블리 입니다.</S.CorporationComents>
                    </S.CorporationInfoContainer>
                    <S.CorporationInfoContainer>
                        <S.CorporationProperty>대덕소프트웨어마이스터고등학교</S.CorporationProperty>
                        <S.GrayVerticalLine />
                        <S.CorporationProperty>학년무관</S.CorporationProperty>
                        <S.GrayVerticalLine />
                        <S.CorporationProperty>SW개발과</S.CorporationProperty>
                    </S.CorporationInfoContainer>
                    <S.NoticeContainer>
                        <S.PinkVerticalLine />
                        <S.Notice>[연 거래액 1000억, 쇼핑앱 에이블리] 웹 프론트엔드 개발자 (병역특례가능)</S.Notice>
                    </S.NoticeContainer>
                    <S.NoticeContainer>
                        <S.PinkVerticalLine />
                        <S.Notice>[연 거래액 1000억, 쇼핑앱 에이블리] 안드로이드 개발자 (병역특례가능)</S.Notice>
                    </S.NoticeContainer>
                    <S.NoticeContainer>
                        <S.PinkVerticalLine />
                        <S.Notice>[연 거래액 1000억, 쇼핑앱 에이블리] iOS 개발자 (병역특례가능)</S.Notice>
                    </S.NoticeContainer>
                    <S.NoticeContainer>
                        <S.PinkVerticalLine />
                        <S.Notice>[연 거래액 1000억, 쇼핑앱 에이블리] 백엔드 개발자 (병역특례가능)</S.Notice>
                    </S.NoticeContainer>
                </S.SearchResultTextContainer>
            </S.SearchResultContainer>
        </S.ResultList>
    </S.Container>
</>

export default MainPage;