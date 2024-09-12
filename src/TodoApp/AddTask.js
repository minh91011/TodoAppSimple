import axios from 'axios';
import { toast } from 'react-toastify';
import { fetchTasks } from './FetchTask'; // Import hàm fetchTasks từ fetchTasks.js

// Hàm để thêm nhiệm vụ
const addTask = async (title, description, assignee, setTasks, fetchTasks) => {
    try {
        const newTask = {
            title,
            description,
            completed: false,
            createTime: new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }),
            assignee,
            completeTime: null,
        };
        const response = await axios.post('http://localhost:5000/tasks', newTask);
        setTasks(prevTasks => [...prevTasks, response.data]); //toán tử copy
        toast.success('Task added successfully!');
        await fetchTasks();
    } catch (error) {
        toast.error('Failed to add task!');
        console.error("There was an error adding the task!", error);
    }
};

export default addTask;
