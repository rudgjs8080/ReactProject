import './App.css';
import {Header, MainNav, Footer} from './comps'
import BucketMain from './comps/BucketMain'

function App() {
  return (
    <div className="App">
      <header className="App-header"><Header/>
	  <MainNav/></header>
	<section className="w3-container w3-margin">
		<BucketMain/>
	</section>
	<Footer/>
    </div>
  );
}

export default App;
