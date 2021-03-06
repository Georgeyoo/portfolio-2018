import React, { Component } from 'react';
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<a href="/">/George Yoo/</a>} scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="/G/eorge Yoo">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
