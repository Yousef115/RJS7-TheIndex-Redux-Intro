import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

//Reducer
import reducer from "./stores/reducer"

const store = createStore(reducer)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById("root"));
registerServiceWorker();
