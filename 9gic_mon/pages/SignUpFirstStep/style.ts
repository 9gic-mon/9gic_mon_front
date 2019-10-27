import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;   
    display: flex;
    flex-direction: column;
    background: white;
`;

export const TextContainer = styled.div`
    margin-left: 7.9%;
    font-family: NanumSquare;
    font-size: 20px;
    margin-top: 4.2%;
    line-height: 1.2;
`;

export const checkBoxContainer = styled.div`
    width: 100%;
    height: 2.85%;
    margin-top: 30%;
    margin-left: 74.7%;
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    /* width: 25px; */
    /* height: 25px; */
    border-radius: 1px;
`;

export const CheckBoxText = styled.div`
    font-family: NanumSquare;
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    margin-left: 0.5%;
`;

export const NextButton = styled.button`
    width: 180px;
    height: 60px;
    color: white;
    background-color: #dedede;
    border: 2px solid #dedede;
    border-radius: 10px;
    font-family: Daum;
    font-size: 25px;
    
    margin-top: 6.6%;
    margin-left: 83.2%;
    padding: 24px, 45px, 24px, 45px;
`;