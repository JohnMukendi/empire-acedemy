import Link from 'next/link'
import Image from 'next/image';
import React, {useState} from 'react';


function Navbar() {
    
    return (
        <nav className="nav-bar">
            <Link href="/">
            <div className="logo-div">
                <img id='logo' src="/e logo.png" alt="logo" />
            </div>
            </Link>
            <div className="nav-links">
                <Link href="/"><a>Home</a></Link>
                <Link href="/registration"><a>Registrations</a></Link>
                <Link href="/graduates"><a>Graduates</a></Link>
                <Link href="/courses"><a>Courses</a></Link>
                <Link href="/contactus"><a>Contact Us</a></Link>
                <Link href="/about"><a>About Us</a></Link>
            </div>
            
        </nav>
    );
}

export default Navbar;
