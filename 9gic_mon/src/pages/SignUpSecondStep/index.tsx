import * as React from 'react';

import * as S from './style';
import * as H from '../../components/HeaderBeforeLogin/index';
import * as T from '../../components/SignUpStepTitle/index';

const SignUpSecondStep : React.FC = () => 
<S.Container>
    <H.default />
    <T.default />
    <S.BottomContainer>
        <S.ImageContainer>
            <S.ImageTitle>학생</S.ImageTitle>
        </S.ImageContainer>
        <S.ImageContainer>
            <S.ImageTitle>교사</S.ImageTitle>
        </S.ImageContainer>
        <S.LastImageContainer>
            <S.ImageTitle>기업</S.ImageTitle>
        </S.LastImageContainer>
    </S.BottomContainer>
</S.Container>

export default SignUpSecondStep;