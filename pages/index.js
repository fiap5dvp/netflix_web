import Link from "next/link";
import { Container, Header, Input, Folder } from "../styles/index";
import Footer from "../components/Footer";
import Background from "../components/Background";

export default function Home() {
  return (
    <Container>
      <Header>
        <Background height={"70vh"}>
          <section>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" />
            <Link href="/login">
              <a>Entrar</a>
            </Link>
          </section>

          <Folder>
            <h1>Filmes, séries e muito mais. Sem limites.</h1>
            <h2>Assista onde quiser. Cancele quando quiser.</h2>
            <h3>
              Pronto para assistir? Informe seu usuário para criar ou reiniciar
              sua assinatura.
            </h3>
            <Input>
              <input placeholder="usuário" />
              <Link href="/login">
                <a>Vamos lá {">"}</a>
              </Link>
            </Input>
          </Folder>
        </Background>
      </Header>
      <Footer />
    </Container>
  );
}
