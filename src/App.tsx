import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeWrapper } from '@flixbus/honeycomb-react';
import { SeatPremiumZone } from './prototype/SeatPremiumZone';

import '@flixbus/honeycomb/dist/css/honeycomb-fonts.css';
import './App.css';

const App = () => (
  <ThemeWrapper theme="flix">
    <BrowserRouter>
      <Routes>
        <Route path="/seat-pz-1" element={<SeatPremiumZone />} />
        <Route path="/seat-pz-1/seatmap" element={<SeatPremiumZone defaultSeatMapOpen />} />
      </Routes>
    </BrowserRouter>
  </ThemeWrapper>
);

export default App;
