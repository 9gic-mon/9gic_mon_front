import * as React from "react";

import * as S from "./style";

const handleChange = (e, setMethod): void => {
  setMethod(e.target.value);
};

const handleClick = (): void => {
  console.log("click");
  // 로그인 통신
};

const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <S.Wrapper>
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
        <S.LoginBtn onClick={handleClick}>SIGN IN</S.LoginBtn>
        <div>
          <S.helpContent>아직 계정이 없으신가요?</S.helpContent>
          <S.SignUpText to="/signUp">SIGN UP</S.SignUpText>
        </div>
      </S.LoginModal>
    </S.Wrapper>
  );
};

export default SignIn;
