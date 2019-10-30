import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;   
    display: flex;
    flex-direction: column;
    background: white;
`;

export const BottomContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start; 
    margin-top: 10vh;
    margin-left: 11vw;
    margin-right: 10vw;
    margin-bottom: 20vh;
`;

export const ImageContainer = styled.div`
    width: 20vw;
    height: 50vh;
    border-radius: 10px;
    border: solid 2px #ffaace;
    margin-right: 7.8vw;
`;

export const LastImageContainer = styled.div`
    width: 20vw;
    height: 50vh;
    border-radius: 10px;
    border: solid 2px #ffaace;
`;

export const ImageTitle = styled.div`
    font-family: Daum;
    font-size: 45px;
    color: black;
    margin-top: 8.7vh;
    display: flex;
    justify-content: center;
`;

export const Image = styled.image`
    width: 13.3vw;
    height: 23.7vh;
    margin-top: 16.5vh;
    margin-bottom: 18.2vh;
`;