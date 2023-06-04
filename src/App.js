import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Header} />

      <Route exact path="/login" component={LoginForm} />
      <Route component={NotFound} />
    </Switch>
  </>
)
export default App
