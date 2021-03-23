import { useState, useEffect } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

import Detail from "../Detail";

import { Container, Movie } from "./styles";
import {
  IoIosArrowDropleft as LeftIcon,
  IoIosArrowDropright as RightIcon,
} from "react-icons/io";

function Slider({ title, movies, onGetDetail }) {
  const [selected, setSelected] = useState(null);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});

  const Menu = (list, selected) =>
    list.map((el) => {
      const { name, poster, id } = el;

      return (
        <Movie key={id} selected={selected}>
          <img src={poster} />
          <div className="content">
            <h1>{name}</h1>
          </div>
        </Movie>
      );
    });

  const Arrow = ({ type, className }) => {
    return (
      <div className={className}>
        {type === 1 ? (
          <LeftIcon size={32} color="#555" />
        ) : (
          <RightIcon size={32} color="#555" />
        )}
      </div>
    );
  };

  const onSelect = async (key) => {
    setSelected({ selected: key });

    const detail = await onGetDetail(key);

    if (detail.id === movieDetail.id) {
      setIsShowDetail(!isShowDetail);
    } else {
      setIsShowDetail(true);
    }

    setMovieDetail(detail);
  };

  const ArrowLeft = Arrow({ type: 1, className: "left" });
  const ArrowRight = Arrow({ type: 0, className: "right" });

  const menuItems = Menu(movies, selected);

  async function onRefresh() {
    const detail = await onGetDetail(movieDetail.id);
    setMovieDetail(detail);
  }

  useEffect(() => {
    setIsShowDetail(false);
  }, [movies]);

  return (
    <>
      {menuItems.length > 0 && (
        <Container>
          <h1>{title}</h1>

          <ScrollMenu
            data={menuItems}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={onSelect}
            transition={0.7}
            wheel={false}
            hideArrows={true}
            hideSingleArrow={true}
          />
          {isShowDetail && <Detail movie={movieDetail} onRefresh={onRefresh} />}
        </Container>
      )}
    </>
  );
}

export default Slider;
