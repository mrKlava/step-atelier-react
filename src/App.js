import { Routes, Route } from 'react-router-dom';

import { Navigation } from './components'
import { HomePage, AboutPage, ServicesPage, ContactPage } from './pages'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
