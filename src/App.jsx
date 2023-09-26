import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

import Sales from './pages/Sales';
import Users from './pages/Users';
import SalesRecord from './pages/SalesRecord';
import Admin from './pages/Admin';

import { useState } from "react";
import { MyContext } from '../src/MyContext.jsx';
import Modifystaff from './pages/modifystatff';
import Stock from './pages/Stock';


function App() {
  const [login, setLogin] = useState("");
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
     <MyContext.Provider value={{ login, setLogin }}>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/logins" element={<Login />} />
        <Route exact path="/stocks" element={<Stock />} />
        <Route exact path="/sales" element={<SalesRecord />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/modifystaff/:id" element={<Modifystaff />} />
        <Route exact path="/stock/:id" element={<Stock/>} />
      </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
