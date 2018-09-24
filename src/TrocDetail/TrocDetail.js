import React, { Component } from "react";
import "./TrocDetail.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

class TrocDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      troc: this.props.trocList.find(e => e.id == this.props.id)
    };
  }

  render() {
    return (
      <Container fluid className="troc-detail-container">
        <Row className="troc-detail-header">
          <h1 className="page-title">Fiche Troc</h1>
        </Row>
        <Row>
          <Col className="troc-detail-column" xs="12" sm="12" md="9" lg="9">
            <Row className="troc-detail-up">
              <Col className="troc-photo" xs="12" sm="12" md="4" lg="4">
                <img src={"/" + this.state.troc.photo} alt="troc-photo" />
              </Col>
              <Col className="troc-description" xs="12" sm="12" md="8" lg="8">
                <Row>
                  <h3 className="font-weight-bold font-title">
                    {this.state.troc.title}
                  </h3>
                </Row>
                <Row>
                  <h4 className="font-weight-bold font-type">
                    {this.state.troc.typeO} d'un {this.state.troc.typeS}
                  </h4>
                </Row>
                <Row>
                  <h5 className="font-category">{this.state.troc.category}</h5>
                  <h5 className="font-description">
                    {this.state.troc.description}
                  </h5>
                  <h5 className="font-date">
                    Mis en ligne le : {this.state.troc.dateCreationTroc}
                  </h5>
                </Row>
                <Row>
                  <h3 className="font-vues">{this.state.troc.vuesNbre} vues</h3>
                </Row>
              </Col>
            </Row>
            <Row className="troc-detail-center">
              <Col className="social-media" xs="12" sm="12" md="4" lg="4">
                <h6 className="social-media-text">
                  Partagez ce troc avec vos amis :
                </h6>
                <SocialMediaLinks />
              </Col>
              <Col xs="12" sm="12" md="7" lg="7" />
            </Row>
            <Row className="troc-detail-down">
              <Col xs="12" sm="12" md="7" lg="7" />
              <Col
                className="troc-button-negociate"
                xs="12"
                sm="12"
                md="4"
                lg="4"
              >
                <Link to="/message-form" className="negociate-btn">
                  <img
                    src="/negociate-icon.png"
                    alt="negociate-icon"
                    className="negociate-icon"
                  />
                  <h5 className="negociate-text">NEGOCIER</h5>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col
            className="troc-detail-column profile-column"
            xs="12"
            sm="12"
            md="3"
            lg="3"
          >
            <img
              src={"/" + this.state.troc.userPhoto}
              alt="user-photo"
              className="user-photo"
            />
            <h4 className="user-name">
              {this.state.troc.userFirstName} {"  "}
              {this.state.troc.userLastName}
            </h4>
            <h5 className="user-city">{this.state.troc.userCity}</h5>
            <h4 className="postal-code">{this.state.troc.postalCode}</h4>
            <Row className="counter">
              <Col className="counter-troc" xs="12" sm="12" md="11" lg="11">
                <img src="/carton.jpg" alt="troc-icon" className="troc-icon" />
                <h3 className="troc-comma">:</h3>
                <h3 className="troc-nbre">{this.state.troc.trocNbre}</h3>
              </Col>
            </Row>
            <Row className="evaluation">
              <img
                src="/love.png"
                alt="love-icon"
                className="evaluation-icon"
              />
              <img
                src="/love.png"
                alt="love-icon"
                className="evaluation-icon"
              />
              <img
                src="/love.png"
                alt="love-icon"
                className="evaluation-icon"
              />
              <img
                src="/love.png"
                alt="love-icon"
                className="evaluation-icon"
              />
              <img
                src="/love.png"
                alt="love-icon"
                className="evaluation-icon"
              />
            </Row>
            <Row classID="profile-access">
              <Link to="/user-profile" className="user-profile">
                <h5 className="porfil-link-text">Voir le profil complet</h5>
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default TrocDetail;
