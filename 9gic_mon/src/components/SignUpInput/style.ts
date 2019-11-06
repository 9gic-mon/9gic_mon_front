import styled from 'styled-components';
import * as D from '../../style/default';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const SubContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
    font-family: NanumSquare;
    font-size: 30px;
    margin-top: 60px;
    margin-left: 486px;
`;

export const InputBoxContainer = styled.div`
    margin-top: 25px;
    margin-left: 498.5px;
    display: flex;
    align-items: center;
`;

export const LeftContainer = styled.div`
    width: 200px;
    margin-right: 285.5px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const LeftBar = styled.div`
    height: 35px;
    border-left: solid 2px #ffaace;
`;

export const InputBoxTitle = styled.p`
    font-family: NanumSquare;
    font-size: 25px;
    font-weight: bold;
    color: #707070;
    margin-left: 11.5px;
`;

export const TextInputBox = styled(D.Input)`
    width: 450px;
    height: 55px;
`;
