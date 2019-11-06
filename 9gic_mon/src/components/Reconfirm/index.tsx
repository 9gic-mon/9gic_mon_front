import * as React from 'react';

import * as S from './style';

const Reconfirm : React.FC = () =>
<>
    <S.Container>
        <S.Header>
            <S.ButtonCancel />
            <S.HeaderLine />
        </S.Header>
        <S.Text>
            이전 페이지 내용을<pre />
            읽기 전용으로 보내시겠습니까?
        </S.Text>
        <S.ButtonContainer>
            <S.ButtonModify>수정</S.ButtonModify>
            <S.ButtonSend>전송</S.ButtonSend>
        </S.ButtonContainer>
    </S.Container>
</>

export default Reconfirm;