import styled from 'styled-components';
import Main from './components/home/Main/Main';
import Whatisgoingon from './components/home/Whatisgoingon/Whatisgoingon';
import Aboutus from './components/home/Aboutus/Aboutus';
import Whowehelp from './components/home/Whowehelp/Whowehelp';
import Contact from './components/home/Contact/Contact';
import { BrowserRouter, HashRouter, Route, Link} from 'react-router-dom';

const Styledcontainer = styled.div`
    {
      width: 1900px;
    }
`;

function App() {
  return (
    <Styledcontainer>
      <HashRouter>
        <Route path="/">
          <Main />
        </Route>
        <Route path="whatisgoingon">
          <Whatisgoingon />
        </Route>
        <Route path="aboutus">
          <Aboutus />
        </Route>
        <Route path="whowehelp">
          <Whowehelp />
        </Route>
        <Route path="contact">
          <Contact />
        </Route>
        {/* <Main />
        <Whatisgoingon />
        <Aboutus />
        <Whowehelp />
        <Contact /> */}
      </HashRouter>
    </Styledcontainer>
  );
}

export default App;
