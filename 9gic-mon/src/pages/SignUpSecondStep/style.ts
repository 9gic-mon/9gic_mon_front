import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;   
    display: flex;
    flex-direction: column;
    background: white;
`;

export const BottomContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start; 
    margin-top: 10%;
    margin-left: 11%;
`;

export const ImageContainer = styled.div`
    /* width: 20.9%;
    height: 50.9%; */
    width: 401px;
    height: 550px;
    border-radius: 10px;
    border: solid 2px #ffaace;
    margin-right: 7.8%;
`;

export const LastImageContainer = styled.div`
    width: 401px;
    height: 550px;
    border-radius: 10px;
    border: solid 2px #ffaace;
    display: flex;
    justify-content: center;
`;
export const ImageTitle = styled.div`
    font-family: Daum;
    font-size: 45px;
    color: black;
    margin-top: 8.7%;
    display: flex;
    justify-content: center;
`;