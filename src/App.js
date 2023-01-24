import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Library from "./pages/Library";
import Favorites from "./pages/Favorites";

export default function App() {

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

