import React from "react";
import ManageTask from '../TodoApp/ManageTask/ManageTask'
import ManageUser from '../TodoApp/ManageUser/ManageUser'
import { Route, Routes } from 'react-router-dom';
import WebLayout from "../Layout/Layout";


const AppRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<WebLayout />}>
                <Route path="Tasks" element={<ManageTask />} />
                <Route path="Users" element={<ManageUser />} />
            </Route>
        </Routes>
    );
}

export default AppRouters;