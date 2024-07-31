import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import UserContext from '../contexts/user'; 

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: this.loggedIn()
        };
        this.loggedIn = this.loggedIn.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    loggedIn() {
        const user = localStorage.getItem('username');
        return user !== null;
    }

    logIn() {
        localStorage.setItem('user', 'true'); 
        this.setState({ userLoggedIn: true });
    }

    logOut() {
        console.log("Removing user from app state...");
        localStorage.removeItem('user'); // Update to 'user' for consistency
        this.setState({ userLoggedIn: false });
    }

    render() {
        const context = {
            userLoggedIn: this.state.userLoggedIn,
            logIn: this.logIn,
            logOut: this.logOut
        };

        if (this.state.userLoggedIn) {
            return (
                <UserContext.Provider value={context}>
                    <Menu mode={"horizontal"} style={{ overflow: 'hidden', borderRadius: 15 }}>
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2" onClick={this.logOut}><Link to="/">Logout</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/test">Take the Test</Link></Menu.Item>
                    </Menu>
                </UserContext.Provider>
            );
        } else {
            return (
                <UserContext.Provider value={context}>
                    <Menu mode={"horizontal"} style={{ overflow: 'hidden', borderRadius: 15 }}>
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/register">Register</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/login">Login</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/test">Take the Test</Link></Menu.Item>
                    </Menu>
                </UserContext.Provider>
            );
        }
    }
}

export default NavigationBar;
