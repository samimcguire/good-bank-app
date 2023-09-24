import { Link } from "react-router-dom";

const Navbar = () => {
   return (
    <ul className="nav justify-content-center nav-tabs">
        <Link to='/' className="nav-link" ><li className="nav-item">Home</li></Link>
        <Link to="/createaccount" className="nav-link"><li className="nav-item">Create Account</li></Link>
        <Link to="/login" className="nav-link"><li className="nav-item">Login</li></Link>
        <Link to="/deposit" className="nav-link"><li className="nav-item">Deposit</li></Link>
        <Link to="/withdraw" className="nav-link"><li className="nav-item">Withdraw</li></Link>
        <Link to="/alldata" className="nav-link"><li className="nav-item">All Data</li></Link>
    </ul>
   ); 
}

export default Navbar;