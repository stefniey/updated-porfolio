import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home, About, Works, Contact } from './pages';

const App = () => {
    return (

        <>
            <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Works" element={<Works />} />
        <Route path="Contact" element={<Contact />} />
        
            </Routes>
        </>



    )
}

export default App
