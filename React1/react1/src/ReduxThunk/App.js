import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import List from './list';

function App() {

    return(
        <Provider store={store}>
            <List />
        </Provider>
    );
}

export default App;