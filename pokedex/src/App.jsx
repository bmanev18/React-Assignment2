import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  // return <h1>Hello</h1>;/* 
  return (
    <main className="bg-pokevista bg-contain h-[100vh]">
      <NavBar />
      <h1>Hello</h1>
      <div className="flex justify-center items-center w-full p-20">
        <Outlet />
      </div>
    </main>
  );
}

export default App;