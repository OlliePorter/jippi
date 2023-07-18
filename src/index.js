import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import './fonts/Nunito-VariableFont_wght.ttf';  

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);