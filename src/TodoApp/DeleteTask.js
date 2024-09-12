import React from "react";
import axios from "axios";
import { fetchTasks } from "./FetchTask";
import { toast } from "react-toastify";

// Hàm để xóa nhiệm vụ
const DeleteTask = async(taskId, fetchTasks) => {
    try{
        //gọi API method DELETE để xóa đối tượng với Id truyền vào
        await axios.delete(`http://localhost:5000/tasks/${taskId}`);
        //thông báo cho người dùng
        toast.success('Delete success!');
        //Thông báo đến người dùng 
        await fetchTasks();
    }
    catch (error){
        toast.error('Delete fail!');
        console.log(error);
    }
}

export default DeleteTask;