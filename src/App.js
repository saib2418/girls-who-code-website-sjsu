import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/about';
import Events from './Pages/events';
import Eboard from './Pages/eboard';
import Sponsors from './Pages/sponsors';
import Resources from './Pages/resources';


function App() {
    return (
        <>
            <Navbar />
            <About />
            <Events />
            <Eboard />
            <Sponsors />
            <Resources />
        </>
    )
}

export default App;