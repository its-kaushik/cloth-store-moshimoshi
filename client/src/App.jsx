import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Blog from "./Pages/Blog/Blog";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";

const Layout = () => {
  return(
    <div className="app" >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/men",
        element: <Products product="men" />
      },
      {
        path: "/women",
        element: <Products product="women" />
      },
      {
        path: "/footwear",
        element: <Products product="footwear" />
      },
      {
        path: "/jewelry",
        element: <Products product="jewelry" />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App ;