import React from "react";
import "./UserProfile.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import FavoriteTroc from "../FavoriteTroc/FavoriteTroc";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.usersList.find(e => e.id == localStorage.getItem("id")),
      troc: this.props.trocList
    };
  }
  render() {
    console.log(this.props.usersList);
    console.log(this.state.troc);
    console.log(this.state.user);
    return (
      <Container fluid className="user-profile-container">
        <Row className="user-profile-header">
          <h1 className="page-title">Mon Profil</h1>
        </Row>
        <Row>
          <Col
            className="user-profile-column-left"
            xs="12"
            sm="12"
            md="4"
            lg="3"
          >
            <Link to="/message" className="user-links">
              <h5 className="porfil-link-text">Mes messages</h5>
            </Link>
            <Link to="/user-troc-list" className="user-links">
              <h5 className="porfil-link-text">Mes trocs</h5>
            </Link>
            <Link to="/edit-profile" className="user-links">
              <h5 className="porfil-link-text">Modifier mon profil</h5>
            </Link>
          </Col>
          <Col
            className="user-profile-column-right"
            xs="12"
            sm="12"
            md="8"
            lg="9"
          >
            <Row>
              <Col xs="12" sm="12" md="4" lg="3" className="user-detail-left">
                <div className="user-detail-left-up">
                  <img
                    src={"/" + this.state.user.userPhoto}
                    alt="user-photo"
                    className="user-photo"
                  />
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
                </div>
                <Row className="counter">
                  <Col className="counter-troc" xs="12" sm="12" md="11" lg="11">
                    <img
                      src="/carton.jpg"
                      alt="troc-icon"
                      className="troc-icon"
                    />
                    <h3 className="troc-comma">:</h3>
                    <h3 className="user-troc-nbre">
                      {this.state.user.userTrocNbre}
                    </h3>
                  </Col>
                </Row>
              </Col>
              <Col xs="12" sm="12" md="8" lg="9" className="user-detail-right">
                <Row className="user-detail-row user-name">
                  <h4 className="user-name">
                    {this.state.user.userFirstName} {"  "}
                    {this.state.user.userLastName}
                  </h4>
                </Row>
                <Row className="user-detail-row user-code-postal">
                  <h5 className="user-city">
                    {this.state.user.userCity} , {this.state.user.postalCode}
                  </h5>
                </Row>
                <Row className="user-detail-row">
                  <h4 className="user-detail-label">Description</h4>
                  <h6 className="user-description">
                    {this.state.user.userDescription}
                  </h6>
                </Row>
                <Row className="user-detail-row">
                  <h4 className="user-detail-label">Mes Trocs Favoris </h4>
                  <FavoriteTroc />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserProfile;
