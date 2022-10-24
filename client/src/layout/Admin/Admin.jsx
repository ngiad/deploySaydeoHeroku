import React  from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import Footer from "../../Components/Footer"
import Loading from '../../Components/Loading'


const Admin = () => {
  return (
    <div>
      <AdminHeader />
        <React.Suspense fallback={<Loading />}>
          <Outlet />
        </React.Suspense>
      <Footer />
    </div>
  )
}

export default Admin