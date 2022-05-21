import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Hosts from '../pages/Hosts'
import Vulnerabilities from '../pages/Vulnerabilities'
import LoginPage from '../pages/LoginPage'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/hosts" element={<Hosts />} />
    <Route path="/vulnerabilities" element={<Vulnerabilities />} />
  </Routes>
)

export default AppRoutes
