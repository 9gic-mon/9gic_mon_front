import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 75px;
    background: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.36);
`;

export const TopContaimer = styled.div`
    width: 100%;
    background: white;
`;

export const BottomContaimer = styled.div`
    width: 100%;
    background: white;
`;

export const Logo = styled.image`
    width: 95px;
    height: 50px;
    margin-top: 10px;
    margin-left: 7%;
    margin-bottom: 22px;
`;

export const ListContainer = styled.ul`
    all: unset;
    width: 300px;
    display: flex;
    margin-top: 23px;
    margin-left: 80%;
    align-items: center;
`;

export const ListItem = styled.li`
    all: unset;
    font-size: 18px;
`;

export const ListItmeBar = styled.div`
    height: 15px;
    border-left: 1px solid #000;
    display: inline-block;
    margin-left: 17px;
    margin-right: 17px;
`;

export const bottomBar = styled.div`
    width: 100%;
    border-top: 3px solid #ffaace;
    margin-top: 16px;
`;