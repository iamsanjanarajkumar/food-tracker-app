import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Homepage from './Components/Homepage';
import ViewMore from './Components/ViewMore';
import Hero from './Components/Hero';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={'/'}  element={<Hero />}/>
        {/* <Route path={'/'} element={<Homepage />} /> */}
        <Route path={'/homepage'} element={<Homepage />}/>
        <Route path={`/view/:id`} element={<ViewMore />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


