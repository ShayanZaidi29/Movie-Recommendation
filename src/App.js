
import './App.css';
//import LogIn from './MyComponents/LogIn';
import Home from './MyComponents/Home.js';
import Slidebar from './MyComponents/Slidebar';
//import UserProfile from './MyComponents/UserProfile';
//import SignUp from './MyComponents/SignUp';


function App() {
  return (
    <div className="App">
        <Slidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Home />
      {/* <SignUp />  */}
       {/* <LogIn /> */}
      {/* <UserProfile /> */}
    </div>
  );
}

export default App