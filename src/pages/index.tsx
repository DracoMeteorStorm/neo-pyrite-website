import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from '../reportWebVitals';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

// const container = document.getElementById('root');
// if (container) {
//   const root = createRoot(container);
//   root.render(<App />);
// }

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const container = document.getElementById('root'); // Get the root container
if (container) {
  const root = createRoot(container); // Create the root with createRoot
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
