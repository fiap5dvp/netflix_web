import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Content } from "../styles/browse";
import Background from "../components/Background";
import treatException from "../helpers/TreatException";
import api from "../api";

export default function Browse() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  function onSelect() {
    router.push("/movies");
  }

  async function loadUsers() {
    try {
      const user = await api.request({
        url: "http://localhost:4000/api/users",
      });

      const listUsers = [];
      listUsers.push(user);

      setUsers(listUsers);
    } catch (error) {
      treatException(error);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Container>
      <Background height={"100%"} hideImage>
        <section>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" />
          <span />
        </section>
        <Content>
          <h1>Quem está assistindo?</h1>
          {users.map((user) => {
            return (
              <section onClick={() => onSelect(user)}>
                <div>
                  <img src="https://occ-0-1315-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71" />
                  <h2>{user.name}</h2>
                </div>
              </section>
            );
          })}

          <button onClick={() => alert("Em breve!")}>GERENCIAR PERFIS</button>
        </Content>
      </Background>
    </Container>
  );
}
