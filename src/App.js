import './App.css';
import Header from './components/header';
import Ipad from './components/ipad';
import MobileHeader from './components/mobileheader';
import HolidayGift from './components/holidaygift';
import Discount from './components/discount';
import Iphone14 from './components/iphone14';

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
      <Iphone14/>
    </div>
  );
}

export default App;
