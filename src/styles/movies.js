import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  /* background-color: #141414; */
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  > div {
    > section {
      > img {
        width: 9rem;
      }

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        > a {
          margin: 0 10px;
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: -100px;
  padding: 0 0 0 50px;
  z-index: 9;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 20px 50px;
  transition: background 0.7s;
  /* background-color: #333; */
  width: 100%;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > img {
      width: 110px;
    }
  }
`;

export const PosterMaster = styled.div`
  height: 80vh;
  color: #fff;
  background-color: #555;
  position: relative;

  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  > section {
    position: absolute;
    bottom: 200px;
    left: 50px;
    width: 50%;

    h1 {
      font-size: 6rem;
    }

    h2 {
      font-size: 3rem;
      font-weight: 400;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

export const SearchPanel = styled.div`
  border: 1px solid #777;
  border-radius: 6px;
  padding: 5px 10px;
  width: 300px;
  display: flex;
  flex-direction: row;
  margin-right: 20px;

  input {
    margin-left: 10px;
    flex: 1;
    border: 0;
    background-color: transparent;
    color: #fff;
  }
`;
