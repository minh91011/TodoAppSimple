import React from "react";
import axios from "axios";
import { fetchTasks } from "./FetchTask";
import { toast } from "react-toastify";

const UpdateTask = async(taskId, newStatus, fetchTasks) => {
    try {
        const completed = newStatus === 'Completed';
        const completeTime = completed ? new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }) : null;

        // Cập nhật trạng thái trên server
        await axios.patch(`http://localhost:5000/tasks/${taskId}`, { completed, completeTime });

        // Gọi lại hàm fetchTasks để cập nhật dữ liệu mới nhất
        await fetchTasks();

        toast.success('Task updated successfully!');
    } catch (error) {
        toast.error('Update failed!');
        console.error("There was an error updating the task!", error);
    }
}

export default UpdateTask;