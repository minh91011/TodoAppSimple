import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import axios from 'axios';
import '../SCSS/Home.scss';
import { toast } from 'react-toastify';
import addTask from './AddTask';
import { fetchUsers } from '../User/User'; // Import hàm fetchUsers từ User.js
import { fetchTasks } from './FetchTask'; // Import hàm fetchTasks từ fetchTasks.js
import DeleteTask from './DeleteTask';
import UpdateTask from './UpdateTask';

const ManageTask = () => {

    const [taskInfor, setTaskInfor] = useState({title: '', description: '', assignee: ''});

    const [listAssignee, setListAssignee] = useState([]); // Load data ra thẻ select-option

    const [filter, setFilter] = useState('all');
    const [filteredTasks, setFilteredTasks] = useState([]);

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Sử dụng async/await để gọi API
    const fetchTasksData = async () => {
        try {
            const tasksData = await fetchTasks(); // Gọi hàm fetchTasks từ module
            setTasks(tasksData); // Lưu dữ liệu vào state
            setFilteredTasks(tasksData); // Lưu dữ liệu vào filteredTasks
            setLoading(false); // Ngừng loading
        } catch (error) {
            toast.error('Fetching data fail!');
        }
    };

    // Gọi hàm fetchTasks và fetchUsers khi component render lần đầu
    useEffect(() => {  
        const getUsers = async () => {
            const userList = await fetchUsers(); // Gọi hàm fetchUsers để lấy danh sách người dùng
            setListAssignee(userList); // Lưu danh sách người dùng vào state
        };
        fetchTasksData();
        getUsers();
    }, []);

    // Hàm cập nhật filter và lọc tasks
    const updateFilter = (filterType) => {
        setFilter(filterType);
        const filtered = tasks.filter(task => {
            if (filterType === 'completed') return task.completed;
            if (filterType === 'todo') return !task.completed;
            return true;
        });
        setFilteredTasks(filtered);
    };

    // Sử dụng hàm addTask từ file addTask.js
    const handleAddTask = async () => {
        addTask(taskInfor.title, taskInfor.description, taskInfor.assignee, setTasks, fetchTasksData);
        setTaskInfor({title:'', description:'', assignee:''});
    };

    const handleStatusChange = async (taskId, newStatus) => {
        await UpdateTask(taskId, newStatus, fetchTasksData);
    };

    const handleDeleteTask = async(taskId) => {
        await DeleteTask(taskId, fetchTasksData);
    }

    // Hàm để hiển thị task
    const renderTasks = () => {
        if (loading) {
            return <p>Loading tasks...</p>;
        }
        if (filteredTasks.length === 0) {
            return <h4 className="text-center">No tasks available</h4>;
        }
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Create</th>
                            <th>Assignee</th>
                            <th>Status</th>
                            <th>Complete</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.createTime}</td>
                                <td>{task.assignee}</td>
                                <td className='statusColumn'>
                                    <select
                                        className={`form-select ${task.completed ? 'complete-text' : 'todo-text'}`}
                                        value={task.completed ? 'Completed' : 'To Do'}
                                        onChange={(e) => handleStatusChange(task.id, e.target.value)}
                                    >
                                        <option value="To Do">To Do</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </td>
                                <td>{task.completeTime ? task.completeTime : 'N/A'}</td>
                                <td><button type='submit' className='btn btn-danger' onClick={() => handleDeleteTask(task.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="todo-app container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-8">
                    <div className="form-container p-4">
                        <h2 className="text-center mb-4">Add a Task</h2>
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Title"
                            value={taskInfor.title}
                            onChange={(e) => setTaskInfor({ ...taskInfor, title: e.target.value })}
                        />
                        <textarea
                            className="form-control mb-3"
                            placeholder="Description"
                            value={taskInfor.description}
                            onChange={(e) => setTaskInfor({ ...taskInfor, description: e.target.value })}
                        />
                        <select
                            className="form-select mb-3"
                            value={taskInfor.assignee}
                            onChange={(e) => setTaskInfor({ ...taskInfor, assignee: e.target.value })}
                        >
                            <option value="">Select Assignee</option>
                            {listAssignee.map(user => (
                                <option key={user.id} value={user.name}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <button className="btn btn-primary w-100" onClick={handleAddTask}>Add Task</button>
                    </div>
                </div>
            </div>
            {/* Nút filter để phân loại task */}
            <div className="row justify-content-center mt-4">
                <div className="col-md-4 text-center">
                    <button className="btn btn-secondary mx-2" onClick={() => updateFilter('all')}>All</button>
                    <button className="btn btn-warning mx-2" onClick={() => updateFilter('todo')}>To Do</button>
                    <button className="btn btn-success mx-2" onClick={() => updateFilter('completed')}>Completed</button>
                </div>
            </div>

            {/* Khu vực hiển thị task */}
            <div className="row justify-content-center mt-4">
                <div className="col-md-12 col-sm-8">
                    <div className="task-list">
                        {renderTasks()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTask;
