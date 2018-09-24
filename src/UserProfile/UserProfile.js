import React from "react";
import "./UserProfile.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class UserProfile extends React.Component {
  render() {
    return (
      <Container fluid className="user-profile-container">
        <Row className="user-profile-header">
          <h1 className="page-title">Mon Profil</h1>
        </Row>
        <Row>
          <Col className="user-profile-column" xs="12" sm="12" md="3" lg="3">
            <Link to="/message" className="user-profile">
              <h5 className="porfil-link-text">Mes messages</h5>
            </Link>
            <Link to="/user-troc-list" className="user-profile">
              <h5 className="porfil-link-text">Mes trocs</h5>
            </Link>
            <Link to="/edit-profile" className="user-profile">
              <h5 className="porfil-link-text">Modifier mon profil</h5>
            </Link>
          </Col>
          <Col className="user-profile-column" xs="12" sm="12" md="9" lg="9" />
        </Row>
      </Container>
    );
  }
}

export default UserProfile;
