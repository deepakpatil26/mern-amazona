import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to='/'>amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />}></Route>
            <Route path='/product/:slug' element={<ProductScreen />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
