import React from "react";

export default function Card({ img, name, weight, height, abilities }) {
  return (
    <div className="card" style={cardStyle}>
      <b className="card-text text-center pt-4 text-uppercase">
        {name}
      </b>
      <div className="image-container" style={imageContainerStyle}>
        <img
          className="card-img-top"
          src={img}
          alt="Card image cap"
          style={imageStyle}
        />
      </div>
      <div className="card-body text-center">
        <p className="card-text">
          <b>Weight:</b> {weight}
        </p>
        <p className="card-text">
          <b>Height:</b> {height}
        </p>
        <p className="card-text">
          <b>Ability:</b> {abilities[0].ability.name}
        </p>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "18rem",
  margin: "1rem",
};

const imageContainerStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  maxWidth: "200px",
  height: "auto",
};
