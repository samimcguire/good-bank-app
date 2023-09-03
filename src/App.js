import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Deposits from './components/Deposit';
import Withdraw from './components/Withdraw';
import Balance from './components/Balance';
import AllData from './components/AllData';
import Home from './components/Home';


function App() {
  return (
    <div>
      <h1>Welcome to Bad Bank</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deposit" element={<Deposits />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/alldata" element={<AllData />} />
      </Routes>
    </div>
    
  );
}

export default App;
