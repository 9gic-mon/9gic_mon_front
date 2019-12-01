import * as React from "react";

import * as S from "../../../components/SignUp/SignUpInput/style";
import NextBtn from "../../../components/SignUp/SignUpNextButton";
import { postCoUserData } from "../../../lib/api";

interface Props {
  setStep: (step: number) => void;
}

const handleChangeInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: (value: any) => void
): void => {
  setValue(e.target.value);
};

const handleBlurPwInput = (
  PW: string,
  rePW: string,
  setIsPwSame: (value: boolean) => void
) => {
  PW === rePW ? setIsPwSame(true) : setIsPwSame(false);
};

const postCompanyData = async (body: {
  email: string;
  pw: string;
  coName: string;
  contact: string;
}) => {
  const response = await postCoUserData({
    coUserEmail: body.email,
    coUserPassword: body.pw,
    coUserCopname: body.coName,
    coUserTell: body.contact
  });

  console.log(response);
};

const SignUpFourthStep_Corporation: React.FC<Props> = ({ setStep }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [rePassword, setRePassword] = React.useState<string>("");

  const [companyName, setCompanyName] = React.useState<string>("");
  const [contactFirst, setContactFirst] = React.useState<string>("");
  const [contactMiddle, setContactMiddle] = React.useState<string>("");
  const [contactLast, setContactLast] = React.useState<string>("");

  const [isPwSame, setIsPwSame] = React.useState<boolean>(true);

  return (
    <>
      <S.SubContainer>
        <S.Title>계정 정보</S.Title>
        <S.InputBoxContainer>
          <S.LeftContainer>
            <S.LeftBar />
            <S.InputBoxTitle>이메일</S.InputBoxTitle>
          </S.LeftContainer>
          <S.TextInputBox
            type="email"
            placeholder="9gic_mon@mail.com"
            value={email}
            onChange={e => handleChangeInput(e, setEmail)}
          />
        </S.InputBoxContainer>
        <S.InputBoxContainer>
          <S.LeftContainer>
            <S.LeftBar />
            <S.InputBoxTitle>비밀번호</S.InputBoxTitle>
          </S.LeftContainer>
          <S.TextInputBox
            type="password"
            placeholder="******"
            value={password}
            onChange={e => handleChangeInput(e, setPassword)}
            onBlur={() => handleBlurPwInput(password, rePassword, setIsPwSame)}
          />
        </S.InputBoxContainer>
        <S.InputBoxContainer>
          <S.LeftContainer>
            <S.LeftBar />
            <S.InputBoxTitle>비밀번호 재확인</S.InputBoxTitle>
          </S.LeftContainer>
          <S.TextInputBox
            type="password"
            placeholder="******"
            value={rePassword}
            onChange={e => handleChangeInput(e, setRePassword)}
            onBlur={() => handleBlurPwInput(password, rePassword, setIsPwSame)}
          />
        </S.InputBoxContainer>
        <S.AlertText isSame={isPwSame}>
          입력한 비밀번호와 일치하지 않습니다.
        </S.AlertText>

        <S.Title>개인 정보</S.Title>
        <S.InputBoxContainer>
          <S.LeftContainer>
            <S.LeftBar />
            <S.InputBoxTitle>기업명</S.InputBoxTitle>
          </S.LeftContainer>
          <S.TextInputBox
            type="text"
            placeholder="구직몬"
            value={companyName}
            onChange={e => handleChangeInput(e, setCompanyName)}
          />
        </S.InputBoxContainer>
        <S.InputBoxContainer>
          <S.LeftContainer>
            <S.LeftBar />
            <S.InputBoxTitle>연락처</S.InputBoxTitle>
          </S.LeftContainer>
          <S.TellInputContainer>
            <S.TellInputBox
              type="tel"
              placeholder="010"
              value={contactFirst}
              onChange={e => handleChangeInput(e, setContactFirst)}
              maxLength={3}
            />
            <S.TellInputBox
              type="tel"
              placeholder="9999"
              value={contactMiddle}
              onChange={e => handleChangeInput(e, setContactMiddle)}
              maxLength={4}
            />
            <S.TellInputBox
              type="tel"
              placeholder="9999"
              value={contactLast}
              onChange={e => handleChangeInput(e, setContactLast)}
              maxLength={4}
            />
          </S.TellInputContainer>
        </S.InputBoxContainer>
      </S.SubContainer>
      <NextBtn
        step={3}
        setStep={setStep}
        isActivation={
          !!email &&
          !!password &&
          !!rePassword &&
          !!companyName &&
          !!contactFirst &&
          !!contactMiddle &&
          !!contactLast &&
          password === rePassword
        }
        clickEvent={() =>
          postCompanyData({
            email: email,
            pw: password,
            coName: companyName,
            contact: `${contactFirst}-${contactMiddle}-${contactLast}`
          })
        }
      />
    </>
  );
};

export default SignUpFourthStep_Corporation;
