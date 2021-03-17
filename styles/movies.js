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

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;

      a {
        margin: 0 10px;
        font-size: 1.3rem;
      }
    }
  }
`;
