// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Button } from "rsuite"; 
import Navbar from './UI/NavUI';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  //These are the links on the header
  return (
    <Navbar className="headerBar"
      links={[
        // nav-link text-light 
        <Link key={1} className="navListItem" to="/">
          <button type="button" className="navButton">
            Home
          </button>
        </Link>,
        // <Link key={2} className="navListItem" to="/AboutMe">
        //     About Me
        // </Link>,
        <Link key={3} className="navListItem" to="/Portfolio">
          <button type="button" className="navButton">
            Portfolio
          </button>
        </Link>,
        <Link key={4} className="navListItem" to="/Contact">
          <button type="button" className="navButton">
            Contact Me
          </button>
        </Link>,
        // <Link key={5} className="navListItem" to="/Resume">
        //     Resume
        // </Link>,
      ]}
    />
  );
}