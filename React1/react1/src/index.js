import React from 'react';
import ReactDOM from 'react-dom/client';
// import Redux1 from './Redux/Counter';
// import { store } from './Redux/store';
// import { Provider } from 'react-redux';
import BasicForm from './FormAndValidation/App'

// Hooks 전용 index
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BasicForm />);

// redux를 쓰기 위해서는 Provider 컴포넌트가 필요
// Provider에 store props를 필수로 전달해야한다.
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         {/* 
//             redux를 사용할 때는 최상위 컴포넌트는 반드시 Provider 컴포넌트를 감싸져야한다.
//             store props 또한 필수적으로 전달해줄 필요가 있다.
//         */}
//         <Provider store={theme}>
//             <Redux3 />
//         </Provider>
//     </React.StrictMode>
// );