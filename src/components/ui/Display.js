import styled from "styled-components";

const Display = styled.div`
  font-size: 20px;
  font-style: bold;
  @media (max-width: 500px) {
    transform: scale(0.9);
  }
  span {
    margin-left: 10px;
    color: #bc6c25;
  }
`;

export default Display;
