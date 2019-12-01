import * as React from "react";

import * as S from "./style";
import Header from "../../components/Header/HeaderAfterLogin";
import SearchBar from "../../components/Main/SearchBar";
import SearchedItem from "../../components/Main/SearchedItem";
import { getSearchedResult, getFilteredList } from "../../lib/api/";
import { SearchedListItem } from "../../lib/api/response";
import { SearchCreteria } from "../../lib/api/payload";

const MainPage: React.FC = () => {
  const didMountRef = React.useRef(false);
  const [searchedList, setSearchedList] = React.useState<SearchedListItem[]>([
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
  const [creteria, setCreteria] = React.useState<SearchCreteria>({
    grade: 0,
    filtering: "",
    region: "0",
    subject: "0"
  });

  React.useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getAdSearchedList(setSearchedList);
    }
  }, []);

  return (
    <>
      <S.Container>
        <Header />
        <S.Title>채용 정보 검색</S.Title>
        <S.TitleLine />
        <SearchBar
          get={() => getFilteredAdList(setSearchedList, creteria)}
          creteria={creteria}
          setCreteria={setCreteria}
        />
        <S.ResultList>
          <S.SearchResultTopContainer>
            <S.SearchResultTitle>검색 결과</S.SearchResultTitle>
            <S.SearchResultAmount>123</S.SearchResultAmount>
          </S.SearchResultTopContainer>
          {searchedList.map(i => (
            <SearchedItem info={i} />
          ))}
        </S.ResultList>
      </S.Container>
    </>
  );
};

const getAdSearchedList = async (
  setSearchedList: (newList: SearchedListItem[]) => void
) => {
  try {
    const response: SearchedListItem[] = await getSearchedResult();

    setSearchedList(response);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

const getFilteredAdList = async (
  setSearchedList: (newList: SearchedListItem[]) => void,
  creteria: SearchCreteria
) => {
  try {
    const response: SearchedListItem[] = await getFilteredList(creteria);

    setSearchedList(response);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export default MainPage;
