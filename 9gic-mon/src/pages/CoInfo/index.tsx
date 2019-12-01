import * as React from "react";

import * as S from "./style";
import Header from "../../components/Header/HeaderAfterLogin";
import { KeepSafeLineContainer } from "../../style/default";
import MiniProfile from "../../components/CoInfo/MiniProfile";
import TechStack from "../../components/CoInfo/TechStack";
import JobAdList from "../../components/CoInfo/JobAd";
import Intro from "../../components/CoInfo/Intro";
import BasicInfo from "../../components/CoInfo/BasicInfo";
import Plus from "../../assets/profile/plus.png";

const CorporationProfile: React.FC = () => {
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [isOwnProfile, setIsOwnProfile] = React.useState<boolean>(true);

  const [techStack, setTechStack] = React.useState([
    "github",
    "slack",
    "node.js",
    "react.js",
    "github",
    "slack",
    "node.js",
    "react.js",
    "github",
    "slack",
    "node.js",
    "react.js",
    "github",
    "slack",
    "node.js",
    "react.js",
    "github",
    "slack",
    "node.js",
    "react.js",
    "github",
    "slack",
    "node.js",
    "react.js",
    "github",
    "slack",
    "node.js",
    "react.js"
  ]);
  const [newTech, setNewTech] = React.useState("");

  return (
    <>
      <S.Container>
        <Header />
        <>
          <S.BackgroundImage>
            <S.CorporationIcon alt="icon" />
          </S.BackgroundImage>

          <KeepSafeLineContainer>
            <S.ProfileContent>
              <MiniProfile
                setIsEditMode={setIsEditMode}
                isEditMode={isEditMode}
                isOwnProfile={isOwnProfile}
              />
              <S.HorizontalBar />

              <S.ContentContainer>
                <S.TitleContainer>
                  <S.ContentTitle>기술 스택</S.ContentTitle>
                  <div>
                    <S.TechInput
                      onChange={e => handleChangeInput(e, setNewTech)}
                      value={newTech}
                    />
                    <S.PlusImg
                      src={Plus}
                      alt="add"
                      onClick={() =>
                        addNewTech(newTech, setTechStack, techStack, setNewTech)
                      }
                    />
                  </div>
                </S.TitleContainer>
                <TechStack techStack={techStack} setTechStack={setTechStack} />
              </S.ContentContainer>
              <S.HorizontalBar />

              <S.ContentContainer>
                <S.TitleContainer>
                  <S.ContentTitle>채용 공고</S.ContentTitle>
                  <div>
                    <S.AddAdText>채용 공고 추가</S.AddAdText>
                    <S.PlusImg
                      src={Plus}
                      alt="add"
                      onClick={() =>
                        addNewTech(newTech, setTechStack, techStack, setNewTech)
                      }
                    />
                  </div>
                </S.TitleContainer>
                <JobAdList />
              </S.ContentContainer>
              <S.HorizontalBar />

              <S.ContentContainer>
                <S.ContentTitle>기업 소개</S.ContentTitle>
                <Intro />
              </S.ContentContainer>
              <S.HorizontalBar />

              <S.ContentContainer>
                <S.ContentTitle>기업 정보</S.ContentTitle>
                <BasicInfo />
              </S.ContentContainer>
            </S.ProfileContent>
          </KeepSafeLineContainer>
        </>
      </S.Container>
    </>
  );
};

const handleChangeInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  setTech: (newTech: string) => void
) => {
  setTech(e.target.value);
};

const addNewTech = (
  newTech: string,
  setTechStack: (newTechArr: string[]) => void,
  currentTechStack: string[],
  setNewTech: (newTech: string) => void
) => {
  const newTechStack = [...currentTechStack];
  newTechStack.push(newTech);

  setTechStack(newTechStack);
  setNewTech("");
};

export default CorporationProfile;
