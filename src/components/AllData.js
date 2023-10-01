import { useContext } from "react";
import { UserContext } from "../context";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const AllData = () => {
    const ctx = useContext(UserContext);
    return (
        <Card style={{ width: '50rem', top: 'center', left: '15rem' }}>
            <Card.Header style={{ fontWeight:"bold" }}>All Data</Card.Header>
            <Card.Body>
                {JSON.stringify(ctx)}
                <Table>
                    <thead>
                        <tr>
                        <th data-field="ctx.name">Name</th>
                        <th data-field="ctx.email">Email</th>
                        <th data-field="ctx.password">Password</th>
                        <th data-field="ctx.balance">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{JSON.stringify(ctx.name)}</td>
                            <td>{JSON.stringify(ctx.email)}</td>
                            <td>{JSON.stringify(ctx.password)}</td>
                            <td>{JSON.stringify(ctx.balance)}</td>
                        </tr>
                    </tbody>
                    </Table>
            </Card.Body>
        </Card>
    );
}

export default AllData;