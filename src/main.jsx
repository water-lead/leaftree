import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Define the function to handle the keyboard operation
const handleKeyboardOperation = (event) => {
    if (event.ctrlKey && event.key === '/') {
        // Perform the desired action (e.g., hide controls in the iFrame)
        console.log("Hide controls in iFrame");
        // Replace the console.log with your actual logic
    }
};

// Add the event listener when the page loads
window.addEventListener('keydown', handleKeyboardOperation);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
