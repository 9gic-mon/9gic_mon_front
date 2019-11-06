import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 6.6vh;
    /* height: 60px; */
    background: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.36);
    position: absolute;
    z-index: 1;
`;

export const TopContainer = styled.div`
    width: 100vw;
    flex: 4;
    background: white;
    display: flex;
    align-items: center;
`;

export const BottomContainer = styled.div`
    width: 100vw;
    flex: 1;
    background: white;
`;

export const LogoImage = styled.div`
    width: 95px;
    height: 43px;
    margin-left: 7.3%;
    background-color: #ffaace;
`;

export const ProfileButton = styled.button`
    margin-left: 75.5vw;
    font-family: NanumSquare;
    font-size: 18px;
`;

export const BottomBar = styled.div`
    width: 100%;
    border-top: 3px solid #ffaace;
`;