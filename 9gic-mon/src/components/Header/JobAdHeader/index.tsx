import * as React from "react";

import * as S from "./style";
import Logo from "../../../assets/header/Logo_white_ver.png";

const JobAdHeader: React.FC = () => (
  <S.HeaderWrapper>
    <S.Logo src={Logo} alt="구직몬" />
    <S.AdTitle>에이블리코퍼레이션 채용공고</S.AdTitle>
  </S.HeaderWrapper>
);

export default JobAdHeader;
