import * as React from 'react';

import * as S from './style';

const SingUpInput : React.FC = () =>
<>
    <S.Container>
        <S.LeftContainer>
            <S.LeftBar />
            <S.Title>TEST</S.Title>
        </S.LeftContainer>
        <S.TextInputBox></S.TextInputBox>

        <S.LeftContainer>
            <S.LeftBar />
            <S.Title>TEST1234</S.Title>
        </S.LeftContainer>
        <S.TextInputBox></S.TextInputBox>
    </S.Container>
</>

export default SingUpInput;