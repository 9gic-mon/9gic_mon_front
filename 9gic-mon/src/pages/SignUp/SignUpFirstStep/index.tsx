import * as React from "react";

import * as S from "./style";
import NextBtn from "../../../components/SignUp/SignUpNextButton";

interface Props {
  setStep: (step: number) => void;
}

const SignUpFirstStep: React.FC<Props> = ({ setStep }) => {
  const [isApproved, setIsApproved] = React.useState<boolean>(false);

  return (
    <>
      <S.TextContainer>
        {`1. 개인정보의 수집 및 이용 목적
신규 서비스 개발 및 마케팅ㆍ광고에의 활용
- 신규 서비스 개발, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속 빈도 등 회원의 서비스 이용에 대한 통계
      
2. 수집하는 개인정보의 항목
이메일, 연락처, 기업명, 담당자명 등

3. 개인정보의 보유 및 이용기간
이용목적의 달성 후 지체없이 파기
      
4. 동의거부권 및 불이익
개인정보의 마케팅/홍보의 수집 및 이용 동의를 거부하시더라도 회원 가입 시 제한은 없습니다. 
다만, 마케팅 활용 서비스 안내 및 참여에 제한이 있을 수 있습니다.`}
      </S.TextContainer>
      <S.CheckBoxContainer>
        <input
          type="checkbox"
          id="approve-checkbox"
          checked={isApproved}
          onClick={() => setIsApproved(!isApproved)}
        />
        <S.CheckBoxText>모든 약관을 읽었으며, 이에 동의합니다.</S.CheckBoxText>
      </S.CheckBoxContainer>
      <NextBtn step={1} setStep={setStep} isActivation={isApproved} />
    </>
  );
};

export default SignUpFirstStep;
