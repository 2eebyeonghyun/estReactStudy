import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import List from './todoList';

function App() {

    return(
        <React.StrictMode>
            <Provider store={store}>
                <List />
            </Provider>
        </React.StrictMode>
    );
}

export default App;