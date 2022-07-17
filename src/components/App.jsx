import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useStyles from './styles';
import {
  Movies, Actors, MovieInformation, Profile, NavBar,
} from './index';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="movie/:movieId" element={<MovieInformation />} />
            <Route path="/actors" element={<Actors />}>
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