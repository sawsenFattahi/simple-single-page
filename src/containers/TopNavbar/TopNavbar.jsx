import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Scroll from 'react-scroll-to-element';

import data from '../../mocks/pages';

class TopNavbar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleItemsMenu = (menu, activeItem) => menu.map(item =>
          <Menu.Item  key={item.id} name= {item.title} active={activeItem === item.title } onClick={this.handleItemClick} >
            <Scroll type="id" element={`item-${item.id}`} key={`sc-${item.id}`} >
              {item.title}
            </Scroll>
          </Menu.Item>
  )
  render(){
    const { activeItem } = this.state;
    return (
      <Menu pointing secondary fixed='top' className="TopMenu">
        {this.handleItemsMenu(data, activeItem)}
      </Menu>
    );
  }
}

export default TopNavbar;