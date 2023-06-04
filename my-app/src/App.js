import {BrowserRouter , Routes, Route} from "react-router-dom";
import MainContainer from "./Container/MainContainer";
import SingleContainer from "./Container/SingleContainer";
import InputContainer from "./Container/InputContainer";
import NotFound from "./Components/404/NotFound";

const App =() => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path={'/phonebook-p1'} element={<MainContainer/>}/>
                <Route path={'/contacts/:id'} element={<SingleContainer/>}/>
                <Route path={'/inputForm/:id'} element={<InputContainer/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
