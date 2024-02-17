import logo from './logo.svg';
import './App.css';
import Headersec from './components/Headersec';
import Power from './components/Power';
import Unique from './components/Unique';
import Nexai from './components/Nexai';
import Utility from './components/Utility';
import Ready from './components/Ready';
import Footersec from './components/Footersec';
import Blockchain from './components/Blockchain';
import Nexslider from './components/Nexslider';
import Backtotop from './components/Backtotop';
import Preloder from './components/Preloder';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000,
      }
    );
  }, [])
  return (
    <div className="bg-[#040404] overflow-x-clip">
      <Preloder />
      <Headersec />
      <Power />
      <Unique />
      <Blockchain />
      <Nexslider />
      <Nexai />
      <Utility />
      <Ready />
      <Footersec />
      <Backtotop />
    </div>
  );
}
export default App;
