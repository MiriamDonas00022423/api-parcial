import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegate from './components/Navegate';
import UsersList from './components/UsersList';
import CreateUsers from './components/CreateUsers';

function App() {
  return (
    <BrowserRouter>
      <Navegate />

      <Routes>
        <Route path="/" exact element={<CreateUsers />} />
        <Route path="/user" element={<UsersList />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
