import styled from "@emotion/styled";

export const Container = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid red;
  border-radius: 1rem;
  padding: 1rem;
  font-family: sans-serif;

  h2 {
    margin: 0;
    color: red;
    font-weight: 400;
  }

  button {
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;