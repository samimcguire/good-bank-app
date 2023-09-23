import { useContext } from "react";
import { UserContext } from "../context";


const Home = () => {
    return (
        <Card
            txtcolor="black"
            heder="BadBank Landing Page"
            title="Welcome to the bank"
            text="You can use this bank"
            body={<img src="badbanklogo.png" className="img-fluid" alt="responsive bank logo"/>}
        />
    );
}

export default Home;