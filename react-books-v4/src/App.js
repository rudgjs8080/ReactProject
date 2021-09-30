import logo from "./logo.svg";
import "./App.css";
import MainNav from "./comps/MainNav";
import MainNav_1 from "./comps/MainNav_1";
import BookMain from "./comps/BookMain";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MainNav />
      <BrowserRouter>
        <MainNav_1 />
        <BookMain />
      </BrowserRouter>
    </div>
  );
}

export default App;
