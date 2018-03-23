import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Header from './containers/Header';
import Footer from './containers/Footer';
import PageContainer from './containers/PageContainer';
import './assets/css/App.css';


class App extends Component {

  state = {
    user: 'Yazan',
  }
  
  render() {
    return (
        <div className="App">
          <Header/>
          <PageContainer/>
          <Footer/>
        </div>
    );
  }
}

export default App;
