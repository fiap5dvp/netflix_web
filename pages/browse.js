import { useRouter } from "next/router";
import { Container, Content } from "../styles/browse";
import Background from "../components/Background";

export default function Browse() {
  const router = useRouter();

  function onSelect() {
    router.push("/movies  ");
  }

  return (
    <Container>
      <Background height={"100%"} hideImage>
        <section>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" />
          <span />
        </section>
        <Content>
          <h1>Quem está assistindo?</h1>
          <section onClick={onSelect}>
            <div>
              <img src="https://occ-0-1315-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71" />
              <h2>Lucas Lima</h2>
            </div>
            <div>
              <img src="https://occ-0-1315-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71" />
              <h2>Eric</h2>
            </div>
          </section>
          <button>GERENCIAR PERFIS</button>
        </Content>
      </Background>
    </Container>
  );
}
