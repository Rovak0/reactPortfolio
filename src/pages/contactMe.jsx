import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ContactPage() {
    return (
        <div className='mainBody'>
            {/* react needs to return exactly 1 component, make it a big one with small parts inside */}
            <div className="container pt-4 contacts">
                {/* I want a left side with text and a right side with image */}
                {/* gave it a class called aboutMe to use later */}
                {/* to split the 2 sides, I will need 2 divs */}
                <div className="leftSide">
                    <h1>How to contact me</h1>
                    <h3>Email : <a href="ericjackwong@outlook.com">ericjackwong@outlook.com</a></h3> 
                    <h3>Phone : <a href="704-617-8710">704-617-8710</a></h3> 
                    <h3>Github : <a href="https://github.com/Rovak0">Rovak0</a></h3> 
                </div>
            </div>
        </div>
    )
};