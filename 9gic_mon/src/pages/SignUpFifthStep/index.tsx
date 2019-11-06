import * as React from 'react';

import * as S from './style';
import * as H from '../../components/HeaderBeforeLogin/index';
import * as T from '../../components/SignUpStepTitle/index';
import * as N from '../../components/SignUpNextButton/index'

const SignUpFifthStep : React.FC = () => 
<S.Container>
    <H.default />
    <T.default />
    <S.ReplaceImage />
    <S.Text>회원가입의 모든 과정이 완료되었습니다.<pre />귀하의 학교 학생 권한 요청이 승인되면 메일을 다시 발송해 드리겠습니다.<pre />권한을 승인 받은 후에 서비스를 이용할 수 있습니다.</S.Text>
    <S.ButtonGoToMainPage>메인페이지로 돌아가기</S.ButtonGoToMainPage>
    <N.default />
</S.Container>

export default SignUpFifthStep;