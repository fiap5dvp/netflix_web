import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #000;
  color: #fff;

  a {
    background-color: #e50914;
    line-height: normal;
    padding: 7px 17px;
    font-weight: 400;
    border-radius: 3px;
    font-size: 1.3rem;
    color: #fff;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  border-bottom: 8px solid #aaa;
`;

export const Folder = styled.div`
  z-index: 999;
  padding: 70px 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h2,
  h3 {
    max-width: 645px;
    text-align: center;
  }

  h1 {
    margin: 0 150px;
    font-size: 5rem;
  }

  h2 {
    margin: 16px 150px;
    font-size: 2.3rem;
    font-weight: 400;
  }

  h3 {
    margin: 16px 150px;
    font-size: 19px;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;

  input {
    flex: 1;
    padding: 10px;
    border: 0;
    background-color: #fff;
    font-size: 1.6rem;

    &::placeholder {
      color: #777;
    }
  }

  a {
    border: 0;
    color: #fff;
    padding: 20px 26px;
    border-left: 1px solid #333;
    background-color: #e50914;
    font-size: 2.3rem;
  }
`;
