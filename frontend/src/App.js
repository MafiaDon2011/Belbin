import './App.css';
import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserContext from './contexts/user';
import NavigationBar from './components/navigationbar';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Test from './components/takethetest';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {loggedIn: false}
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  
  logIn(user) {
    console.log("Updating user in app state...");
    user.loggedIn = true;
    this.setState({user:{user, loggedIn:true}});
  }
  
  logOut() {
    console.log("Removing user from app state...");
    this.setState({user: {loggedIn:false}});
  }
  
  render() {
    const context = {
      user: this.state.user,
      logIn: this.logIn,
      logOut: this.logOut
    };

    return (
      <UserContext.Provider value={context}>
        <Router>   
          <Layout className="layout">
            
            <header>
              <div style={{padding: 15, borderRadius: 50}}>
                <h1>Belbin Test</h1>
                <NavigationBar />
              </div>
            </header>
  
            <content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/test" element={<Test />} />
              </Routes>
            </content>
  
            <footer style={{ textAlign: 'center' }}>
              Created for Althaus Digital Software Development Workshop
            </footer> 
  
          </Layout>
        </Router>
      </UserContext.Provider>
  );}

}

export default App;