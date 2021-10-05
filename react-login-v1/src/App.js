import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./comps/LoginForm";
import MainNav from "./comps/MainNav";
function App() {
  const nav_list = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "공지사항", link: "/notice" },
    { id: 2, title: "자유게시판", link: "/bbs" },
    { id: 3, title: "로그인", link: "/login" },
    { id: 4, title: "회원가입", link: "/join" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MainNav navList={nav_list}></MainNav>
      <LoginForm />
    </div>
  );
}

export default App;
