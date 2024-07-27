import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home, About, Contact, Project,} from './pages';

const App = () => {
    return (

        <>
            <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Project" element={<Project />} />
        <Route path="Contact" element={<Contact />} />
        
            </Routes>
        </>



    )
}

export default App
