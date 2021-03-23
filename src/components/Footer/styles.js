import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #777;
    font-size: 1.8rem;
    font-weight: 400;
  }

  h2 {
    color: #777;
    font-size: 1.5rem;
    font-weight: 400;
  }

  div {
    text-align: center;
    padding: 5px;
  }
`;
