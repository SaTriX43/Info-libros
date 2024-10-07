import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Details from './pages/detalles';
import HeaderWrapper from './components/HeaderWrapper';
import { PeticionProvider } from './context/Peticion';
import PaginationWrapper from './components/PaginationWrapper';


function App() {
  return (
    <PeticionProvider>
    <HashRouter>
      <div className="App">
        <HeaderWrapper/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/details/:id' element={<Details/>} />
          </Routes>
        <PaginationWrapper/>
      </div>
    </HashRouter>
    </PeticionProvider>
  );
}

export default App;
