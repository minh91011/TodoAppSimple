import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import axios from 'axios';
import {toast } from 'react-toastify';


// Hàm fetchUsers để gọi API
export const fetchUsers = async () => {
    try {
        const response = await axios.get('http://localhost:5000/users'); 
        return response.data; // Trả về dữ liệu nếu thành công
    } catch (error) {
        toast.error('Fetching data failed!');
        console.error("There was an error fetching the users!", error);
        return []; // Trả về mảng rỗng nếu lỗi
    }
};

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // Khởi tạo loading với giá trị true

    // Gọi hàm fetchUsers khi component render lần đầu
    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            const data = await fetchUsers(); // Gọi hàm fetchUsers
            setUsers(data);
            setLoading(false);
        };

        loadUsers();
    }, []);

    // Hàm để hiển thị danh sách user
    const renderUsers = () => {
        if (loading) {
            return <p>Loading users...</p>;
        }
        if (users.length === 0) {
            return <h4 className="text-center">No users available</h4>;
        }
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>                            
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    };

    return(
        <div className="todo-app container">
            {/* Khu vực hiển thị danh sách user */}
            <div className="row justify-content-center mt-4">
                <div className="col-md-12 col-sm-8">
                    <div className="user-list">
                        {renderUsers()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageUser;
