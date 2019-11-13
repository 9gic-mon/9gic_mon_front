import styled from "styled-components";

interface Item {
  isOver: boolean;
}

export const BottomContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;

export const ImageContainer = styled.div<Item>`
  width: 30%;
  height: 100%;
  border-radius: 10px;
  border: solid 2px #ffaace;
  display: flex;
  flex-direction: column;
  margin-right: 4%;
  align-items: center;
  ${props =>
    props.isOver ? "background-color: #ffaace;" : "background-color: #fff;"}
  cursor: pointer;

  > p {
    font-size: 45px;
    margin-top: 15%;
    text-align: center;

    ${props => (props.isOver ? "color: #fff;" : "color: #000;")}
  }
`;

export const LastImageContainer = styled(ImageContainer)`
  margin-right: 0;
`;

export const ImageTitle = styled.p``;

export const Image = styled.img`
  width: 256px;
  height: 256px;
  display: inline-block;
  margin-top: 15%;
`;
