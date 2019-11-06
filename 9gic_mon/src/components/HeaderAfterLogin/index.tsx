import * as React from 'react';

import * as S from './style';

const HeaderAfterLogin : React.FC = () => 
    <S.Container>
        <S.TopContainer>
            <S.LogoImage />
            <S.ProfileButton>구직몬 님</S.ProfileButton>
        </S.TopContainer>
        <S.BottomContainer>
            <S.BottomBar />
        </S.BottomContainer>
    </S.Container>
    

export default HeaderAfterLogin;