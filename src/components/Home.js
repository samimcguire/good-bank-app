import { useContext } from "react";
import { UserContext } from "../context";
import Logo from "./badbanklogo.png"
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <Card style={{ width: '50rem', top: 'center', left: '15rem' }}>
        <Card.Header style={{ fontWeight:"bold" }}>BadBank Landing Page</Card.Header>
        <Card.Body>
          <Card.Title>WELCOME TO THE BANK</Card.Title>
          <Card.Text>
            You can use this bank for all of your banking needs. 
          </Card.Text>
          <Card.Img src={Logo} className="img-fluid" alt="responsive bank logo"/>
        </Card.Body>
      </Card>
    );
}

export default Home;