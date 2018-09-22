import React, { Component } from "react";
import "./AddTroc.css";
import { Container, Row, Col } from "reactstrap";

class AddTroc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      photos: ""
    };
    this.getTroc = this.getTroc.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  onChangeTitle = value => {
    this.setState({
      title: value
    });
  };

  onChangeDescription = value => {
    this.setState({
      description: value
    });
  };

  onChangePhotos = value => {
    this.setState({
      photos: value
    });
  };

  getTroc() {
    this.props.AddTrocFunction({ ...this.state });
  }

  clickHandler() {
    this.getTroc();
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <Container className="add-troc-container">
          <Row className="add-troc-header">
            <h1 className="page-title">Ajouter un Troc</h1>
          </Row>
          <Row className="add-troc-body add-troc-form">
            <Col xs="12" sm="12" md="4" lg="4" className="select">
              <Row className="sub-title">
                <h6 className="sub-title-h6">Type de Troc</h6>
              </Row>
              <Row className="up-check">
                <Col xs="12" sm="12" md="6" lg="6" className="check-input">
                  <label for="propose-icon" />
                  <input
                    type="checkbox"
                    className="check-icon"
                    name="propose"
                    value="propose"
                    id="propose-icon"
                  />{" "}
                  Je propose
                  <br />
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" className="check-input">
                  <label for="search-icon" />
                  <input
                    type="checkbox"
                    className="check-icon"
                    name="search"
                    value="search"
                    id="search-icon"
                  />{" "}
                  Je recherche
                </Col>
              </Row>
              <Row className="down-check">
                <Col xs="12" sm="12" md="6" lg="6" className="check-input">
                  <label for="bien-icon" />
                  <input
                    type="checkbox"
                    className="check-icon"
                    name="good"
                    value="good"
                    id="bien-icon"
                  />{" "}
                  Bien
                  <br />
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" className="check-input">
                  <label for="service-icon" />
                  <input
                    type="checkbox"
                    className="check-icon"
                    name="service"
                    value="service"
                    id="service-icon"
                  />{" "}
                  Service
                </Col>
              </Row>
              <Row className="sub-title category">
                <h6 className="sub-title-h6">Catégories</h6>
              </Row>
              <Row className="category-selection">
                <select>
                  <option value="Choisissez une catégorie">
                    Choisissez une catégorie
                  </option>
                  <option value="Coup de main">Coup de main</option>
                </select>
              </Row>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" className="add-troc-input">
              <Row className="sub-title">
                <h6 className="sub-title-h6">Annonce</h6>
              </Row>
              <Row className="label-div">
                <Col xs="12" sm="12" md="3" lg="3">
                  <label className="label-tag" for="title">
                    Titre{" "}
                  </label>
                </Col>
                <Col xs="12" sm="12" md="7" lg="7">
                  <input
                    className="add-form-input"
                    type="text"
                    maxLength="65"
                    placeholder="Titre du troc"
                    id="title"
                    onChange={e => this.onChangeTitle(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="label-div">
                <Col xs="12" sm="12" md="3" lg="3">
                  <label className="label-tag" for="title">
                    Description{" "}
                  </label>
                </Col>
                <Col xs="12" sm="12" md="7" lg="7">
                  <textarea
                    className="textarea"
                    rows="4"
                    cols="50"
                    placeholder="Décrivez votre troc ici..."
                    onChange={e => this.onChangeDescription(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="images-block">
                <Col className="block" xs="12" sm="12" md="4" lg="4">
                  <a href="#" className="sprites icones">
                    <div className="upload-images-block">
                      <img src="camera.png" className="svg-icon" alt="camera" />
                    </div>
                  </a>
                </Col>
                <Col className="block" xs="12" sm="12" md="4" lg="4">
                  <a href="#" className="sprites icones">
                    <div className="upload-images-block">
                      <img src="camera.png" className="svg-icon" alt="camera" />
                    </div>
                  </a>
                </Col>
                <Col className="block" xs="12" sm="12" md="4" lg="4">
                  <a href="#" className="sprites icones">
                    <div className="upload-images-block">
                      <img src="camera.png" className="svg-icon" alt="camera" />
                    </div>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="add-troc-footer">
            <button
              type="submit"
              className="add-button"
              onClick={this.clickHandler}
            >
              Ajouter
            </button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddTroc;
