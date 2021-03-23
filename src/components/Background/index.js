import { Container, Image } from "./styles";

function Background({
  height,
  hideImage = false,
  src,
  children,
  isHideBorder = false,
}) {
  return (
    <Container>
      {hideImage ? (
        <>
          <span />
          <div />{" "}
        </>
      ) : (
        <Image height={height} paddingButton={isHideBorder ? "0" : "8px"}>
          <img
            src={
              src ||
              "https://cdn.falauniversidades.com.br/wp-content/uploads/2018/03/fala-universidades-netflix-3.jpg"
            }
          />
          <div />
        </Image>
      )}
      {children}
    </Container>
  );
}

export default Background;
