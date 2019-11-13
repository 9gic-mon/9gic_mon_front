import * as React from "react";

import * as S from "./style";
import NextBtn from "../../../components/SignUp/SignUpNextButton";
import MailImg from "../../../assets/signup/email.png";

interface Props {
  setStep: (step: number) => void;
}

const SignUpFourthStep: React.FC<Props> = ({ setStep }) => (
  <>
    <S.Container>
      <S.ReplaceImage src={MailImg} alt="메일" />
      <S.Text>
        등록된 귀하의 이메일주소로 인증 메일을 전송하였습니다. <br />
        해당 메일을 확인하여 주세요.
      </S.Text>
    </S.Container>
    <NextBtn step={4} setStep={setStep} isActivation={true} />
  </>
);

export default SignUpFourthStep;
