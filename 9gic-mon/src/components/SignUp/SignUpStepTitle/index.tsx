import * as React from "react";

import * as S from "./style";

interface Props {
  step: number;
}

const getSubtitle = (step: number): string => {
  switch (step) {
    case 1:
      return "- 이용약관 동의";
    case 2:
      return "- 유형선택";
    case 3:
      return "- 정보 기입";
    case 4:
      return "- 이메일 인증";
    case 5:
      return "- 완료";
    default:
      return "";
  }
};

const SignUpStepTitle: React.FC<Props> = ({ step }) => (
  <S.Container>
    <S.TitleContainer>
      <S.MainTitle>회원 가입 {step}단계</S.MainTitle>
      <S.SubTitle>{getSubtitle(step)}</S.SubTitle>
    </S.TitleContainer>
    <S.BottomBar />
  </S.Container>
);

export default SignUpStepTitle;
