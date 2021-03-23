import { useState, useEffect } from "react";

import Slider from "../components/Slider";
import MenuItem from "../components/MenuItem";

import treatException from "../helpers/TreatException";
import CatalogService from "../services/CatalogService";
import {
  AiOutlineSearch as SearchIcon,
  AiOutlinePoweroff as LogoffIcon,
} from "react-icons/ai";

import {
  Container,
  Content,
  Header,
  PosterMaster,
  SearchPanel,
} from "../styles/movies";

function Movie() {
  const [mylistMovies, setMylistMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [funnyMovies, setFunnyMovies] = useState([]);
  const [isTop, setIsTop] = useState(true);
  const [activeMenu, setActiveMenu] = useState("start");

  async function loadMovies() {
    /* const response = await api.request({
        url: "http://localhost:4001/api/movies",
      }); */

    CatalogService.listByTags("Acao", activeMenu)
      .then(setActionMovies)
      .catch(treatException);

    CatalogService.listByTags("Romance", activeMenu)
      .then(setRomanceMovies)
      .catch(treatException);

    CatalogService.listByTags("Comedia", activeMenu)
      .then(setFunnyMovies)
      .catch(treatException);
  }

  async function loadMostViewers(kind) {
    const movies = await CatalogService.listMostViews(kind);

    setActionMovies(movies.Acao || []);
    setRomanceMovies(movies.Romance || []);
    setFunnyMovies(movies.Comedia || []);
  }

  async function loadMylist() {
    const movies = await CatalogService.listMyList();
    setMylistMovies(movies);
  }

  const onScroll = () => {
    const isTopStatus = window.scrollY < 300;
    if (isTopStatus !== isTop) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    switch (activeMenu) {
      case "start":
      case "serie":
      case "filme":
        loadMovies();
        break;

      case "serie_mostviewers":
        loadMostViewers("serie");
        break;

      case "movie_mostviewers":
        loadMostViewers("filme");
        break;

      case "mylist":
        loadMylist();
        break;

      case "filter":
        break;

      default:
        setActionMovies([]);
        setRomanceMovies([]);
        setFunnyMovies([]);
        break;
    }

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [activeMenu]);

  async function onGetDetail(movieId) {
    const detail = await CatalogService.getDetail(movieId);
    return detail;
  }

  function selectMenu(menu) {
    if (menu === "mylist") {
      setActiveMenu("");
      setTimeout(() => {
        setActiveMenu(menu);
      }, 500);
    } else {
      setActiveMenu(menu);
    }
  }

  async function searchMovie(filter) {
    const movies = await CatalogService.searchMovie(filter);

    setActiveMenu("filter");

    setActionMovies(movies.Acao || []);
    setRomanceMovies(movies.Romance || []);
    setFunnyMovies(movies.Comedia || []);
  }

  async function onKeyPress({ charCode, target }) {
    if (charCode === 13) await searchMovie(target.value);
  }

  return (
    <Container>
      <Header style={{ backgroundColor: isTop ? "transparent" : "#111" }}>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
            styles="height: 300px !important"
          />
          <MenuItem
            selected={activeMenu === "start"}
            onClick={() => selectMenu("start")}
          >
            Início
          </MenuItem>
          <MenuItem
            selected={activeMenu === "serie"}
            onClick={() => selectMenu("serie")}
          >
            Séries
          </MenuItem>
          <MenuItem
            selected={activeMenu === "filme"}
            onClick={() => selectMenu("filme")}
          >
            Filmes
          </MenuItem>
          <MenuItem
            selected={activeMenu === "serie_mostviewers"}
            onClick={() => selectMenu("serie_mostviewers")}
          >
            Séries Mais Vistas
          </MenuItem>
          <MenuItem
            selected={activeMenu === "movie_mostviewers"}
            onClick={() => selectMenu("movie_mostviewers")}
          >
            Filmes Mais Vistos
          </MenuItem>
          <MenuItem
            selected={activeMenu === "mylist"}
            onClick={() => selectMenu("mylist")}
          >
            Minha Lista
          </MenuItem>
        </div>
        <div>
          <SearchPanel>
            <SearchIcon size={28} color="#777" />
            <input placeholder="Pesquisar" onKeyPress={onKeyPress} />
          </SearchPanel>
          <LogoffIcon size={28} color="#777" />
        </div>
      </Header>
      {activeMenu !== "mylist" && activeMenu !== "" ? (
        <>
          <PosterMaster>
            <img
              src="http://vivadigitalsa.com.br/wp-content/uploads/2019/11/indica5-27-11-1.jpg"
              styles="height: 300px !important"
            />
            <div />
            <section>
              <h1>Turma 5dvp</h1>
              <h2>Curso MICROSERVICES ARCHITECTURE / API / CONTAINERS</h2>
              <h3>TADEU D’ALESSANDRO BARBOSA</h3>
            </section>
          </PosterMaster>

          <Content>
            <Slider
              title="Ação"
              movies={actionMovies}
              onGetDetail={onGetDetail}
            />
            <Slider
              title="Romance"
              movies={romanceMovies}
              onGetDetail={onGetDetail}
            />
            <Slider
              title="Comédia"
              movies={funnyMovies}
              onGetDetail={onGetDetail}
            />
          </Content>
        </>
      ) : (
        <Content>
          <div style={{ marginTop: "300px" }} />
          <Slider
            title="Filmes na minha lista"
            movies={mylistMovies}
            onGetDetail={onGetDetail}
          />
        </Content>
      )}
    </Container>
  );
}

export default Movie;
