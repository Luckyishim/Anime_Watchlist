import "./styles/App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import MyWatchlist from './pages/MyWatchlist';
import AddAnime from './pages/AddAnime';
import About from './pages/About';
import Card from "./components/Card";
import Card_Details from './components/Card_Details';
function App() {
  return (
    <>
      <div className='app-wrapper'>
        <Navbar />
        <main className='main-stuff'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyWatchList" element={<MyWatchlist />} />
            <Route path="/AddAnime" element={<AddAnime />} />
            <Route path="/About" element={<About />} />
            <Route path="/testing" element={<Card />}/>
            <Route path="/test2" element={<Card_Details />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default App;
