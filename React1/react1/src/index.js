import React from 'react';
import ReactDOM from 'react-dom/client';
import UseState from './Hooks/useStateExam.js';
import UseEffect from './Hooks/useEffectExam.js';
import UseContext from './Hooks/useContextExam.js';
import UseRef from './Hooks/useRefExam.js';
import UseReducer from './Hooks/useReducer.js';
import UseReducer2 from './Hooks/useReducer2.js';
import UseMemo from './Hooks/useMemo.js';
import Quiz0207 from './basic/quiz0207.js';
import CustomHook from './Hooks/customHook.js';
import RoutingApp from './RoutingApp.js';
import RouterQuiz from './routerQuiz1/App.js';
import RouterQuiz2 from './routerQuiz2/ProductList.js';

import Quiz2 from './250207Quiz/Quiz.js';

// Hooks 전용 index
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<UseState />);
// root.render(<UseEffect />);
// root.render(<UseContext />);
// root.render(<UseRef />);
// root.render(<UseReducer />);
// root.render(<UseReducer2 />);
// root.render(<UseMemo />);
// root.render(<Quiz0207 />);
// root.render(<CustomHook />);
// root.render(<RoutingApp />);
// root.render(<RouterQuiz />);
// root.render(<RouterQuiz2 />);
root.render(<Quiz2 />);