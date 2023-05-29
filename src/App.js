import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import TopMems from './pages/TopMems';
import Error404 from './pages/Error404';
import Navigation from './components/Navigation';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main className="content"> 
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/TopMems' element={<TopMems />} />
          <Route path='*' element={<Error404 />} /> 
        </Routes>
        </main>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
