import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RistrictedRoutes = () => {
  return (
    <div>
      {
        window.localStorage.getItem('token')? <Navigate to='users' />:<Outlet />
      }
     
    </div>
  )
}

export default RistrictedRoutes