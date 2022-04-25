import Link from 'next/link'
import Image from 'next/image';
import React, {useState} from 'react';


function Navbar() {
    const cole = "Jean Meechy"
    //THEME SWITCH FUNCTIONALITY
    const [dark,setDark] = useState("switch");
    const [switchDiv,setSwitchDiv] = useState("mode-switch-div")
    
    const themeSwitch = ()=>{
        if (dark == 'switch'){
            setDark("lightmode-switch");
            setSwitchDiv("light-mode-switch-div")
        }
        else{
            setDark('switch')
            setSwitchDiv('mode-switch-div')
        }
        
    }
    return (
        <nav className="nav-bar">
            <Link href="/">
            <div className="logo-div">
                <img id='logo' src="/e logo.png" alt="logo" />
            </div>
            </Link>
            <div className="nav-links" style={{fontWeight:400,fontFamily:'Arial, Helvetica, sans-serif'}}>
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
//FUNCTIONALITIES
var cole = "lop"
export default Navbar;
module.exports.cole = cole