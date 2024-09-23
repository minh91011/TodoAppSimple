import './App.css';
import 'antd/dist/antd'
import WebLayout from './Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './Routes/AppRouters';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouters/>
      </div>
    </BrowserRouter>
  );
}

export default App;
