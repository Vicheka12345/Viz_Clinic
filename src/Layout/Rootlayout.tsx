import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Scroll from "./Scroll"

function Layout() {
  const location = useLocation();
  const isUserPage = location.pathname.startsWith('/user');
  const isContactPage = location.pathname === '/Contact';

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100/40 to-slate-50 min-h-screen">
      <Scroll />  
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout