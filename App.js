import logo from './logo.svg';
import './App.css';
import CallAPI from './components/CallAPI';
import PostAPI from './components/PostAPI'


function App() {
  return (
    <div className="App">
      <PostAPI/>
      <CallAPI/>
    </div>
  );
}

export default App;
