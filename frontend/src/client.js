import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { hydrate } from 'react-dom'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { createApolloFetch } from 'apollo-fetch'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from './App'
import HomeView from './Pages/HomeView.js'

const apolloMiddleware = (request, next) => {
  request.options.credentials = 'include'
  request.options.headers = {}
  request.options.headers.clientpath = window.location.pathname
  next()
}

const apolloFetch = createApolloFetch({
  uri: 'http://localhost:8000/gql/'
})
apolloFetch.batchUse(apolloMiddleware)

const batchHttpLink = new BatchHttpLink({
  fetch: apolloFetch
})

const client = new ApolloClient({
  link: batchHttpLink,
  cache: new InMemoryCache()
})

hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <HomeView />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
