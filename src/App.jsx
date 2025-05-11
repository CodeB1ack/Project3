
import ToDoList from "./To-do-list.jsx";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Contact from "./Pages/Contact.jsx";



function App() {

  return (<ToDoList />,
       <Contact />,
       <>
       <Navbar />
        <div className="container">
        <Routes>
         <Route path="/" element={<ToDoList />} />
         <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
       </>
  );
 
}

export default App