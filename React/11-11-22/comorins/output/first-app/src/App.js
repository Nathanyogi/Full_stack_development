import React,{useState} from 'react'
import './App.css';
import Header from './header';
import Sidebar from './sidebar';
import Container from './container';

function App() {
  const[login,setLogin] = useState(false)
  const[user,setUser] = useState(null)
  return (
    <>
    <Header state={login} setState={setLogin} userName={user} />
    <div className="row"><Sidebar state={login}/> <Container state={login} setState={setLogin} setUserName={setUser} userName={user}/></div>
    </>
  );
}

export default App;
