import * as React from 'react';

import * as S from './style';
import * as H from '../../components/HeaderBeforeLogin/index';
import * as T from '../../components/SignUpStepTitle/index';
import * as N from '../../components/SignUpNextButton/index'

const SignUpFourthStep : React.FC = () => 
<S.Container>
    <H.default />
    <T.default />
    <S.ReplaceImage />
    <S.Text>등록된 귀하의 이메일주소로 인증 메일을 전송하였습니다.<pre />해당 메일을 확인하여 주세요.</S.Text>
    <N.default />
</S.Container>

export default SignUpFourthStep;