import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import data from '../../mocks/pages';
import PageComponent from '../../components/PageComponent';

class Page extends Component {

  handleItemsBlock = (blocks) => blocks.map(item =>
    <Segment key={`sg-${item.id}`} id={`item-${item.id}`}> 
        <PageComponent 
          { ...item}
        />  
              
    </Segment>
  );

  render(){
    return (

        <Segment.Group>      
          {this.handleItemsBlock(data)}
        </Segment.Group>
    );
  }
}

export default Page;