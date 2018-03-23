import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import banner from '../../assets/img/ReactBanner.png'
import TopNavbar from '../TopNavbar';

class Header extends Component {

  render(){
    return (
      <header>
        <Image src={banner} centered />
        <TopNavbar />
      </header>
    );
  }
}

export default Header;