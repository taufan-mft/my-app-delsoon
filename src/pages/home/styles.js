import styled from "styled-components";


export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  input {
    margin-top: 8px;
    height: 20px;
    border-color: gray;
  }
`;

export const GuessWrapper = styled.div`
  margin-top: 30px;
`

export const MainButton = styled.button`
  background-color: orange;
  border: unset;
  color: white;
  height: 30px;
  margin-top: 8px;
  cursor: pointer;
`