import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  padding-top: 25px;

  > section {
    margin: 0 56px;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Image = styled.div`
  position: fixed;
  display: relative;
  top: 0;
  left: 0;
  height: ${(props) => props.height};
  z-index: 9;
  min-width: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    padding-bottom: ${(props) => props.paddingBottom};
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;
