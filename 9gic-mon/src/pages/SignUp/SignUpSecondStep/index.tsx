import * as React from "react";

import * as S from "./style";

import companyImage from "../../../assets/signup/building.png";
import studentImage from "../../../assets/signup/student-4.png";
import teacherImage from "../../../assets/signup/teacher.png";
import companyImageOvered from "../../../assets/signup/building-2.png";

interface Props {
  setStep: (step: number) => void;
}

const SignUpSecondStep: React.FC<Props> = ({ setStep }) => {
  const [isOveredOnCom, setIsOveredOnCom] = React.useState<boolean>(false);

  return (
    <>
      <S.BottomContainer>
        <S.ImageContainer isOver={false}>
          <S.ImageTitle>학생</S.ImageTitle>
          <S.Image src={studentImage} alt="학생" />
        </S.ImageContainer>
        <S.ImageContainer isOver={false}>
          <S.ImageTitle>교사</S.ImageTitle>
          <S.Image src={teacherImage} alt="교사" />
        </S.ImageContainer>
        <S.LastImageContainer
          isOver={isOveredOnCom}
          onMouseOver={() => setIsOveredOnCom(true)}
          onMouseLeave={() => setIsOveredOnCom(false)}
          onClick={() => setStep(3)}
        >
          <S.ImageTitle>기업</S.ImageTitle>
          <S.Image
            src={isOveredOnCom ? companyImageOvered : companyImage}
            alt="기업"
          />
        </S.LastImageContainer>
      </S.BottomContainer>
    </>
  );
};

export default SignUpSecondStep;
