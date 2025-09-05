import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './component/weather/ThemeContext.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);



// 🆚 Main Differences
// Feature	JavaScript Strict Mode	                React Strict Mode
// Belongs to	Core JavaScript (ES5)               	React library
// Usage	"use strict"; at top of file   	          <React.StrictMode> wrapper
// Goal	Prevent sloppy JS coding practices	        Detect potential problems in React code
// Effect	Throws errors for unsafe JS code	        Runs extra checks (double renders in dev)
// Runtime	Works in browser/JS engine	            Works in React development environment



// a = 5;
// console.log(a)