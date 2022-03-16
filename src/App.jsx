import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Public from "./Route/Public";
// import Private from "./Route/Private";
// import Home from "./Pages/Home";
// import Admin from "./Pages/Admin";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";
import Selected from "./Pages/Selected";
import Korzinka from "./Pages/Korzinka";
import Contacts from "./Pages/Contacts";
import ServiceRequirements from "./Pages/ServiceRequirements";
import Ordering from "./Pages/Ordering";
import Ordered from "./Pages/Ordered";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import PageNoteFound from "./Pages/PageNoteFound";
import Footer from "./components/Footer";

function App() {
  // const API = "https://phoness.herokuapp.com/phones";

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/selected" element={<Selected />} />
        <Route path="/card" element={<Korzinka />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/service-requirement" element={<ServiceRequirements />} />
        <Route path="/ordering" element={<Ordering />} />
        <Route path="/ordered" element={<Ordered />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PageNoteFound />} />
        {/* <Route path="/" element={<Selected/>} />
        <Route path="/" element={<Admin/>} />
        <Route path="/" element={<Selected/>} /> */}
        {/* <Route path="/" element={<Public />}>
        </Route>
        <Route path="/" element={<Private />}>
        </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
