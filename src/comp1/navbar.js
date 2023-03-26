import './nav.css';
import './navbar.css';
import img from './reactpic.jpg';
import Navlink from './navlink';
const Navbar = () => {

    return (

        <div className="navbar">
            <img className="img" src={img}/>
            <h3 className="react-icon">React</h3>

            <Navlink linkname="Docs" link="https://reactjs.org/docs/getting-started.html"/>

            <Navlink linkname="Tutorial" link="https://reactjs.org/tutorial/tutorial.html"/>

            <Navlink linkname="Blog" link="https://reactjs.org/blog/"/>
            <Navlink linkname="Community" link="https://reactjs.org/community/support.html"/>
            <div className="ui right action left icon input">
  <i className="search icon"></i>
  <input type="text" placeholder="Search"/>
</div>
                    </div>
         

    );

};

export default Navbar;