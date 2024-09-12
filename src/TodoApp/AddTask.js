import axios from 'axios';
import { toast } from 'react-toastify';
import { fetchTasks } from './FetchTask'; // Import hàm fetchTasks từ fetchTasks.js

// Hàm để thêm nhiệm vụ
const addTask = async (title, description, assignee, setTasks, fetchTasks) => {
    try {
        //tạo đối tượng Task mới với các thông tin được nhập vào từ người dùng
        const newTask = {
            title,
            description,
            completed: false,
            createTime: new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }),
            assignee,
            completeTime: null,
        };

        //gọi đến method POST để tạo một Task mới
        const response = await axios.post('http://localhost:5000/tasks', newTask);
        //cập nhật lại danh sách Task trong stage 
        setTasks(prevTasks => [...prevTasks, response.data]); //toán tử copy để giữ lại dữ liệu cũ
        //Thông báo đến người dùng
        toast.success('Task added successfully!');
        //gọi lại hàm fetch để load lại danh sách Task
        await fetchTasks();
    } catch (error) {
        toast.error('Failed to add task!');
        console.error("There was an error adding the task!", error);
    }
};

export default addTask;
