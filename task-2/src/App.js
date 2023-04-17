import './App.css';
import Navbar from './components/Navbar/navbar';
import Middle from './components/MiddleDiv/Middle';
import Right from './components/RightDiv/Right';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-6 gap-0 h-screen">
      <div className="col-span-1 bg-[#131313] h-full">
        <Navbar></Navbar>
      </div>
      <div className="col-span-2 bg-[#F8F8F8] h-full">
        <Middle></Middle>
      </div>
      <div className="col-span-3 bg-white h-full">
        <Right></Right>
      </div>
    </div>
    </div>
  );
}

export default App;
