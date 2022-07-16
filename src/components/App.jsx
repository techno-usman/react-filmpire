import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Movies, Actors, MovieInformation, Profile, NavBar,
} from './index';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />}>
              <Route path=":movieId" element={<MovieInformation />} />
            </Route>
            <Route path="actors" element={<Actors />}>
              <Route path=":actorId" element={<Actors />} />
            </Route>
            <Route path="/profile/:profileId" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;