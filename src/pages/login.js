import { useRef } from "react";
import { useRouter } from "next/router";

import Footer from "../components/Footer";
import { Container, Modal, Content, Input } from "../styles/login";
import Background from "../components/Background";
import treatException from "../helpers/TreatException";
import api from "../api";

export default function Login() {
  const router = useRouter();
  const userRef = useRef();
  const passwordRef = useRef();

  async function onEnter() {
    try {
      const user = userRef.current.value;
      const password = passwordRef.current.value;

      const token = await api.request({
        url: "http://localhost:4000/api/authenticate",
        method: "POST",
        data: {
          name: user,
          password,
        },
      });

      console.log(token);

      localStorage.setItem("ntk", token);

      router.push("/browse");
    } catch (error) {
      treatException(error);
    }
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
              <input ref={userRef} placeholder="Usuário" />
            </Input>
            <Input>
              <input ref={passwordRef} placeholder="Senha" type="password" />
            </Input>

            <button onClick={onEnter}>Entrar</button>
          </Modal>
        </Content>
        <Footer />
      </Background>
    </Container>
  );
}
