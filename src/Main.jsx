import styled from "styled-components";
import { Container } from "./components";
import Item from "./Item";

const Card = styled.div`
  width: 32%;

  h3 {
    background-color: #fcba30;
    border-radius: 5px;
    color: dimgray;
    margin: 0;
    padding: 10px 20px;
  }
`;

const Machine = ({ title }) => (
  <Card>
    <h3>{title}</h3>
    <Container>
      <Item />
      <Item />
    </Container>
  </Card>
);

const Main = () => (
  <>
    <h2>Главный экран</h2>
    <Container>
      {[1, 2, 3].map((i) => (
        <Machine key={i} title={`Агломашина №${i}`} />
      ))}
    </Container>
  </>
);

export default Main;
