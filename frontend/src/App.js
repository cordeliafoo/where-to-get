import React from 'react'
import Route from 'react-router-dom/Route'

import HomeView from './Pages/HomeView.js'

const App = () => (
  <div>
    where to get
    <Route exact path="/homeview" component={HomeView} />
  </div>
)

export default App
