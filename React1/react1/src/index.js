import React from 'react';
import ReactDOM from 'react-dom/client';
import UseState from './Hooks/useStateExam.js';
import UseEffect from './Hooks/useEffectExam.js';
import UseContext from './Hooks/useContextExam.js';
import UseRef from './Hooks/useRefExam.js';
import UseReducer from './Hooks/useReducer.js';
import UseReducer2 from './Hooks/useReducer2.js';

// Hooks 전용 index
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<UseState />);
// root.render(<UseEffect />);
// root.render(<UseContext />);
// root.render(<UseRef />);
// root.render(<UseReducer />);
root.render(<UseReducer2 />);