import * as React from "react";

import * as S from "./style";

interface Props {
  isActivation: boolean;
  step: number;
  setStep: (step: number) => void;
  clickEvent?: () => void;
}

const SignUpNextButton: React.FC<Props> = ({
  isActivation,
  step,
  setStep,
  clickEvent
}) => (
  <S.NextBtn
    isActivation={isActivation}
    onClick={
      isActivation
        ? () => {
            setStep(step + 1);
            clickEvent !== undefined && clickEvent();
          }
        : undefined
    }
  >
    다음 >
  </S.NextBtn>
);

export default SignUpNextButton;
