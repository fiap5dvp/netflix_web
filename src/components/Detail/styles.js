import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #111;
  width: 95vw;

  img {
    height: 700px;
  }
`;

export const Action = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    background-color: #000;
    border-radius: 6px;
    padding: 50px;
    width: 300px;
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;

    svg {
      &:hover {
        color: #fff !important;
        cursor: pointer;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 5rem;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 300;
    color: #aaa;
  }

  section {
    svg {
      margin: 10px;

      &:hover {
        color: #fff !important;
        cursor: pointer;
      }
    }
  }
`;

export const Information = styled.div`
  margin-top: 20px;

  > div {
    display: flex;
    flex-direction: row;

    h3 {
      color: #666;
      margin-right: 10px;
    }

    h3,
    h4 {
      font-size: 1.2rem;
    }
  }
`;
