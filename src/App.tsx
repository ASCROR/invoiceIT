import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

  Link,
} from "react-router-dom";

import './App.css';


import MainNavigation from './shared/components/Navigation/MainNavigation';
import Clients from "./clients/pages/Clients";
import Companies from "./companies/pages/Companies";
import Invoices from "./invoices/pages/Invoices";
import Profile from "./profile/pages/Profile";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <MainNavigation/>
                <main>

                    <Routes>
                        <Route path="/" element={<Invoices />} />



                        <Route path="/moji-klijenti" element={<Clients />} />



                        <Route path="/moje-tvrtke" element={<Companies />} />



                        <Route path="/profil" element={<Profile />} />



                    </Routes>

                </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
