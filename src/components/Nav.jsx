// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Button } from "rsuite"; 
import { useNavigate } from "react-router-dom";
import Navbar from './UI/NavUI';
import {useState} from 'react';

// console.log("Window" + window.location.href);
// console.log(window.location.pathname);
let tracker = true;

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  //These are the links on the header

  const [homeActive, setHomeActive] = useState(false);
  const [portActive, setPortActive] = useState(false);
  const [contActive, setContActive] = useState(false);

  let navigate = useNavigate();

  //findout which is the current address based off of window.location.pathname
  //tracker to break the infinite loop
    //react reruns the function after every load, and useStates reload the page
  if((window.location.pathname == '/') && tracker){
    setHomeActive(true);
    tracker = false;
  };
  if((window.location.pathname == '/Portfolio')  && tracker){
    tracker = false;
    setPortActive(true);
  };
  if((window.location.pathname == '/Contact')  && tracker){
    tracker = false;
    setContActive(true);
  };


  function homeButton () {
    if(portActive){
      setPortActive(false);
    }
    if(contActive){
      setContActive(false);
    }
    setHomeActive(true);
    navigate("/");
  }

  function portfolioButton () {
    if(homeActive){
      setHomeActive(false);
    }
    if(contActive){
      setContActive(false);
    }
    setPortActive(true);
    navigate("/Portfolio");
  }

  function contactButton () {
    if(portActive){
      setPortActive(false);
    }
    if(homeActive){
      setHomeActive(false);
    }
    setContActive(true);
    navigate("/Contact");
  }


  return (
    <Navbar className="headerBar"
      links={[
        // nav-link text-light 
        // <Link key={1} className="navListItem" to="/">
        <ul className='headerList' key={"header"}>
          <li key={1} className="navListItem">
            <button type="button" className={`${homeActive ? ("selected") : ("navButton")}`} onClick={homeButton}>
              Home
            </button>
          </li>
          {/* // </Link>, */}
          {/* // <Link key={2} className="navListItem" to="/AboutMe">
          //     About Me
          // </Link>, */}
          <li key={2} className="navListItem"> 
            <button type="button" className={`${portActive ? ("selected") : ("navButton")}`} onClick={portfolioButton}>
              Portfolio
            </button>
          </li>
          <li key={3} className="navListItem"> 
            <button type="button" className={`${contActive ? ("selected") : ("navButton")}`} onClick={contactButton}>
              Contact
            </button>
          </li>
        </ul>
        // <Link key={5} className="navListItem" to="/Resume">
        //     Resume
        // </Link>,
      ]}
    />
  );
}