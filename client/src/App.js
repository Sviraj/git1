import {BrowserRouter} from "react-router-dom"; 
import { Routes ,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Topbar from "./components/Topbar/Topbar";
import AddProject from "./pages/AddProject/AddProject";
import Project from "./pages/Project/Project";
import Sidebar from "./components/Sidebar/Sidebar";
import Home1 from "./pages/Home/Home";
 

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
              
              <Route exact path ='/' element={<Home1/>} />
              <Route path ='/project' element={<Project/>} />
              <Route path='/addProject' element={<AddProject/>} />
               
          </Routes>
       
    </div>
    </div>
    </div>
    
    </BrowserRouter>
   
  );
}

export default App;
