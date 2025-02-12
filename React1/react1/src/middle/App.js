import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import PostList from './list';

function App() {

    return(
        <React.StrictMode>
            <Provider store={store}>
                <div className="App">
                    <PostList />
                </div>
            </Provider>
        </React.StrictMode>
    );
}

export default App;