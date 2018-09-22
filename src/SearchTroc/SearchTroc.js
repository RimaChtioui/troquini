import React, { Component } from "react";
import "./SearchTroc.css";
import TrocCard from "../TrocCard/TrocCard";
import FilterTroc from "../FilterTroc/FilterTroc";
import { Container, Row, Col } from "reactstrap";

class TrocList extends Component {
  render() {
    console.log(this.props.trocList);
    return (
      <Row>
        {this.props.trocList.map((troc, index) => (
          <TrocCard troc={troc} key={index} />
        ))}
      </Row>
    );
  }
}

class SearchTroc extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.trocList);
    return (
      <Container fluid className="search-troc-container container-fluid">
        <Row className="search-troc-header">
          <h1 className="page-title">Rechercher un Troc</h1>
        </Row>
        <Row>
          <Col className="filter-column" xs="12" sm="12" md="3" lg="3">
            <FilterTroc />
          </Col>
          <Col className="troc-list" xs="12" sm="12" md="9" lg="9">
            <TrocList trocList={this.props.trocList} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchTroc;
