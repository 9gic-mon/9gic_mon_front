import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import * as S from "./style";
import checkedImg from "../../../assets/signup/success.png";

const SignUpFourthStep: React.FC<RouteComponentProps> = ({ history }) => (
  <S.Container>
    <S.ReplaceImage src={checkedImg} alt="성공" />
    <S.Text>회원가입의 모든 과정이 완료되었습니다.</S.Text>
    <S.ButtonGoToMainPage
      isActivation={true}
      onClick={() => history.push("/login")}
    >
      로그인페이지로 돌아가기
    </S.ButtonGoToMainPage>
  </S.Container>
);

export default withRouter(SignUpFourthStep);
