import * as React from 'react';

import * as S from './style';

const HeaderBeforeLogin : React.FC = () => 
    <S.Container>
        <S.TopContainer>
            <S.ListContainer>
                <S.ListItem>로그인</S.ListItem>
                <S.ListItmeBar />
                <S.ListItem>회원가입</S.ListItem>
                <S.ListItmeBar />
                <S.ListItem>지원</S.ListItem>
           </S.ListContainer>
        </S.TopContainer>
        <S.BottomContainer>
            <S.BottomBar />
        </S.BottomContainer>
    </S.Container>
    

export default HeaderBeforeLogin;