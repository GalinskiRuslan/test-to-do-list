import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import src1 from "../../../img/6649eacab7ece5b_920x520.jpg";
import src2 from "../../../img/depositphotos_32376825-stock-photo-book-and-sweater.jpg";
import src3 from "../../../img/slide-img.jpg";
import { Link } from "react-router-dom";

const MainPages = () => {
  return (
    <React.Fragment>
      <Carousel variant="dark">
        <Carousel.Item style={{ textAlign: "center" }}>
          <Figure>
            <Figure.Image
              width={600}
              height={600}
              style={{ minHeight: 400 }}
              alt="171x180"
              src={src1}
            />
          </Figure>

          <Carousel.Caption>
            <h3>Приветствуем в приложении ToDoList!</h3>
            <p>
              Это приложение-проект, поэтому не весь функционал может работать.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ textAlign: "center" }}>
          <Figure>
            <Figure.Image
              style={{ minHeight: 400 }}
              width={600}
              height={600}
              alt="171x180"
              src={src2}
            />
          </Figure>

          <Carousel.Caption>
            <h3>Приложение разработано не для комерции!</h3>
            <p>Приложение имеет исключительно тренировачный характер</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ textAlign: "center" }}>
          <Figure>
            <Figure.Image
              style={{ minHeight: 400 }}
              width={600}
              height={600}
              alt="171x180"
              src={src3}
            />
          </Figure>
          <Carousel.Caption>
            <h3>Дизайн полностью на базе Bootstrap</h3>
            <p>Картинки и контент взяты из открытого доступа Интернет</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Button variant="primary" size="lg">
        <Link className="links" to="/tasks">
          Попробовать!
        </Link>
      </Button>
    </React.Fragment>
  );
};

export default MainPages;
