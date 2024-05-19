import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = "http://localhost:3000/users";

export default function CallaxAPI() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setUsers(response.data);
        });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`${baseURL}/${id}`).then(() => {
            setUsers(users.filter(user => user.id !== id));
        });
    };

    const handleEdit = (id, updatedUser) => {
        axios.patch(`${baseURL}/${id}`, updatedUser).then(() => {
            axios.get(baseURL).then((response) => {
                setUsers(response.data);
            });
        });
    };

    if (!users) return null;
    return (
        <Table class="table table-striped" style={{ marginTop: "50px" }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    const updatedUser = {
                                        id:event.target.id.value,
                                        first_name: event.target.first_name.value,
                                        last_name: event.target.last_name.value,
                                        email: event.target.email.value
                                    };
                                    handleEdit(user.id, updatedUser);
                                }}
                            >
                                <input
                                    type="text"
                                    name="first_name"
                                    defaultValue={user.first_name}
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    name="last_name"
                                    defaultValue={user.last_name}
                                    placeholder="Last Name"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user.email}
                                    placeholder="Email"
                                />
                                <button class="btn btn-info" type="submit" style={{marginLeft: "20px"}}>Update</button>
                            </form>
                        </td>
                        <td>
                        <button class="btn btn-warning" onClick={() => handleDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
