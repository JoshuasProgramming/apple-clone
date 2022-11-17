import './App.css';
import Header from './components/header';
import Ipad from './components/ipad';
import MobileHeader from './components/mobileheader';

function App() {
  return (
    <div className="App">
      <Header/>
      <MobileHeader/>
      <Ipad/>
    </div>
  );
}

export default App;
