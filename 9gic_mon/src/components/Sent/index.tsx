import * as React from 'react';

import * as S from './style';

const Reconfirm : React.FC = () =>
<>
    <S.Container>
        <S.Header>
            <S.ButtonCancel />
            <S.HeaderLine />
        </S.Header>
        <S.Text>전송이 완료되었습니다.</S.Text>
        <S.ButtonSent>확인</S.ButtonSent>
    </S.Container>
</>

export default Reconfirm;