import * as React from "react";

import * as S from "./style";

interface Props {
  techStack: string[];
  setTechStack: (newArr: string[]) => void;
}

const TechStack: React.FC<Props> = ({ techStack, setTechStack }) => {
  return (
    <S.TechContainer>
      {techStack.map((i, index) => (
        <S.TechItem onClick={() => handleClick(index, techStack, setTechStack)}>
          <div onMouseOver={e => e.stopPropagation()}>
            <span>#{i}</span>
          </div>
        </S.TechItem>
      ))}
    </S.TechContainer>
  );
};

const handleClick = (
  index: number,
  currentArr: string[],
  setArray: (arr: string[]) => void
) => {
  const newArr = [...currentArr];
  newArr.splice(index, 1);
  console.log(newArr);
  setArray(newArr);
};

export default TechStack;
