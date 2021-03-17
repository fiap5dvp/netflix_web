import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #141414;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;

  section {
    img {
      width: 9rem;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: -80px;

  > button {
    border: 1px solid grey;
    color: grey;
    text-transform: uppercase;
    padding: 0.5em 1.5em;
    letter-spacing: 2px;
    cursor: pointer;
    font-size: 1.5em;
    margin-top: 40px;
    background-color: transparent;

    &:hover {
      border-color: #fff;
      color: #fff;
    }
  }

  > h1 {
    text-align: center;
    font-size: 3.5vw;
    font-weight: 400;
    margin-bottom: 10px;
  }

  > section {
    display: flex;
    flex-direction: row;
    justify-content: center;

    div {
      margin: 15px;
      width: 300px;
      display: flex;
      flex-direction: column;
      width: 10vw;

      &:hover {
        img {
          border: 4px solid #fff;
          color: #fff;
        }

        h2 {
          color: #fff;
        }
      }

      img {
        height: 10vw;
        width: 10vw;
        border-radius: 4px;
      }

      h2 {
        text-align: center;
        font-size: 2.3rem;
        color: #777;
        padding: 5px;
        margin-top: 10px;
        font-weight: 400;
      }
    }
  }
`;
