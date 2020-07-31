import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import VideoRegistration from './pages/registration/Video';
import CategoryRegistration from './pages/registration/Category';

// Desafio => inserir algo na página 404 (game, etc.)
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={VideoRegistration} />
      <Route path="/cadastro/categoria" component={CategoryRegistration} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);