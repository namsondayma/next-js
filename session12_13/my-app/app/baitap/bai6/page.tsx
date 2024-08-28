import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  address: Address;
};

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>
              Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
