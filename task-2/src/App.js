import './App.css';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-6 gap-0 h-screen">
      <div className="col-span-1 bg-[#131313] h-full">
        <Navbar></Navbar>
      </div>
      <div className="col-span-2 bg-gray-400 h-full">2/6</div>
      <div className="col-span-3 bg-gray-300 h-full">3/6</div>
    </div>
    </div>
  );
}

export default App;
