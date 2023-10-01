import { useContext, useState } from "react";
import { UserContext } from "../context";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Withdraw = () => {
    // Balance is always initially set to 100
    const [withdraw, setWithdraw] = useState('');
    const [balance, setBalance] = useState(100);
    const [validTransaction, setValidTransaction] = useState(false);
    const ctx = useContext(UserContext);

    let status = `BALANCE:    $${balance}`;

    const handleChange = (event) => {
        console.log(Number(event.target.value));
        if (Number(event.target.value) <= 0) {
        return setValidTransaction(false);
        }
        if (Number(event.target.value) > balance) {
        setValidTransaction(false);
        } else {
        setValidTransaction(true);
        }
        setWithdraw(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        let newBalance = balance - withdraw;
        setBalance(newBalance);
        setValidTransaction(false);
        event.preventDefault();
        ctx.users.push({balance});
    };

    return (
        <Card style={{ width: '50rem', top: 'center', left: '15rem' }}>
            <Card.Header style={{ fontWeight:"bold" }}>Withdraw</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Text id="total">
                        {status}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Withdraw Amount</Form.Label>
                        <Form.Control type="number" id="withdraw" placeholder="Enter amount to withdraw" value={withdraw} onChange={handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit"  onClick={handleSubmit}>
                        Withdraw
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Withdraw;