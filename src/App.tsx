import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeWrapper } from '@flixbus/honeycomb-react';
import { SeatPremiumZone } from './prototype/SeatPremiumZone';
import { SeatPremiumZone as SeatPZOption4 } from './prototypes/Seat_PZ_Option4/SeatPremiumZone';
import { SeatPremiumZone as SeatPZOption5 } from './prototypes/Seat_PZ_Option5/SeatPremiumZone';

import '@flixbus/honeycomb/dist/css/honeycomb-fonts.css';
import './App.css';

const App = () => (
  <ThemeWrapper theme="flix">
    <BrowserRouter>
      <Routes>
        <Route path="/seat-pz-1" element={<SeatPremiumZone />} />
        <Route path="/seat-pz-1/seatmap" element={<SeatPremiumZone defaultSeatMapOpen />} />
        <Route path="/seat-pz-4" element={<SeatPZOption4 />} />
        <Route path="/seat-pz-4/seatmap" element={<SeatPZOption4 defaultSeatMapOpen />} />
        <Route path="/seat-pz-5" element={<SeatPZOption5 />} />
        <Route path="/seat-pz-5/seatmap" element={<SeatPZOption5 defaultSeatMapOpen />} />
      </Routes>
    </BrowserRouter>
  </ThemeWrapper>
);

export default App;
