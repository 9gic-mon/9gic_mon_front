import * as React from 'react';

import * as S from '../../components/SignUpInput/style';
import * as H from '../../components/HeaderBeforeLogin/index';
import * as T from '../../components/SignUpStepTitle/index';
import * as N from '../../components/SignUpNextButton/index'

const SignUpFourthStep_Student : React.FC = () =>
<>
    <S.Container>
        <H.default />
        <T.default />
        <S.SubContainer>
            <S.Title>계정 정보</S.Title>
            <S.InputBoxContainer>
                <S.LeftContainer>
                    <S.LeftBar />
                    <S.InputBoxTitle>이메일</S.InputBoxTitle>
                </S.LeftContainer>
                <S.TextInputBox />
            </S.InputBoxContainer>
            <S.InputBoxContainer>
                <S.LeftContainer>
                    <S.LeftBar />
                    <S.InputBoxTitle>비밀번호</S.InputBoxTitle>
                </S.LeftContainer>
                <S.TextInputBox />
            </S.InputBoxContainer>
            <S.InputBoxContainer>
                <S.LeftContainer>
                    <S.LeftBar />
                    <S.InputBoxTitle>비밀번호 재확인</S.InputBoxTitle>
                </S.LeftContainer>
                <S.TextInputBox />
            </S.InputBoxContainer>

            <S.Title>개인 정보</S.Title>
            <S.InputBoxContainer>
                <S.LeftContainer>
                    <S.LeftBar />
                    <S.InputBoxTitle>이름</S.InputBoxTitle>
                </S.LeftContainer>
                <S.TextInputBox />
            </S.InputBoxContainer>
            <S.InputBoxContainer>
                <S.LeftContainer>
                    <S.LeftBar />
                    <S.InputBoxTitle>성별</S.InputBoxTitle>
                </S.LeftContainer>
                <S.TextInputBox />
            </S.InputBoxContainer>
            <S.InputBoxContainer>
                <S.LeftContainer>
                    <S.LeftBar />
                    <S.InputBoxTitle>소속 학교</S.InputBoxTitle>
                </S.LeftContainer>
                <S.TextInputBox />
            </S.InputBoxContainer>
            <S.InputBoxContainer>
                <S.LeftContainer>
                    <S.LeftBar />
                    <S.InputBoxTitle>학년</S.InputBoxTitle>
                </S.LeftContainer>
                <S.TextInputBox />
            </S.InputBoxContainer>
            <S.InputBoxContainer>
                <S.LeftContainer>
                    <S.LeftBar />
                    <S.InputBoxTitle>전공학과</S.InputBoxTitle>
                </S.LeftContainer>
                <S.TextInputBox />
            </S.InputBoxContainer>
            <S.InputBoxContainer>
                <S.LeftContainer>
                    <S.LeftBar />
                    <S.InputBoxTitle>전화번호</S.InputBoxTitle>
                </S.LeftContainer>
                <S.TextInputBox />
            </S.InputBoxContainer>
            <S.InputBoxContainer>
                <S.LeftContainer>
                    <S.LeftBar />
                    <S.InputBoxTitle>주소</S.InputBoxTitle>
                </S.LeftContainer>
                <S.TextInputBox />
            </S.InputBoxContainer>
        </S.SubContainer>
        <N.default />
    </S.Container>
</>

export default SignUpFourthStep_Student;