import './App.css';
import {Header, Footer, RemBody} from './comps/index'; // /index를 생략도 할 수 있다

function App() {
  return (
    <div className="App">
		<Header/>
		<RemBody/>
		<Footer/>
    </div>
  );
}

export default App;
