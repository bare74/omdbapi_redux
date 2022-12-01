import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import img_not_found from "../img/img_not_found.png";

const CardDetail = ({
  Title,
  Poster,
  Actors,
  imdbRating,
  Rated,
  Runtime,
  Genre,
  Plot,
}: {
  Title: any;
  Poster: any;
  Actors: any;
  imdbRating: any;
  Rated: any;
  Runtime: any;
  Genre: any;
  Plot: any;
}) => {
  return (
    <CardGroup style={{ padding: "10px" }}>
      <Card.Img
        variant="top"
        src={Poster === "N/A" ? img_not_found : Poster}
        alt={Title}
      />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Rating <span>{imdbRating === "N/A" ? " " : imdbRating}</span>
        </Card.Subtitle>
        <Card.Text>{Plot}</Card.Text>
        <Card.Text>Skuespillere : {Actors === "N/A" ? " " : Actors}</Card.Text>
        <Card.Text>Rated: {Rated === "N/A" ? " " : Rated}</Card.Text>
        <Card.Text>Lengde:{Runtime === "N/A" ? " " : Runtime}</Card.Text>
        <Card.Text>Genre:{Genre === "N/A" ? " " : Genre}</Card.Text>
      </Card.Body>
    </CardGroup>
  );
};

export default CardDetail;
