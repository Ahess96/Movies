import { useState } from 'react'
import './App.css'
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';

function App() {
  const [user, setUser] = useState(null);

  function setUser2(userInfo) {
    setUser(userInfo);
  }

  return (
    <div className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path='/' element={<MoviesListPage />} />
            <Route path='movies/:movieName' element={<MovieDetailPage />} />
            <Route path='actors' element={<ActorListPage />} />
          </Routes>
        </> 
      :
        <Routes>
          <Route path='/' element={<LoginPage setUser2={setUser2} />} />
        </Routes>
      }
    </div>
  )
}

export default App
