import styled from 'styled-components';
import Main from './components/home/Main/Main';
import Whatisgoingon from './components/home/Whatisgoingon/Whatisgoingon';
import Aboutus from './components/home/Aboutus/Aboutus';
import Whowehelp from './components/home/Whowehelp/Whowehelp';
import Contact from './components/home/Contact/Contact';
import Logout from './components/login/Logout/Logout';
import { BrowserRouter, HashRouter, Route, Switch, Link } from 'react-router-dom';
// import Login from './components/login/Login/Login';
// import Register from './components/register/Register/Register';

const Styledcontainer = styled.div`
    {
      width: 1900px;
    }
`;

function App() {
  return (
    <Styledcontainer>
      <Logout />
      {/* <Register /> */}
      {/* <HashRouter>
        <div>
          <Route path="/" component={Main} />
          <Route path="/whatisgoingon" component={Whatisgoingon} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/whowehelp" component={Whowehelp} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter> */}
      {/* <Main />
      <Whatisgoingon />
      <Aboutus />
      <Whowehelp />
      <Contact /> */}
    </Styledcontainer>
  );
}

export default App;
