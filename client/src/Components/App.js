import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "../context/user"
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import AllBooks from "./AllBooks";
import Book from "./Book";
import { BookProvider } from "../context/book";

function App() {

  return (
    <div className="App">
      <UserProvider>
        <BookProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/books" element={<AllBooks />} />
            <Route path="/book/:title" element={<Book />} />
          </Routes>
        </BookProvider>
      </UserProvider>
    </div>
  );
}

export default App;