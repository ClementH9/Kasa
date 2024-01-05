import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Header from './components/Header/header'
import About from './pages/about/about'
import Logement from './pages/logement/logement'
import Error from './pages/error/error'
import Footer from './components/Footer/footer'
import './Assets/css/App.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Logement/:id" element={<Logement />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
