import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Scroll from "./Scroll"

function Layout() {
  const location = useLocation();
  const isUserPage = location.pathname.startsWith('/user');
  const isContactPage = location.pathname === '/Contact';

  return (
    <div>
      <Scroll />  
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* {(!isUserPage && !isContactPage) && <Footer />} */}
    </div>
  )
}

export default Layout