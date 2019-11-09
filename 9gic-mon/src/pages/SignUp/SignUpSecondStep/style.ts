import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;   
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const BottomContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start; 
    margin-top: 109.5px;
    margin-left: 208.5px;
    margin-right: 208.5px;
`;

export const ImageContainer = styled.div`
    width: 401px;
    height: 550px;
    border-radius: 10px;
    border: solid 2px #ffaace;
    margin-right: 150px;
    display: flex;
    flex-direction: column;    
`;

export const LastImageContainer = styled.div`
    width: 401px;
    height: 550px;
    border-radius: 10px;
    border: solid 2px #ffaace;
    display: flex;
    flex-direction: column;
`;

export const ImageTitle = styled.div`
    font-family: Daum;
    font-size: 45px;
    color: black;
    margin-top: 48px;
    display: flex;
    justify-content: center;
`;

export const Image = styled.div`
    width: 256px;
    height: 256px;
    margin-top: 91px;
    margin-left: 72.5px;
    background-color: pink;
    display: flex;
    justify-content: center;
`;