import './App.css';
import {Header, MainNav, Footer} from './comps'
import BucketMain from './comps/BucketMain'

function App() {
  return (
    <div className="App">
      <Header/>
	  <MainNav/>
	<section>
		<BucketMain/>
	</section>
	<Footer/>
    </div>
  );
}

export default App;
