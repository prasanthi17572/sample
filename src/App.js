import React from 'react';
//import As1cards from './comp1/lmsas1';
import Nav from './comp1/nav';
import Lmsas2 from './comp1/lmsas2';
//import Lmsas3 from './comp1/lmsas3';
//import './comp1/lmsas2.css';
const App = () => {
  return (
    <div>
      {/* <Nav/> */}
      {/* <As1cards/> */}
      <div className="as2">
        <Lmsas2 header="Elliot Fu" d1="Friends of Veronika" d2="Elliot requested permission to view your contact details"/>
        <Lmsas2 header="Jenny Hess" d1="New Member" d2="Jenny wants to add you the group best friends"/>
        </div>
      {/* <Lmsas3/> */}
     
    </div>
  );
};

export default App;