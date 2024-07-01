import styled from "styled-components";

export const ChoiceButton = styled.button`
  border: 2px solid #bc6c25;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  color: inherit;
  font-size: 18px;
  font-style: bold;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    background-color: #bc6c25;
    color: #fefae0;
    transition: all 200ms ease-in;
  }
`;

export const ResetButton = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 30px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #bc6c25;
  color: #fefae0;
`;
