import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;   
    display: flex;
    flex-direction: column;
    background: white;
    position: relative;
`;

export const TextContainer = styled.pre`
    width: 100vw;
    height: 24.7vh;
    margin-left: 7.9vw;
    font-family: NanumSquare;
    font-size: 20px;
    margin-top: 4.2vh;
`;

export const CheckBoxContainer = styled.div`
    width: 100vw;
    height: 2.3vh;
    margin-top: 30vh;
    margin-left: 74.7vw;
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
    margin-left: 0.5vw;
`;

export const NextButton = styled.button`
    width: 9.4vw;
    height: 50.6vh;
    color: white;
    background-color: #dedede;
    border: 2px solid #dedede;
    border-radius: 10px;
    font-family: Daum;
    font-size: 25px;
    text-align: center;
    
    margin-top: 6.6vh;
    margin-left: 85vw;
    margin-right: 4.7vw;
    margin-bottom: 7.4vh;
`;