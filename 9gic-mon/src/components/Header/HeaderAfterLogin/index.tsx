import * as React from "react";

import * as S from "./style";
import Logo from "../../../assets/header/Logo_pink_ver.png";
import Down from "../../../assets/header/sort-down.png";
import { Link } from "react-router-dom";

const HeaderAfterLogin: React.FC = () => {
  const [isActivation, setIsActivation] = React.useState<boolean>(false);

  return (
    <>
      <S.Container>
        <S.TopContainer>
          <S.TopContentContainer>
            <S.LogoImage src={Logo} alt="로고" />
            <span onClick={() => setIsActivation(!isActivation)}>
              <S.ProfileButton>구직몬 님</S.ProfileButton>
              <S.DownBtn src={Down} alt="down" />
            </span>
          </S.TopContentContainer>
        </S.TopContainer>
        <S.BottomContainer>
          <S.BottomBar />
        </S.BottomContainer>
      </S.Container>
      <S.ModalContainer isActivation={isActivation}>
        <S.Modal>
          <li>
            <Link to="/profile">프로필</Link>
          </li>
          <li>
            <Link to="/login">로그아웃</Link>
          </li>
        </S.Modal>
      </S.ModalContainer>
    </>
  );
};

export default HeaderAfterLogin;
