import { Link } from "react-router-dom";


const Navbar = () => {
   return (
    <ul className="nav justify-content-center nav-tabs">
        <Link to='/' className="nav-link" ><li className="nav-item" data-toggle="tooltip" data-placement="top" title="Navigate to Bank home page">BAD BANK</li></Link>
        <Link to="/createaccount" className="nav-link"><li className="nav-item" data-toggle="tooltip" data-placement="top" title="Create your Bank Account">Create Account</li></Link>
       {/* <Link to="/login" className="nav-link"><li className="nav-item" data-toggle="tooltip" data-placement="top" title="Login to your account">Login</li></Link> */}
        <Link to="/deposit" className="nav-link"><li className="nav-item" data-toggle="tooltip" data-placement="top" title="Navigate to deposit funds">Deposit</li></Link>
        <Link to="/withdraw" className="nav-link"><li className="nav-item" data-toggle="tooltip" data-placement="top" title="Navigate to withdraw funds">Withdraw</li></Link>
        <Link to="/alldata" className="nav-link"><li className="nav-item" data-toggle="tooltip" data-placement="top" title="Navigate to see all data">All Data</li></Link>
    </ul>
   ); 
}

export default Navbar;