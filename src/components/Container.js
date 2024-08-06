import styled from "styled-components";

const Container = styled.div`
  background-color: #0a2647;
  width: 100%;
  height: 100vh;
  color: #46c2cb;
  text-align: center;
  padding: 20px 0;

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    @media (max-width: 500px) {
      transform: scale(0.9);
    }
  }
  h2 {
    margin: 40px auto;
  }
  section {
    margin-top: 50px;
  }
`;
export default Container;
