import React, { Component } from "react";
import "./TrocCard.css";
import { Fa } from "mdbreact";
import { Container, Row, Col } from "reactstrap";

// React component for the front side of the card
const CardFront = props => {
  console.log(props.troc);
  return (
    <div className="card-side side-front">
      <div>
        <div>
          <div className="img">
            <img src={props.troc.photo} />
          </div>
          <div className="side-front-content">
            <h6 className="font-weight-bold font-color-gold">
              {props.troc.title}
            </h6>
            <h6 className="font-weight-bold font-color-blue">
              {props.troc.typeO} d'un {props.troc.typeS}
            </h6>
            <h6 className="font-color-grey">
              {props.troc.userFirstName} {props.troc.userLastName}
            </h6>
            <p className="font-color-pink">
              Mis en ligne le {props.troc.dateCreationTroc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// React component for the back side of the card
const CardBack = props => {
  console.log(props.troc);
  return (
    <div className="card-side side-back">
      <div className="container-fluid">
        <h4 className="font-weight-bold font-color-gold">Description</h4>
        <hr />
        <p>{props.troc.description}</p>
        <hr />
        <div className="card-social-links">
          <ul className="social-links">
            <li className="list-inline-item">
              <a className="p-2 fa-lg fb-ic">
                <Fa icon="facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="p-2 fa-lg tw-ic">
                <Fa icon="twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="p-2 fa-lg gplus-ic">
                <Fa icon="google-plus" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="p-2 fa-lg li-ic">
                <Fa icon="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// React component for the card (main component)
const TrocCard = props => {
  console.log(props.troc);
  return (
    <Col xs="12" sm="12" md="4" lg="4" className="card-container">
      <div className="card-body">
        <CardFront troc={props.troc} />
        <CardBack troc={props.troc} />
      </div>
    </Col>
  );
};

export default TrocCard;
