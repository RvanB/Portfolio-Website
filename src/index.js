import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.render( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
