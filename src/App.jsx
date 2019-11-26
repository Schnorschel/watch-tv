import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import TVShowPage from './pages/TVShowPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Top-rated TV Shows</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/TVShowPage/:showId" component={TVShowPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
