import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="grid-container">
    <div className='grid-item header'><Header /></div>
    <div className='grid-item nav'><Nav /></div>
    <div className='grid-item main'><Main /></div>
    <div className='grid-item footer'><Footer /></div>
  </div>
  );
}

export default App;
