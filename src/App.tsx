import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ContextBooksProvider } from './context/ContextBooks'

import Header from './components/Header'
import Footer from './components/Footer'

import Page404 from './views/Page404'
import Home from './views/Home'
import Selection from './views/Selection'
import Goodbye from './views/Goodbye'

function App() {
  return (
    <ContextBooksProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/goodbye" element={<Goodbye />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ContextBooksProvider>
  )
}

export default App
