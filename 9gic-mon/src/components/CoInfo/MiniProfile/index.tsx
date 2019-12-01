import * as React from "react";

import * as S from "./style";

interface Props {
  isOwnProfile: boolean;
  setIsEditMode: (editmode: boolean) => void;
  isEditMode: boolean;
}

const MiniProfile: React.FC<Props> = ({
  setIsEditMode,
  isOwnProfile,
  isEditMode
}) => (
  <>
    {isOwnProfile && (
      <S.EditButton onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "수정완료" : "수정하기"}
      </S.EditButton>
    )}
    <S.CorporationName>에이블리코퍼레이션</S.CorporationName>
    <S.OneLineCorporationExplanation>
      NO.1 패션/뷰티 쇼핑앱 에이블리 입니다.
    </S.OneLineCorporationExplanation>
  </>
);

export default MiniProfile;
