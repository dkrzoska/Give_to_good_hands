import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './index.css';
import '../node_modules/reset-css/reset.css';
import { colors, fonts} from './components/settings/settings';

const Basestyle = styled.div `
* {
    font-family: ${fonts.font_base};
    color: ${colors.color_dark_gray};
}`

ReactDOM.render(
  <React.StrictMode>
    <Basestyle>
      <App />
    </Basestyle>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
