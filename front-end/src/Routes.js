import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Component
import HomePage from './components/HomePage'
import CreateRoom from './components/CreateRoom'
import AdminPage from './components/AdminPage'
import TimePage from './components/TimePage'


class Routes extends React.Component {
  render(){
    return(
      <Router>
          <div className="body">
            <Route exact path="/" component={HomePage} />
            <Route path="/createroom" component={CreateRoom} />
            <Route path="/adminpage" component={AdminPage} />
            <Route path="/timepage" component={TimePage} />
          </div>
      </Router>
    )
  }
}

export default Routes