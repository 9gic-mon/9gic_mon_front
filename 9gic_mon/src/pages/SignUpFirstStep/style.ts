import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;   
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const TextContainer = styled.pre`
    width: 100%;
    font-family: NanumSquare;
    font-size: 20px;
    margin-top: 45.5px;
    margin-left: 152px;
`;

export const CheckBoxContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 338px;
    margin-left: 1435px;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    border-radius: 1px;
`;

export const CheckBoxText = styled.div`
    font-family: NanumSquare;
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    margin-left: 10px;
`;