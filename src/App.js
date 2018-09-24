import React, { Component } from "react";
import Data from "./Data.json";
import HomePage from "./HomePage/HomePage";
import CommentCaMarche from "./CommentCaMarche/CommentCaMarche";
import AddTroc from "./AddTroc/AddTroc";
import SearchTroc from "./SearchTroc/SearchTroc";
import UserProfile from "./UserProfile/UserProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar.js";
import FooterPage from "./FooterPage/FooterPage";
import TrocDetail from "./TrocDetail/TrocDetail";
import Message from "./Message/Message";
import MessageForm from "./MessageForm/MessageForm";
import EditProfile from "./EditProfile/EditProfile";
import UserTrocList from "./UserTrocList/UserTrocList";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <NavBar navstyle={"transparent"} />
                  <HomePage />
                  <FooterPage />
                </div>
              )}
            />
            <Route
              path="/"
              render={() => (
                <div>
                  <NavBar navstyle={"info-color"} />
                  <Route
                    path="/comment-ca-marche"
                    component={CommentCaMarche}
                  />
                  <Route path="/add-troc" component={AddTroc} />
                  <Route
                    path="/search-troc"
                    render={() => <SearchTroc trocList={Data} />}
                  />
                  <Route
                    path="/troc-detail/:id"
                    render={props => (
                      <TrocDetail trocList={Data} id={props.match.params.id} />
                    )}
                  />
                  <Route path="/user-profile" component={UserProfile} />
                  <Route path="/message-form" component={MessageForm} />
                  <Route path="/message" component={Message} />
                  <Route path="/edit-profile" component={EditProfile} />
                  <Route path="/user-troc-list" component={UserTrocList} />
                  <FooterPage />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
