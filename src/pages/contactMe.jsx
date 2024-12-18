import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


//the github button needs an event listener 
    //could be made off this page, but I'm just going to make it here
    //unless it breaks, then it will be sent elsewhere
function githubButton(){
    // console.log("Send to github");
    window.location.href = "https://github.com/Rovak0";
}

// this is contact information
// should have a header of contact me, then ways to reach me
export default function ContactPage() {
    return (
        <div className='contacts'>
            <h1>How to contact me</h1>
            {/* <h3>Email : <Button variant="outlined" href="ericjackwong@outlook.com">ericjackwong@outlook.com</Button></h3>  */}
            {/* <button variant="outlined" href="ericjackwong@outlook.com">ericjackwong@outlook.com</button> */}
            <h3>Email : <a href="ericjackwong@outlook.com">ericjackwong@outlook.com</a></h3> 
            <h3>Phone : <a href="704-617-8710">704-617-8710</a></h3> 
            {/* <h3>Checkout my Github : <a href="https://github.com/Rovak0">Rovak0</a></h3>  */}
            {/* <h3>Checkout my Github : <a href="https://github.com/Rovak0">Rovak0</a></h3>  */}
            <h3>Find me on Github: <button variant="outlined" onClick={githubButton}>Rovak0</button></h3>
        </div>
    )
};