import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Write from './comps/write.jsx'
import View from './comps/view.jsx'


// 프로젝트가 시작될때 임시로 보여질 데이터
const bbsSample = {
	b_date : '2021-09-07',
	b_time : '10:24:12',
	b_writer: '손흥민',
	b_subject: 'react bbs',
	b_content: 'react를 이용한 bbs 프로젝트 만들기'

}
function App() {
	/**
	 * 상태(변수, 객체) bbs를 선언하고
	 * 값의 변경이 필요할 때 사용할 setBBS() 함수를 선언하겠다
	 * useState() 함수를 사용하여 상태를 만든다
	 * 상태를 만들 때 bbsSample을 사용하여 초기값을 설정하겠다ㅣ
	 */
	// input box의 데이터 change event를 처리할 함수 선언
	const [bbsVO, setBBS] = useState(bbsSample);
	const bbsChange = (e) => {
		const {name, value } = e.target
		setBBS({...bbsVO, [name]:value})
	}
	/**
	 * <Write bbs={bbsVO}/> 코드에 대한 설명
	 * import된 write.js 컴포넌트를 결합하고
	 * 선언된 bbsVO 상태변수를 bbs라는 이름으로 전달하는 것
	 * 
	 * Call By Name
	 * 매개변수를 전달할 때 전달받을 변수 이름을 지정하고
	 * 변수 값을 전달하는 방식
	 * 
	 * Write(bbsVO) 형식으로 전달하고
	 * function Write(bbs) {}와 같은 형식
	 * 
	 * <Write onBBSChange={bbsChange}...
	 */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
	  <section className="main_section">
		  <article>
			  <Write bbs={bbsVO} onBBSChange={bbsChange}/>
		  </article>
		  <article>
			  <View bbs={bbsVO} onBBSChange={bbsChange}/>
		  </article>
	  </section>
    </div>
  );
}

export default App;
