import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 400px;
    background-color: #ffaace;
`;

export const CorporationIcon = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: greenyellow;
    position: absolute;
    z-index: 1;
    margin-top: 348px;
`;

export const CorporationName = styled.div`
    font-family: NanumSquare;
    font-size: 30px;
    font-weight: bold;
    margin-top: 19px;
`;

export const OneLineCorporationExplanation = styled.div`
    font-family: NanumSquare;
    font-size: 25px;
    font-weight: bold;
    color: #707070;
    margin-top: 20px;
`;

export const EditButton = styled.div`
    font-family: NanumSquare;
    font-size: 15px;
    font-weight: bold;
    color: #707070;
    margin-top: 25px;
    margin-left: 94.2%;
`;

export const HorizontalBar = styled.div`
    width: 83.3%;
    border-top: 1px solid #ffaace;
    margin-top: 55px;
`;

export const ContentContainer = styled.div`
    width: 100%;    
    margin-top: 55px;
`;

export const ContentTitle = styled.div`
    font-family: NanumSquare;
    font-size: 25px;
    font-weight: bold;
    margin-left: 350px;
    margin-right: 350px;
    margin-bottom: 5px;
`;

export const TechStack = styled.div`
    border-radius: 5px;
    border: solid 1px #ffaace;
    font-family: NanumSquare;
    font-size: 20px;
    font-weight: bold;
    color: #707070;
    padding: 10px 15px 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EmploymentNotice = styled.div`
    width: 62.5%;
    height: 60px;
    border-radius: 5px;
    border: solid 1px #ffaace;
    font-family: NanumSquare;
    font-size: 20px;
    font-weight: bold;
    color: #707070;
    margin-top: 25px;
    margin-left: 360px;
    padding-left: 25px;
    display: flex;
    align-items: center;
`;

export const CorporationExplanation = styled.div`
    font-family: NanumSquare;
    font-size: 20px;
    color: #707070;
    margin-top: 25px;
    margin-left: 350px;
`;

export const CorporationInfoContainer = styled.div`
    margin-top: 25px;
    margin-left: 350px;
    display: flex;
    align-items: center;
`;

export const LeftContainer = styled.div`
    width: 150px;
    margin-right: 130px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const LeftBar = styled.div`
    height: 25px;
    border-left: solid 2px #ffaace;
`;

export const InfoTitle = styled.div`
    font-family: NanumSquare;
    font-size: 25px;
    font-weight: bold;
    color: #707070;
    margin-left: 10px;
`;

export const InfoDetail = styled.div`
    font-family: NanumSquare;
    font-size: 25px;
    font-weight: bold;
    color: #707070;
`;
