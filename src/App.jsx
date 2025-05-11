
import ToDoList from "./To-do-list.jsx";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Contact from "./Pages/Contact.jsx";



function App() {

  return (<ToDoList />,
       <Contact />,
     <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<ToDoList />} />
         <Route path="./Pages/Contact.jsx" element={<Contact />} />
       </Routes>
     </BrowserRouter>
  );
 
}

export default App