import { useContext } from "react";
import { UserContext } from "../context";

const Balance = () => {
    const ctx = useContext(UserContext);
    return (
        <h1>Balance<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}

export default Balance;