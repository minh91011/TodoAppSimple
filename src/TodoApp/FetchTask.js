import axios from 'axios';

export const fetchTasks = async () => {
    try {
        const response = await axios.get('http://localhost:5000/tasks');
        return response.data; 
    } catch (error) {
        console.error("There was an error fetching the tasks!", error);
        throw error; 
    }
};
