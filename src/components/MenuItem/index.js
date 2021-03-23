import { Container } from "./styles";

function MenuItem({ selected, children, ...rest }) {
  return (
    <Container selected={selected} {...rest}>
      {children}
    </Container>
  );
}

export default MenuItem;
