import './App.css';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Register from './screens/Register';
import AddFile from './screens/AddFile';

function App() {
  return (
    <div className="App">
      <AddFile/>
      <Home/>
      <Register/>
    </div>
  );
}

export default App;
