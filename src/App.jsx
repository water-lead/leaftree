import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home.jsx';
import How from './containers/How.jsx';
import What from './containers/What.jsx';
import Who from './containers/Who.jsx';
import Jobs from './containers/Jobs.jsx';

function App() {
    const handleKeyboardOperation = (event) => {
        if (event.ctrlKey && event.key === '/') {
            // Perform the desired action (e.g., hide controls in the iFrame)
            console.log("Hide controls in iFrame");
            // Replace the console.log with your actual logic
        }
    };

    useEffect(() => {
        // Add the event listener when the component mounts
        window.addEventListener('keydown', handleKeyboardOperation);

        // Clean up by removing the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyboardOperation);
        };
    }, []); // Empty dependency array ensures it runs only once on mount

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/how we invest" element={<How />} />
                <Route exact path="/what we believe" element={<What />} />
                <Route exact path="/who we are" element={<Who />} />
                <Route exact path="/jobs" element={<Jobs />} />
            </Routes>
        </>
    );
}

export default App;
