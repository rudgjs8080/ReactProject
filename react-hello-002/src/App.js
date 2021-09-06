import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Write from './components/write'
import View from './components/view'
import View_1 from './components/view_1'
import View_2 from './components/view_2'

function App() {

	/**
	 * friend 객체를 App.js에서 선언하고
	 * write.js와 view.js에 전파하였다
	 * App.js에서 생성된, 선언된 값은 write.js와 view.js에서 볼 수 있다(화면에 그려진다)
	 * 
	 * write.js는 보는 것 뿐만 아니라 키보드를 사용하여
	 * 값을 입력, 변경 할 수 있어야 한다
	 * 하지만 App.js(부모)로 전달받은 friend 변수는
	 * 절대 write.js
	 * 
	 * 
	 */
	const [friend, setFriend] = useState({
		f_name:'호날두',
		f_addr:'포르투갈',
	})

	const onChangeHandle = (e) => {
		const {name, value} = e.target
		setFriend({...friend, [name]:value})
	}

  return (
    <div className="App">
      <header className="App-header">
	  <View_2 friend={friend}/>
        <img src={logo} className="App-logo" alt="logo" />
		<Write friend={friend} onChangeHandle={onChangeHandle}/>
		<View friend={friend} onChangeHandle={onChangeHandle}/>
      </header>
	  <View_1 friend={friend}/>
    </div>
  );
}

export default App;
