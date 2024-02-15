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



function App() {
  return (
    <div className="bg-[#040404]">
      <Headersec />
      <Power />
      <Unique />
      <Blockchain />
      <Nexslider />
      <Nexai />
      <Utility />
      <Ready />
      <Footersec />
    </div>
  );
}
export default App;
