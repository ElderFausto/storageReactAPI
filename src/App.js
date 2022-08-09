import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import Search from './pages/Search';
import SearchForm from './components/SearchForm';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Vitória Storage</h1>
      <Navbar />
      <SearchForm />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/:id/info' element={<Info />}/>
        <Route path='/products/:id' element={<Product />}/>
        <Route path='/search' element={<Search />} />
        <Route path='/company' element={<Navigate to="/abput" />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
