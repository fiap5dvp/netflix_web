import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  /* background-color: #f00;*/
  width: 95vw;
  z-index: 9;

  .menu-wrapper {
    width: 100%;
  }

  .left,
  .right {
    padding: 10px;
  }

  > h1 {
    font-size: 2.4rem;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  z-index: 9;

  section {
    z-index: 9;
    margin: 0 4px;
    width: 250px;
    height: 150px;
    transition: all 0.4s;
    position: relative;
    border-radius: 4px;
  }
`;

export const Movie = styled.div`
  width: 250px;
  height: 350px;
  margin: 0 4px;
  position: relative;
  border-radius: 4px;
  border: 2px solid transparent;

  .content {
    position: absolute;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: scale opacity ease-in 0.4s;
    /* transition-delay: 0.2s;*/
    padding: 10px;
    font-size: 2rem;

    h1 {
      font-size: 1.2rem;
    }
  }

  img {
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    border: 2px solid #fff;
    cursor: pointer;

    .content {
      opacity: 1;
    }
  }
`;
