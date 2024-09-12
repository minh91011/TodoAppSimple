import React from "react";
import axios from "axios";
import { fetchTasks } from "./FetchTask";
import { toast } from "react-toastify";

const DeleteTask = async(taskId, fetchTasks) => {
    try{
        await axios.delete(`http://localhost:5000/tasks/${taskId}`);
        toast.success('Delete success!');

        await fetchTasks();
    }
    catch (error){
        toast.error('Delete fail!');
        console.log(error);
    }
}

export default DeleteTask;