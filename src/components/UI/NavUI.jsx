// may need to change some id's and classNames

// export default function Nav({ links }) {
//     return (
//       <nav className="navbar navbar-expand-lg bg-secondary">
//         <div className="container-fluid">
//           <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {links.map((link) => link)}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
  
export default function Nav({links}){
      return (
      <nav className="navbar navbar-expand-lg bg-secondary headerBarBase">
        {/* <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">  */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/*   navListItem*/}
              {links.map((link) => link)}
            </ul>
          {/* </div>
        </div> */}
      </nav>
    );
}