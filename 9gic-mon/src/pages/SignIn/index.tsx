import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import * as S from "./style";

interface OwnProps {
  setToken: (payload: { accessToken: string; sessionToken: string }) => void;
}

type Props = RouteComponentProps & OwnProps;

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setMethod: (value: string) => void
): void => {
  setMethod(e.target.value);
};

const handleClick = (): void => {
  console.log("click");
  // 로그인 통신
};

const SignIn: React.FC<Props> = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isActivation, setIsActivation] = React.useState<Boolean>(false);

  React.useEffect(() => {
    email && password ? setIsActivation(true) : setIsActivation(false);
  }, [email, password]);

  return (
    <S.Wrapper>
      <S.leftText>WELCOME</S.leftText>
      <S.LoginModal>
        <S.Title>로그인</S.Title>
        <S.Underline />
        <S.LoginInput
          value={email}
          placeholder="EMAIL"
          onChange={e => handleChange(e, setEmail)}
        />
        <S.LoginInput
          value={password}
          placeholder="PW"
          onChange={e => handleChange(e, setPassword)}
        />
        {isActivation ? (
          <S.LoginBtn onClick={handleClick}>SIGN IN</S.LoginBtn>
        ) : (
          <S.ActivationLoginBtn>SIGN IN</S.ActivationLoginBtn>
        )}

        <div>
          <S.helpContent>아직 계정이 없으신가요?</S.helpContent>
          <S.SignUpText>SIGN UP</S.SignUpText>
        </div>
      </S.LoginModal>
      <S.rightText>GOOGICMON</S.rightText>
      <S.underText>SOFTWARE MEISTER HIGH SCHOOL JOB SEARCH SERVICE</S.underText>
    </S.Wrapper>
  );
};

export default withRouter(SignIn);
