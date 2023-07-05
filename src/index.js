import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'; //from App.js, no need to specify .js in this version
import SupportAdmin from './SupportAdmin';

//Ye neeche vaala line gives the current path
//When you write /support => Console mein '/support' ye print hoga
//When normal homepage, tab '/' print hoga
const path=window.location.pathname;
console.log(path);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Neeche vaala line means, if the path has '/support' tab render supportAdmin vaala page, 
    otherwise the Normal Home Page, that is the App vala page will be displayed */}
    { path.indexOf('/support') === -1 ? <App /> : <SupportAdmin /> }
  </React.StrictMode>
);


