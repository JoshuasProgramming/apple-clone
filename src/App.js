import './App.css';
import Header from './components/header';
import Ipad from './components/ipad';
import MobileHeader from './components/mobileheader';
import HolidayGift from './components/holidaygift';
import Discount from './components/discount';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className='navbar-and-banner-container'>
        <MobileHeader/>
        <HolidayGift/>
      </div>
      <Discount/>

      <Ipad/>
      <Ipad/>
      <Ipad/>
      <Ipad/>
    </div>
  );
}

export default App;
