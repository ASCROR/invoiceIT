import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
    Navigate,
  Link,
} from "react-router-dom";
import MainNavigation from './shared/components/Navigation/MainNavigation';

import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <MainNavigation/>
                <main>

                    <Routes>
                        <Route path="/izrada-fakture" >

                        </Route>
                        <Route path="/moji-klijenti" >

                        </Route>
                        <Route path="/moje-tvtke">

                        </Route>
                        <Route path="/profil">

                        </Route>

                    </Routes>

                </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
