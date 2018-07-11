import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import {Route} from "react-router-dom";
import MainHeader from "./view/main-header";
import MainFooter from "./view/main-footer";
// import Index from './router/index'
import MainContent from './view/main-content';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" component={MainHeader} />
        <MainContent />
        {/* <div><Index/></div> */}
        <MainFooter />
      </Layout>
    );
  }
}
export default App;
