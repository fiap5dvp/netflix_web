import { useRouter } from "next/router";
import Footer from "../components/Footer";
import { Container, Modal, Content, Input } from "../styles/login";

import Background from "../components/Background";

export default function Login() {
  const router = useRouter();

  function onEnter() {
    router.push("/browse");
  }

  return (
    <Container>
      <Background height={"100%"}>
        <section>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" />
        </section>
        <Content>
          <Modal>
            <h1>Entrar</h1>
            <Input>
              <input placeholder="Usuário" />
            </Input>
            <Input>
              <input placeholder="Senha" />
            </Input>

            <button onClick={onEnter}>Entrar</button>
          </Modal>
        </Content>
        <Footer />
      </Background>
    </Container>
  );
}
