import React from 'react'
import './App.scss'

import {
  Dashboard,
  Device,
  Home,
  Login,
  Notifications,
  Security,
  Settings
} from './pages'
import { Menu } from './components'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='container'>
        <Menu />
        <div className='container-content'>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/security'} element={<Security />} />
            <Route path={'/device'} element={<Device />} />
            <Route path={'/notifications'} element={<Notifications />} />
            <Route path={'/settings'} element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
