import React, { Component } from "react";
import Data from "./Data.json";
import UsersList from "./UsersList.json";
import HomePage from "./HomePage/HomePage";
import LogIn from "./LogIn/LogIn";
import Register from "./Register/Register";
import CommentCaMarche from "./CommentCaMarche/CommentCaMarche";
import AddTroc from "./AddTroc/AddTroc";
import SearchTroc from "./SearchTroc/SearchTroc";
import UserProfile from "./UserProfile/UserProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar.js";
import FooterPage from "./FooterPage/FooterPage";
import TrocDetail from "./TrocDetail/TrocDetail";
import Message from "./Message/Message";
import EditProfile from "./EditProfile/EditProfile";
import UserTrocList from "./UserTrocList/UserTrocList";

class App extends Component {
  render() {
    localStorage.setItem("user_id", "3");
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <NavBar /*navstyle={this.state.color}*/ />
                  <HomePage />
                  <FooterPage />
                </div>
              )}
            />
            <Route
              path="/"
              render={() => (
                <div>
                  <NavBar /*navstyle={this.componentDidMount}*/ />
                  <Route path="/log-in" component={LogIn} />
                  <Route path="/register" component={Register} />
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
                    path="/troc-detail/:troc_id"
                    render={props => (
                      <TrocDetail
                        trocList={Data}
                        id={props.match.params.troc_id}
                      />
                    )}
                  />
                  <Route
                    path="/user-profile"
                    render={() => (
                      <UserProfile usersList={UsersList} trocList={Data} />
                    )}
                  />
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
