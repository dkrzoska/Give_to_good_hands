import logo from './logo.svg';
import './App.css';
import Main from './components/home/Main/Main';
import Whatisgoingon from './components/home/Whatisgoingon/Whatisgoingon';
import Aboutus from './components/home/Aboutus/Aboutus';
import Whowehelp from './components/home/Whowehelp/Whowehelp';
import Contact from './components/home/Contact/Contact';
import Footer from './components/home/Footer/Footer';

function App() {
  return (
    <>
      <Main />
      <Whatisgoingon />
      <Aboutus />
      <Whowehelp />
      <Contact />
      <Footer />
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
