import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./components/app";

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(<App /> , rootElement);
}
else {
    console.error('Root element not found');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)