import React from "react";
import axios from "axios";
import { fetchTasks } from "./FetchTask";
import { toast } from "react-toastify";

const UpdateTask = async(taskId, newStatus, fetchTasks) => {
    try {
        //tạo biến kiểu bool để lưu trạng thái status, nếu là Completed thì sẽ là True và ngược lại
        const completed = newStatus === 'Completed';
        //tạo biến để lưu thời gian, nếu completed là True thì sẽ thêm DateTime.Now vào, còn không thì sẽ trả về null
        const completeTime = completed ? new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }) : null;

        // gọi API method patch để udpate Task
        await axios.patch(`http://localhost:5000/tasks/${taskId}`, { completed, completeTime });

        // Gọi lại hàm fetchTasks để cập nhật dữ liệu mới nhất
        await fetchTasks();
        //thông báo đến người dùng
        toast.success('Task updated successfully!');
    } catch (error) {
        toast.error('Update failed!');
        console.error("There was an error updating the task!", error);
    }
}

export default UpdateTask;