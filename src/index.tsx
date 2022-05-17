import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import store from 'store'
import { CharacterList } from "./Content/CharacterList/CharacterList";
import App from "./App";
import './index.css'
import { CharacterPage } from "./Content/CharacterPage/CharacterPage";


const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = createRoot(el)


root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<Navigate replace to='/characters' />}/>
            <Route path="characters" element={<CharacterList />}/>
            <Route path="favourite-characters" element={<CharacterList favourite/>}/>
            <Route path="character" element={<Outlet/>}>
              <Route path=":id" element={<CharacterPage/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
);