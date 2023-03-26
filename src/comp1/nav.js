import React from 'react';
import Displaynav from './displaynav';
import './nav.css';
import Navbar from './navbar';
import Content from './content';
const Nav = () => {
    return (
        <>
   <div><div className='one'>
    <h2 className="head">Try out a preview of the new React Docs!
    <i className="hand point right outline icon"></i>
    <a href="https://beta.reactjs.org/" className='a'>beta.reactjs.org/</a> </h2>
    </div>
    <Navbar/></div>
    <Displaynav/>
    

    <div className="entire">
    <div className='pras'>
  <Content heading="Declarative" 
  matter="React makes it painless to create interactive UIs. Design simple views for each state
   in your application, and React will efficiently update and render just the right components when your data changes.
  Declarative views make your code more predictable and easier to debug."/>
  </div>

  <div className='pras'>
  <Content heading="Component-Based" 
  matter="Build encapsulated components that 
  manage their own state, then compose them 
  to make complex UIs.

  Since component logic is written in
  JavaScript instead of templates, you can 
  easily pass rich data through your app 
  and keep state out of the DOM."/>
</div>

<div className='pras'>
  <Content  heading="Learn Once, Write Anywhere" 
  matter="We don’t make assumptions about the rest of your technology stack, so you can develop new features 
  in React without rewriting existing code.

  React can also render on the server using Node and power mobile apps using React Native.
  
  "/>
  </div>
   </div>
        </>
    );
};

export default Nav;