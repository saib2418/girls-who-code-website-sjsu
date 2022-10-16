import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Slideshow from './Pages/Slideshow';
import About from './Pages/about';
import Events from './Pages/events';
import Eboard from './Pages/eboard';
import Sponsors from './Pages/sponsors';
import Resources from './Pages/resources';
import Contact from './Pages/contact';


function App() {
    return (
        <>
            <Navbar />
            <Slideshow />
            <About />
            <Events />
            <Eboard />
            <Sponsors />
            <Resources />
            <Contact />
        </>
    )
}

export default App;