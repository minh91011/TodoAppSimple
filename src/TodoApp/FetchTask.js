import axios from 'axios';

export const fetchTasks = async () => {
    try {
        //gọi API method GET để lấy dữ liệu, sau đó lấy data từ object được trả về
        const response = await axios.get('http://localhost:5000/tasks');
        return response.data; 
    } catch (error) {
        console.error("There was an error fetching the tasks!", error);
        throw error; 
    }
};
