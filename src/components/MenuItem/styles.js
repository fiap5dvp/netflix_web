import styled from "styled-components";

export const Container = styled.a`
  margin-left: 20px;
  font-size: 1.2rem;
  color: ${(props) => (props.selected ? "#fff" : "#999")};

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
