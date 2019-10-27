import * as React from 'react';

import * as S from './style';

const SignUpStepTitle : React.FC = () =>

<S.Container>
    <S.TitileContainer>
        <S.MainTitle>회원 가입 1단계</S.MainTitle>
        <S.SubTitle>- 이용 약관 동의</S.SubTitle>
    </S.TitileContainer>
    <S.bottomBar />
</S.Container>

export default SignUpStepTitle;