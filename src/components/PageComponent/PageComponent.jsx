import React from 'react';


const  Page = (props) => (
  <div>    
    <h2 >{props.title}</h2>
    <img src={props.image} alt={props.title}/>
    <p >
      {props.content}
    </p>
  </div>
  );

export default Page;