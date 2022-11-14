/* eslint-disable no-unused-vars */
import { NavLink, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import ChronologyPage from "./pages/ChronologyPage/ChronologyPage";
import HousesPage from "./pages/HousesPage/HousesPage";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import HouseDetailPage from "./pages/HouseDetailPage/HouseDetailPage";
import { useTranslation } from "react-i18next";
import './App.scss';
import Languages from "./components/Languages/Languages";
import IconHome from "./components/IconHome/IconHome";
import { useEffect } from "react";

function App() {
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    document.title = 'Game of Thrones';
  });
  
  return (
    <Router>
    <div className='c-icons'><IconHome /><Languages /></div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/characters' element={<CharactersPage/>} />
        <Route path='/chronology' element={<ChronologyPage/>} />
        <Route path='/houses' element={<HousesPage/>} />
        <Route path='/characters/:name' element={<CharacterDetailPage/>} />
        <Route path='/houses/:name' element={<HouseDetailPage/>} />
      </Routes>
      <nav className="c-nav">
        <NavLink className={({ isActive }) =>
            isActive ? " nav-item__active" : "nav__item"} to='/characters'>{t('nav.characters')}</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? " nav-item__active" : "nav__item"} to='/houses'>{t('nav.houses')}</NavLink>      
        <NavLink className={({ isActive }) =>
            isActive ? " nav-item__active" : "nav__item"} to='/chronology'>{t('nav.chrono')}</NavLink>      
      </nav>
    </Router> 
  );
}

export default App;
