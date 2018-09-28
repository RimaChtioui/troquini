import React from "react";
import "./LogIn.css";
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Fa,
  Card,
  CardBody
} from "mdbreact";
import axios from "axios";

class LogIn extends React.Component {
  onLogin = () => {
    axios
      .post("/connect-user", { ...this.state })
      .then(res => {
        res.data.length === 0
          ? alert("Please to check your password or email")
          : alert(`Hello User ${res.data[0].pseudo}`);
      })
      .catch(err => alert(err));
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <Container className="login-container">
        <Row className="log-in-row">
          <Col md="6">
            <Card>
              <CardBody className="log-in-subcontainer">
                <form className="log-in-form">
                  <p className="h4 text-center py-4">Connexion</p>
                  <div className="grey-text">
                    <Input
                      onChange={this.onChange}
                      label="Votre email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <Input
                      onChange={this.onChange}
                      label="Votre mot de passe"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button onClick={this.onLogin} color="cyan" type="submit">
                      Connectez-vous
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LogIn;
