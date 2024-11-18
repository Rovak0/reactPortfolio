//grab the link object
import { Link } from 'react-router-dom';
import Scroll from "react-scroll";
import {createRoot} from 'react-dom/client';

const ScrollLink = Scroll.ScrollLink;


//make the header function to export
const Header = () => {
    //the lack of props fed in means that this will always do the same thing
  return (
    //make a header with classes
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
        {/* make a div inside the header with spacing classes */}
      <nav className="container flex-row justify-space-between-lg justify-center align-center">
        {/* this makes links to the other pages
        rewrite it to jump to the same page */}
        {/* there is 3 jump destinations: aboutMe, placeholder0, and placeholder1 */}
        {/* this should make the jump button */}
        <ScrollLink
            to="aboutMe"
            spy={true} 
            smooth={true} 
            duration={500} 
            className='jumpButton' 
            activeClass='jumpButton-active'
            >
            {/* this next bit should be the jump button text */}
            About me
        </ScrollLink>

        <ScrollLink
            to="placeholder0"
            spy={true} 
            smooth={true} 
            duration={500} 
            className='jumpButton' 
            activeClass='jumpButton-active'
            >
            {/* this next bit should be the jump button text */}
            placeholder0
        </ScrollLink>

        <ScrollLink
            to="placeholder1"
            spy={true} 
            smooth={true} 
            duration={500} 
            className='jumpButton' 
            activeClass='jumpButton-active'
            >
            {/* this next bit should be the jump button text */}
            placeholder1
        </ScrollLink>

        {/* <Link className="text-light" to="/">
          <h1 className="m-0">Tech Thoughts</h1>
        </Link>
        <p className="m-0">Get into the mind of a programmer.</p> */}
      </nav>
    </header>
  );

  // take 2
  // return(
  //   <header>
  //     <nav className="navbar navbar-expand-lg bg-secondary">
  //       <div className="container-fluid">
  //         {sections.map((sectionName) => 
  //             <ScrollLink
  //                     to={sectionName}
  //                     spy={true} 
  //                     smooth={true} 
  //                     duration={500} 
  //                     className='jumpButton' 
  //                     activeClass='jumpButton-active'
  //                     >
  //                     {/* this next bit should be the jump button text */}
  //                     {sectionName}
  //             </ScrollLink>
  //           )}
  //       </div>
  //     </nav>
  //   </header>
  // )
};

// const Header = () => {
//     return (
//         <header>

//         </header>
//     )
// };

export default Header;