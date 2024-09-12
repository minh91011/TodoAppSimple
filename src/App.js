
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import Nav from './Nav/Nav';
import ManageTask from './TodoApp/Home';
import ManageUser from './User/User';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Nav />
          <Routes>
            {/* Default route for blank page */}
            <Route path="/" element={<div></div>} />

            {/* Routes for tasks and users */}
            <Route path="/Tasks" element={<ManageTask />} />
            <Route path="/Users" element={<ManageUser />} />

            {/* Redirect unknown routes back to the blank page */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
