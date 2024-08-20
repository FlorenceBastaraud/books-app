import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Library from "./pages/Library";
import Favorites from "./pages/Favorites";
import BloomBookSelection from "./pages/BloomBookSelection";
import BookDetails from "./pages/BookDetails"

export default function App() {

  return (
    <main className="container">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/bloombook-selection" element={<BloomBookSelection/>}/>
        <Route exact path="/library" element={<Library/>}/>
        <Route path="/library/:id" element={<BookDetails/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

