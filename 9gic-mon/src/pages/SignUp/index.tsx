import * as React from "react";

import FirstStep from "./SignUpFirstStep";
import SecondStep from "./SignUpSecondStep";
import ThirdStep from "./SignUpThirdthStep_Corporation";
import FourthStep from "./SignUpFourthStep";
import FifthStep from "./SignUpFifthStep";
import Header from "../../components/Header/HeaderBeforeLogin";
import Title from "../../components/SignUp/SignUpStepTitle";
import * as S from "./style";

const setContent = (step: number, setStep: (step: number) => void) => {
  switch (step) {
    case 1:
      return <FirstStep setStep={setStep} />;
    case 2:
      return <SecondStep setStep={setStep} />;
    case 3:
      return <ThirdStep setStep={setStep} />;
    case 4:
      return <FourthStep setStep={setStep} />;
    case 5:
      return <FifthStep />;
    default:
      return null;
  }
};

const SignUp: React.FC = () => {
  const [currentStep, setCurrentStep] = React.useState<number>(1);

  return (
    <>
      <Header />
      <S.ContentWrapper>
        <S.ContentContainer>
          <Title step={currentStep} />
          {setContent(currentStep, setCurrentStep)}
        </S.ContentContainer>
      </S.ContentWrapper>
    </>
  );
};

export default SignUp;
