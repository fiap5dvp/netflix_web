import {
  AiOutlinePlusCircle as AddIcon,
  AiOutlineCheckCircle as RemoveIcon,
  AiOutlineLike as LikeIcon,
  AiOutlinePlayCircle as PlayIcon,
} from "react-icons/ai";

import TreatException from "../../helpers/TreatException";

import CatalogService from "../../services/CatalogService";
import UserService from "../../services/UserService";

import { Container, Content, Information, Action } from "./styles";

function Detail({ movie, onRefresh }) {
  async function onViewed() {
    try {
      await CatalogService.viewed(movie.id);
      alert("Parabéns você assistiu o filme");
      onRefresh();
    } catch (error) {
      TreatException(error);
    }
  }

  async function onSeeInFuture() {
    try {
      await UserService.addSeeFuture(movie.id);
      alert("Filme adicionado a sua lista");
      onRefresh();
    } catch (error) {
      TreatException(error);
    }
  }

  async function onRemoveSeeInFuture() {
    try {
      await UserService.removeSeeFuture(movie.id);
      alert("Filme removido da sua lista");
      onRefresh();
    } catch (error) {
      TreatException(error);
    }
  }

  async function onLike() {
    try {
      if (!movie.liked) {
        await UserService.like(movie.id);
        onRefresh();
      }
    } catch (error) {
      TreatException(error);
    }
  }

  async function onUnlike() {
    try {
      console.log("unliked");
      if (movie.liked) {
        await UserService.unlike(movie.id);
        onRefresh();
      }
    } catch (error) {
      TreatException(error);
    }
  }

  return (
    <Container>
      <img src={movie.poster} />
      <Content>
        <div>
          <h1>{movie.name}</h1>
          <h2>{movie.detail}</h2>

          <Information>
            <div>
              <h3>Tipo: </h3>
              <h4>{movie.kinds}</h4>
            </div>
          </Information>
        </div>
        <Action>
          <button onClick={onViewed}>
            <PlayIcon size={70} color="#666" />
          </button>
        </Action>
        <section>
          {movie.future ? (
            <RemoveIcon size={48} color="#CCC" onClick={onRemoveSeeInFuture} />
          ) : (
            <AddIcon size={48} color="#555" onClick={onSeeInFuture} />
          )}

          {movie.liked ? (
            <LikeIcon size={48} color="#CCC" onClick={onUnlike} />
          ) : (
            <LikeIcon size={48} color="#555" onClick={onLike} />
          )}
        </section>
      </Content>
    </Container>
  );
}

export default Detail;
