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

export const LogoImage = styled.image`
    width: 95px;
    height: 50px;
    /* margin-top: 10px; */
    margin-top: 13.7%;
    margin-left: 7.3%;
`;

export const ListContainer = styled.ul`
    all: unset;
    display: flex;
    width: 13vw;
    margin-left: 80vw;
    align-items: center;
`;

export const ListItem = styled.li`
    all: unset;
    font-size: 18px;
`;

export const ListItmeBar = styled.div`
    /* height: 15px; */
    height: 1.5vh;
    border-left: 1px solid #000;
    display: inline-block;
    margin-left: 1vw;
    margin-right: 1vw;
`;

export const BottomBar = styled.div`
    width: 100%;
    border-top: 3px solid #ffaace;
`;