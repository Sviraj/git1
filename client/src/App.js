import {BrowserRouter} from "react-router-dom"; 
import { Routes ,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Topbar from "./components/Topbar/Topbar";
import AddProject from "./pages/AddProject/AddProject";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
 

function App() {
  return (
    <BrowserRouter>
       <div className="App">
         <Topbar/>
         <div className="container">
         <Sidebar/>
         <div className="others">
            <ToastContainer position="top-center"/>
          <Routes>
              
              <Route exact path='/' element={<Home/>} />
              <Route path='/addProject' element={<AddProject/>} />
              <Route path='/update/:project_ID' element={<AddProject/>} />
          </Routes>
       
    </div>
    </div>
    </div>
    
    </BrowserRouter>
   
  );
}

export default App;
