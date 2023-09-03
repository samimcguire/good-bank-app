import { Link } from "react-router-dom";

const Navbar = () => {
   return (
    <ul>
        <Link to='/'><li>BadBank</li></Link>
        <Link to="/createaccount"><li>Create Account</li></Link>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/deposit"><li>Deposit</li></Link>
        <Link to="/withdraw"><li>Withdraw</li></Link>
        <Link to="/alldata"><li>All Data</li></Link>
    </ul>
   ); 
}

export default Navbar;