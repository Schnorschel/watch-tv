import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import TVShowPage from './pages/TVShowPage'
import ActorPage from './pages/ActorPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Top-rated TV Shows</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Back to Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/tv/:showId" component={TVShowPage}></Route>
        <Route exact path="/actor/:actorID" component={ActorPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
      <Footer />
      <section className="footerPadding"></section>
    </Router>
  )
}

export default App
