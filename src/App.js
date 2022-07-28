import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes } from "react-router-dom";
import Header from './components/header/Header';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        {/* <Route path='/' element={< />} /> */}
      </Routes>
    </BrowserRouter>
)
}

export default App;
