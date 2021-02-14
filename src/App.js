import styled from 'styled-components';
import Main from './components/home/Main/Main';
import Whatisgoingon from './components/home/Whatisgoingon/Whatisgoingon';
import Aboutus from './components/home/Aboutus/Aboutus';
import Whowehelp from './components/home/Whowehelp/Whowehelp';
import Contact from './components/home/Contact/Contact';
import Login from './components/login/Login/Login';
import Logout from './components/login/Logout/Logout';
import Register from './components/register/Register/Register';
import { BrowserRouter, HashRouter, Route, Switch, Link } from 'react-router-dom';

const Styledcontainer = styled.div`
    {
      width: 100vw;
    }
`;

function App() {
  return (
    <Styledcontainer>
      <BrowserRouter>
        <div>
          <Route exact path="/">
            <Main />
            <Whatisgoingon />
            <Aboutus />
            <Whowehelp />
            <Contact />
          </Route>
          <Route path="/logowanie">
            <Login />
          </Route>
          <Route path="/wylogowanie" component={Logout} />
          <Route path="/rejestracja" component={Register} />
        </div>
      </BrowserRouter>
      {/* <Main />
      <Whatisgoingon />
      <Aboutus />
      <Whowehelp />
      <Contact /> */}
    </Styledcontainer>
  );
}

export default App;
