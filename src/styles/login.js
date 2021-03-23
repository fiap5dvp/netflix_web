import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #000;
  color: #fff;
  height: 100%;

  section {
    img {
      width: 14rem;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

export const Content = styled.div`
  z-index: 999;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 60px 70px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 32px;
    font-weight: 700;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin-bottom: 30px;
  }

  button {
    background-color: #e50914;
    border-radius: 4px;
    height: 50px;
    width: 100%;
    border: none;
    color: #fff;
    font-size: 1.4rem;
  }
`;

export const Input = styled.div`
  border-radius: 4px;
  width: 314px;
  height: 52px;
  margin-bottom: 15px;
  background-color: #333;
  display: flex;
  flex-direction: column;

  &::placeholder {
    color: #777;
  }

  input {
    border-radius: 4px;
    padding: 0 20px;
    height: 100%;
    border: 0;
    width: 100%;
    background-color: transparent;
    font-size: 1.3rem;
    color: #fff;
  }
`;
