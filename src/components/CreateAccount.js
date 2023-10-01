import { useContext, useState } from "react";
import { UserContext } from "../context";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateAccount = () => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

    const validate = (field, label) => {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    const handleCreate = () => {
        console.log(name, email, password);
        if(!validate(name, 'name')) return;
        if(!validate(email, 'email')) return;
        if(!validate(password, 'password')) return;
        ctx.users.push({name, email, password, balance:100});
        setShow(false);
    }

    const clearForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card style={{ width: '50rem', top: 'center', left: '15rem' }}
            status={status}
            >
        <Card.Header style={{ fontWeight:"bold" }}>Create Account</Card.Header>
        <Card.Body>{show ?
            (<Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleCreate} >
                    Create Account
                </Button>
            </Form>):
            (<Form>
                <h5>Success</h5>
                <Button variant="primary" type="submit" onClick={clearForm} >
                Add Another Account
                </Button>
            </Form>)}
        </Card.Body>
      </Card>
    );
}

export default CreateAccount;