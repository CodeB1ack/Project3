import ToDoList from "./To-do-list.jsx";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";




function App() {

  return (<ToDoList />,
     <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<ToDoList />} />
         <Route path="/contacts" element={<h1>Contacts</h1>} />
       </Routes>
     </BrowserRouter>
  );
 
}

export default App