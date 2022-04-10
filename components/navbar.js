import Link from 'next/link'
function Navbar() {
    return (
        <nav className="nav-bar">
            <Link href="/">
            <div className="logo-div">
                <img id='logo' src="/e logo.png" alt="logo" />
            </div>
            </Link>
            <div className="nav-links">
                <Link href="/registration"><a>Registrations</a></Link>
                <Link href="/graduates"><a>Graduates</a></Link>
                <Link href="/courses"><a>Courses</a></Link>
                <Link href="/transaction"><a>Transactions</a></Link>
                <Link href="/contactus"><a>Contact Us</a></Link>
                <Link href="/about"><a>About Us</a></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;