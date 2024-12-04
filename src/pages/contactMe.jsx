import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// this is contact information
// should have a header of contact me, then ways to reach me
export default function ContactPage() {
    return (
        <div className='contacts'>
            <h1>How to contact me</h1>
            <h3>Email : <a href="ericjackwong@outlook.com">ericjackwong@outlook.com</a></h3> 
            <h3>Phone : <a href="704-617-8710">704-617-8710</a></h3> 
            <h3>Checkout my Github : <a href="https://github.com/Rovak0">Rovak0</a></h3> 
        </div>
    )
};