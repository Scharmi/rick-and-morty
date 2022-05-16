
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import reducers from './reducers/reducers'
import { CharacterList } from "./Content/CharacterList/CharacterList";
import App from "./App";
import { CharacterPage } from "./Content/CharacterPage/CharacterPage";
 

 
const rootElement = document.getElementById("root");
const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="characters" element={<CharacterList />}/>
          <Route path="favourite-characters" element={<CharacterList favourite/>}/>
          <Route path="character" element={<Outlet/>}>
            <Route path=":id" element={<CharacterPage/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);