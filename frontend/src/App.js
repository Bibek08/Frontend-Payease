import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SidebarLayout from "./pages/SidebarLayout";
import Signup from "./components/Login/Signup";

function App() {
 return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/*" element={<SidebarLayout/>}/>
</Routes>

</BrowserRouter>
 )
}

export default App;
