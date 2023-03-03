import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import AppHeader from './components/nav';
import Masthead from './components/masthead';
import Services from './components/services';
import Portfolio from './components/portfolio';
import OrderNow from './components/ordernow';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
<Hero></Hero>
<AppHeader/>
<Masthead/>
<Services></Services>
<Portfolio/>
<OrderNow/>
<Footer/>
    </div>
  );
}

export default App;
