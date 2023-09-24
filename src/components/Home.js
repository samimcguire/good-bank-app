import { useContext } from "react";
import { UserContext } from "../context";
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <Card style={{  }}>
        <Card.Header style={{ fontFamily:"cursive", fontWeight:"bold" }}>BadBank Landing Page</Card.Header>
        <Card.Body>
          <Card.Title>Welcome to the Bank</Card.Title>
          <Card.Text>
            You can use this bank
          </Card.Text>
          <Card.Img src=".\badbanklogo.png"  className="img-fluid" alt="responsive bank logo"/>
        </Card.Body>
      </Card>
    );
}

export default Home;