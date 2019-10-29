import * as React from 'react';

import * as S from "./style";

const HeaderBeforeLogin : React.FC = () => 
    <S.Container>
        <S.TopContaimer>
            <S.ListContainer>
                <S.ListItem>로그인</S.ListItem>
                <S.ListItmeBar />
                <S.ListItem>회원가입</S.ListItem>
                <S.ListItmeBar />
                <S.ListItem>지원</S.ListItem>
           </S.ListContainer>
        </S.TopContaimer>
            <S.BottomContaimer>
                <S.bottomBar />
            </S.BottomContaimer>
    </S.Container>
    

export default HeaderBeforeLogin;