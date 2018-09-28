import React, { Component } from "react";
import Input from "./Input";
import Messages from "./Messages";
import { Container, Row, Col, Button } from "reactstrap";

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  render() {
    return (
      <Container className="message-container">
        <Row className="message-header">
          <h1 className="page-title">Mes Messages</h1>
        </Row>
        <Row>
          <Messages messages={this.state.messages} />
          <Input
            sendMessages={this.getMessage}
            clearMessages={this.clearMessages}
          />
        </Row>
      </Container>
    );
  }

  checkInput = () => {
    let chatInput = document.getElementById("chatInput").value;
    let nameInput = document.getElementById("nameInput").value;
    if (nameInput == "" && chatInput == "") {
      alert("Message and name cannot be empty!");
    } else if (chatInput == "") {
      alert("Message cannot be empty!");
    } else if (nameInput == "") {
      alert("Name cannot be empty!");
    } else {
      return {
        user: nameInput,
        text: chatInput
      };
    }
  };

  getMessage = e => {
    e.preventDefault;
    let newMsg = this.checkInput();
    let messages = this.state.messages;
    messages.push(newMsg);
    this.setState({
      messages: messages
    });
    document.getElementById("chatInput").value = "";
    document.getElementById("nameInput").value = "";
  };

  clearMessages = e => {
    e.preventDefault;
    let msg = [];
    this.setState({
      messages: msg
    });
  };
}

export default ChatBox;
