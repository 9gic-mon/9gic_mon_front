import * as React from "react";

import * as S from "./style";
import Header from "../../components/Header/JobAdHeader";
import image from "../../assets/signin/Background.png";
import { getSearchedResult } from "../../lib/api/";
import { SearchedListItem } from "../../lib/api/response";

const autoResizeTextarea = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  var el = e.currentTarget;
  setTimeout(function() {
    el.style.cssText = "height:auto; padding:0";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
};

const JobAd: React.FC = () => {
  const didMountRef = React.useRef(false);
  const [jobAdInfo, setJobAdInfo] = React.useState<SearchedListItem[]>([
    {
      backgroundImageUrl: "",
      coUserPostCopname: "",
      coUserPostImageUrl: "",
      context: "",
      deadLine: "",
      etc: "",
      grade: 1,
      mainWork: "",
      mainWorkStack: "",
      region: "",
      simpleIntro: "",
      subject: "",
      title: "",
      welfare: ""
    }
  ]);

  React.useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getJobAdInfo(setJobAdInfo);
    }
  }, []);

  return (
    <>
      <Header />
      <S.ContentWrapper>
        <S.ContentContainer>
          <h1>
            [연 거래액 1000억, 쇼핑앱 에이블리] 웹 프론트엔드 개발자
            (병역특례가능)
          </h1>
          <S.ClosingDate>2019.12.31 마감</S.ClosingDate>
          <S.HrLine />
          <S.CompanyIntro>
            <div>
              <img src={image} alt="기업로고" />

              <div>
                <h2>에이블리코퍼레이션</h2>
                <p>간단한 소개글(1~2줄)</p>
              </div>
            </div>

            <h3>우리 이런 회사예요!</h3>
            <S.TextInput onKeyDown={e => autoResizeTextarea(e)} />
          </S.CompanyIntro>

          <S.HrLine />

          <S.EmpolymentInfo>
            <h3>이런 분들을 찾아요!</h3>
            <div>
              <h4>주요업무</h4>
              <S.TextInput onKeyDown={e => autoResizeTextarea(e)} />
              <h4>주요 업무 관련 기술 및 스택</h4>
              <S.TextInput onKeyDown={e => autoResizeTextarea(e)} />
              <h4>채용 상세</h4>
              <S.TextInput onKeyDown={e => autoResizeTextarea(e)} />
              <h4>복지</h4>
              <S.TextInput onKeyDown={e => autoResizeTextarea(e)} />
              <h4>기타</h4>
              <S.TextInput onKeyDown={e => autoResizeTextarea(e)} />
            </div>
          </S.EmpolymentInfo>
        </S.ContentContainer>
      </S.ContentWrapper>
    </>
  );
};

const getJobAdInfo = async (
  setJobAdInfo: (info: SearchedListItem[]) => void
) => {
  try {
    const response: SearchedListItem[] = await getSearchedResult();

    setJobAdInfo(response);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export default JobAd;
