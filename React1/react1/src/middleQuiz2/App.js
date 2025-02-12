import React from "react";
import { Provider } from "react-redux";
import store from './store';

function App() {

    return(
        <React.StrictMode>
            <Provider store={store}>
                <div className="App"></div>
            </Provider>
        </React.StrictMode>
    );
}

export default App;