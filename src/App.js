import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// GLOBAL COMPONENTS
import NavBar from './nav/NavBar';

// PAGES
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';

// landing page for non-specified urls
import NotFoundPage from './components/NotFoundPage';


const App = () => (

  <Router>
    <NavBar />
    <Container className="pt-4">

      <Switch>

        <Route exact path="/" component={ HomePage } />
        <Route path="/about" component={ AboutPage } />
        <Route path="/articles" component={ ArticlesListPage } />
        <Route path="/article/:name" component={ ArticlePage } />

        // displays '404: not found' for all other urls
        <Route component={ NotFoundPage }/>
      </Switch>

    </Container>
  </Router>
);

export default App;
