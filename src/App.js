import './App.css';
import Header from './components/header';
import Ipad from './components/ipad';
import MobileHeader from './components/mobileheader';
import HolidayGift from './components/holidaygift';

function App() {
  return (
    <div className="App">
      <Header/>
      <MobileHeader/>
      <HolidayGift/>
      <Ipad/>
    </div>
  );
}

export default App;
