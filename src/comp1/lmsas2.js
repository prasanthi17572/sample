import React from 'react';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import './lmsas2.css'
const Lmsas2 = (props) => {
    return (
       <>
       <div className='c'>
       <div className="ui cards">
  <div className="card">
    <div className="content">
      <img  className="image" src={faker.image.avatar()}/>
      <div className="header">
        {props.header}
      </div>
      <div className="meta">
        {props.d1}
      </div>
      <div className="description">
        {props.d2}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  </div>
  </div>
       </>
    );
};

export default Lmsas2;