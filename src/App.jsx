import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar"
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Explore />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/category/:categoryName" element={<Category />}></Route>
        <Route path="/profile" element={<PrivateRoute />} >
          <Route path="/profile" element={<Profile />}></Route>  
        </Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/create-listing" element={<CreateListing />}></Route>
        <Route path="/category/:categoryName/:listingId" element={<Listing />}></Route>
        <Route path="/contact/:landlordId" element={<Contact />}></Route>
      </Routes>

      <Navbar />

    </Router>

    <ToastContainer />
    </>
  )
}

export default App
